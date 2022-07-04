export const renderHLJS = () => {
    let script: any = document.getElementById('highLightJs')
    if (!script) {
        let loaded = 0;
        script = document.createElement('script')
        script.src = '/highlight.min.js'
        script.id = 'highLightJs'
        document.body.appendChild(script)
        script.addEventListener('load', () => {
            loaded++;
            if (loaded === 2) {
                run()
            }
        })

        let css = document.createElement('link')
        css.rel = "stylesheet"
        css.href = '/atom-one-dark.min.css';
        document.head.appendChild(css)
        css.addEventListener('load', () => {
            loaded++;
            if (loaded === 2) {
                run()
            }
        })
    } else {
        run()
    }

    function run() {
        Array.from(document.querySelectorAll('[class*="language-"]')).forEach(item => {
            (window as any).hljs.highlightElement(item)
        })
    }
}

/**
 *
 * @param start 开始位置
 * @param end 结束位置
 * @param rate 摩擦系数
 * @param callback 回调函数(返回当前位置)
 */
export function easyOut(start: number, end: number, rate: number, callback: (current: number, isEnd: boolean) => void) {
    // easyOut(left, Math.abs(300 - left), 10, (current: number, isEnd: boolean) => {
    //     console.log(current)
    // })

    const _end = end;
    if (start === end) {
        return;
    }
    end = end || 0;
    rate = rate || 2;

    const step = function () {
        start = start + (end - start) / rate;
        if (Math.abs(start - _end) < 1) {
            callback(end, true);
            return;
        }
        callback(start, false);
        requestAnimationFrame(step);
    };
    step();
}

/**
 * 仅用于展示,不做实际调用
 * @param method
 * @param url
 * @param success
 * @param error
 */
export function ajax(method: string, url: string, progress: Function, success: Function, error: Function) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onerror = (e) => {
        error(e)
    };
    xhr.onprogress = (e) => {
        progress(e)
    };
    xhr.onloadend = function () {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
            success(xhr);
        } else {
            error(xhr);
        }
    }
    xhr.send();
}

export function dbLength(str: string) {
    // dbLength('中文123'); // 7
    //判断双字节字符串长度
    let leg = str.length;
    for (let i = 0; i < str.length; i++) {
        let s = str[i]
        let hex = s.charCodeAt(0).toString(16);
        //转换Unicode 编码,再转16进制
        if (hex.length === 4) {
            leg++;
        }
    }
    return leg;
}

type DbOptionProps = {
    dbName: string;
    tbName: string;
    primaryKey: string;
    version?: string;
}

export class DB {
    /* demo
    const db = new DB({
        dbName: 'school',
        tbName: 'class',
        primaryKey: 'id',
    })
    const result = await db.saveIndexedDB({
        id: 'test111',
        v1: '111',
        v2: '222',
    })
    */
    private defaultOptions: DbOptionProps = {
        // 数据库名称
        dbName: 'school',
        // 数据表名称
        tbName: 'class',
        // 主键名称,如果重名,会自动更新掉其对应的值
        primaryKey: 'id',
    }
    private dbOptions: DbOptionProps;

    constructor(options: DbOptionProps) {
        this.dbOptions = { ...options } || this.defaultOptions
    }

    getIndexVersion() {
        /**
         * 获取数据库指定名字的数据
         */
        return new Promise((resolve, reject) => {
            const request = indexedDB.open(this.dbOptions.dbName);
            /**
             * 创建数据表
             */
            request.onupgradeneeded = (e: any) => {
                e.target.result.createObjectStore(this.dbOptions.tbName, { keyPath: this.dbOptions.primaryKey });
            };
            request.onsuccess = (e: any) => {
                const db = e.target.result;
                this.dbOptions.version = db.version;
                resolve(db);
            }
            request.onerror = function (e: any) {
                reject(e);
            };
        });
    }

    getIndexedDB(name: string) {
        return new Promise((resolve, reject) => {
            /**
             * 打开数据库
             */
            this.getIndexVersion().then((db: any) => {
                const transaction = db.transaction(this.dbOptions.tbName, 'readwrite');
                const store = transaction.objectStore(this.dbOptions.tbName);
                const result = store.get(name);
                result.onsuccess = (e: any) => {
                    const obj = e.target.result;
                    resolve(obj);
                };
                result.onerror = (e: any) => {
                    reject(e);
                };
            });
        });
    }

    getIndexedDBAll() {
        /**
         * 获取数据所有数据
         */
        return new Promise((resolve) => {
            // 打开数据库
            this.getIndexVersion().then((db: any) => {
                const store = db.transaction(this.dbOptions.tbName, 'readwrite').objectStore(this.dbOptions.tbName);
                const cursorRequest = store.openCursor();
                const list: any = [];
                cursorRequest.onsuccess = (event: any) => {
                    const cursor = event.target.result;
                    if (cursor) {
                        const value = cursor.value;
                        list.push(value);
                        cursor.continue();
                    } else {
                        resolve(list);
                    }
                }
            });
        });
    }

    saveIndexedDB(fileList: any) {
        /**
         * 保存一条或多条数据
         */
        const list = Array.isArray(fileList) ? fileList : [fileList];
        return new Promise((resolve, reject) => {
            // 打开数据库
            this.getIndexVersion().then((db: any) => {
                if (db.objectStoreNames.length) {
                    const store = db.transaction(this.dbOptions.tbName, 'readwrite').objectStore(this.dbOptions.tbName);
                    save(store, list, resolve, reject);
                }
            });
        });

        function save(store: any, list: any, success: any, error: any) {
            let loaded = 0;
            list.forEach((obj: any) => {
                const result = store.put(obj);
                result.onsuccess = () => {
                    loaded++;
                    if (loaded === list.length) {
                        if (list.length === 1) {
                            success(list[0]);
                        } else {
                            success(list);
                        }
                    }
                };
                result.onerror = () => {
                    loaded++;
                    if (loaded === list.length) {
                        if (list.length === 1) {
                            error(list[0]);
                        } else {
                            error(list);
                        }
                    }
                };
            })
        }
    }

    deleteDB(name: string) {
        /**
         * 删除一条数据
         */
        return new Promise((resolve, reject) => {
            // 打开数据库
            this.getIndexVersion().then((e: any) => {
                const database = e.target.result;
                const store = database.transaction(this.dbOptions.tbName, 'readwrite').objectStore(this.dbOptions.tbName);
                const result = store.delete(name);
                result.onsuccess = function () {
                    resolve(name)
                };
                result.onerror = (event: any) => {
                    reject(event)
                };
            });
        });
    }
}