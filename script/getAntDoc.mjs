import fs from 'fs'
import path from 'path'

const dir = 'C:\\Users\\WEIMOB\\Downloads\\ant-design-master\\ant-design-master\\components'

let list = fs.readdirSync(dir)
let components = []
for (let i = 0; i < list.length; i++) {
    let item = list[i]
    if (/^[a-z]/i.test(item) && item !== 'version') {
        let md = path.resolve(dir, item, 'index.zh-CN.md')
        if (fs.existsSync(md)) {
            let name = item.replace(/(^[a-z])|(-[a-z])/g, (a) => {
                return a.toUpperCase()
            }).replace(/-/g, '')
            let newDir = path.resolve('../src/ant-doc', name)
            if (!fs.existsSync(newDir)) {
                fs.mkdirSync(newDir)
            }
            newDir = path.resolve(newDir, 'config.ts')

            let file = fs.readFileSync(md, { encoding: 'utf-8' })
            let config = md2js(file)

        }
    }
}

function md2js(md) {
    let tables = md.replace(/`/g, '').match(/# ([\sa-z.]*)\|([\s\S]*)?#?/ig)
    if (tables) {
        tables = tables[0].split(/\s*#+\s*/)
        let map = {}
        tables.forEach(item => {
            let name = item.match(/^\S*/)
            let keys = []
            let table = item.match(/^\S*\s*(.*)/).trim().split(/\n/).map((sub, index) => {
                sub = sub.split(/\s*\|\s*/).filter(i => i !== '')
                if (index === 0) {
                    keys = chinese2en(sub)
                }
            })

            map[name] = []
        })
    }
}

function chinese2en(keys) {
    return keys.map(i => {
        switch (i) {
            case '参数':
                return 'key';
            case '说明':
                return 'desc';
            case '类型':
                return 'type';
            case '默认值':
                return 'default';
            case '版本':
                return 'version';
            default:
                return i;
        }
    })
}