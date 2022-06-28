import { useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Button, Dropdown, Menu, PageHeader } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, MoreOutlined } from '@ant-design/icons';
import styles from './index.module.less'
import menuList, { menuMap, openMultipleMenu, openMultipleSubMenu } from './menuList'

console.log(menuMap,menuList)
const App = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location
    const [collapsed, setCollapsed] = useState(false);
    const [openKeys, setOpenKeys] = useState<string[]>([])
    const [current, setCurrent] = useState<string[]>([]);
    const [menuItem, setMenuItem] = useState({
        title: ''
    })

    // 当选中一个菜单时
    const onSelect = ({ selectedKeys }: any) => {
        let key = selectedKeys[0]
        // 如果menu配置了multiple,这里selectedKeys会有多个值.否则只有一个值.
        setCurrent([key]);

        let item: any = findMenuByKey(menuList, key)
        setMenuItem(item)
        if (item?.route) {
            navigate(item.route)
        }

    };

    // 当菜单展开事件触发时,处理菜单展开状态, 这里配置了同时展开多菜单的开关 openMultipleMenu 和 openMultipleSubMenu
    const onOpenChange = (opens: string[]) => {
        let last: string = opens[opens.length - 1]
        let newOpen: string[] = []
        if (last) {
            if (!openMultipleMenu && last.split('-').length === 1) {
                newOpen = [last]
            } else {
                let first = '';
                let sub = '';
                for (let i = opens.length - 1; i >= 0; i--) {
                    let item: string = opens[i]
                    let onlyOne = item.split('-').length === 1;

                    if (onlyOne) {
                        // 判断是否允许同时打开多个一级菜单
                        if (openMultipleMenu) {
                            newOpen.unshift(item)
                        } else {
                            // 如果已存在一级菜单,则下次循环不在保存
                            if (!first) {
                                newOpen.unshift(item)
                                first = item;
                            }
                        }
                    } else {
                        // 判断是否允许打开多个子菜单
                        if (openMultipleSubMenu) {
                            newOpen.unshift(item)
                        } else {
                            if (!sub) {
                                newOpen.unshift(item)
                                sub = item;
                            } else {
                                // 如果已经存在被打开的子菜单, 但是如果这个菜单,是当前菜单的父级,也要保持打开状态
                                if (sub.startsWith(item)) {
                                    newOpen.unshift(item)
                                }
                            }
                        }
                    }
                }
            }
        }
        setOpenKeys(newOpen)
    };
    const findMenuByPath = (pathname: string) => {
        const item = menuMap[pathname]
        let opens: string[] = []
        if (item) {
            const key = item.key
            setCurrent([key])

            let keyPath = key.split('-')
            // 最后一个不是二级菜单,肯定是一个菜单项,所以不需要设置到openKeys里
            keyPath.pop()

            keyPath.forEach((k: string) => {
                let last = opens[opens.length - 1]
                if (last) {
                    k = last + '-' + k
                }
                opens.push(k)
            })

        }
        return opens
    }

    function findMenuByKey(list: any, key: string) {

        let keyPath: string[] = key.split('-')

        return get(list, 0)

        // 通过keyPath递归查找,比遍历性能更高
        function get(list: any, index: number) {
            let key = keyPath[index]
            let back: any = null
            if (list[key].children) {
                index++
                back = get(list[key].children, index)
            } else {
                back = list[key]
            }
            return back;
        }
    }


    // 根据路由变化,动态展开菜单和选中菜单
    useEffect(() => {
        setMenuItem(menuMap[pathname])
        let opens = findMenuByPath(pathname)
        setOpenKeys(opens)
    }, [pathname])

    const menu = (
        <Menu
            style={{ minWidth: 100 }}
            items={[
                {
                    key: '1',
                    label: 'menu1',
                },
                {
                    key: '2',
                    label: 'menu2',
                },
            ]}
        />
    );

    return <div className={styles.page}>
        <Menu
            mode="inline"
            items={menuList}
            inlineCollapsed={collapsed}
            className={styles.menu}
            selectedKeys={current}
            onSelect={onSelect}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
        />
        <div className={styles.rightContent}>
            <PageHeader
                title={menuItem?.title}
                ghost={false}
                onBack={() => {
                    setCollapsed(!collapsed)
                }}
                backIcon={collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
                extra={[
                    <Button key="3">Operation</Button>,
                    <Button key="2">Operation</Button>,
                    <Button key="1" type="primary">
                        Primary
                    </Button>,
                    <Dropdown key="more" overlay={menu} placement="bottomRight">
                        <Button type="text" icon={<MoreOutlined style={{ fontSize: 20 }}/>}/>
                    </Dropdown>
                ]}
            >
                <Outlet/>
            </PageHeader>
        </div>
    </div>;
};

export default App;