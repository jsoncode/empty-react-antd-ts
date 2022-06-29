import React from 'react';
import Icon, { HomeOutlined, SettingOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as AntSvg } from '@/assets/ant.svg'

// 是否允许同时展开多个菜单 (仅在 mode=inline 下生效)
const openMultipleMenu: boolean = false
// 是否运行同时展开多个子菜单
const openMultipleSubMenu: boolean = true

const routeBase = '/admin'
// 导航列表
let menuList = [
    {
        label: '首页',
        icon: <HomeOutlined/>,
        route: '',
    },
    {
        label: '自定义组件',
        icon: <Icon component={AntSvg}/>,
        children: [
            {
                label: 'Drawer',
                route: '/customComponents',
            },
            {
                label: 'ChineseInput',
                route: '/customComponents/ChineseInput',
            },
        ],
    },
    {
        label: 'Navigation Three - Submenu',
        icon: <SettingOutlined/>,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                        route: '/list'
                    },
                    {
                        label: 'Option 2',
                    },
                ],
            },
            {
                type: 'group',
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                    },
                    {
                        label: 'Option 4',
                    },
                ],
            },
        ],
    },
    {
        label: 'Navigation Three - Submenu2',
        icon: <SettingOutlined/>,
        children: [
            {
                label: 'Item 1',
                children: [
                    {
                        label: 'Option 1',
                    },
                    {
                        label: 'Option 2',
                    },
                ],
            },
            {
                label: 'Item 2',
                children: [
                    {
                        label: 'Option 3',
                    },
                    {
                        label: 'Option 4',
                    },
                ],
            },
        ],
    },
    {
        icon: <SettingOutlined/>,
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                Navigation Four - Link
            </a>
        ),
    },
];

let menuMap: any = {}

// 给菜单加上统一的key属性
menuList = deepAddKey(menuList, '')

function deepAddKey(menuList: any, parentKey: string = '') {
    return menuList.map((item: any, index: number) => {
        item.title = item.label
        item.key = parentKey ? (parentKey + '-' + index) : index.toString()
        if (item.route !== undefined) {
            item.route = routeBase + item.route
            menuMap[item.route] = item;
            item.label = <Link to={item.route}>{item.label}</Link>
        }
        if (item.children) {
            deepAddKey(item.children, item.key)
        }
        return item
    })
}

export {
    menuMap,
    openMultipleMenu,
    openMultipleSubMenu,
}

export default menuList as MenuProps['items']