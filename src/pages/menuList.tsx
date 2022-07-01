import React from 'react';
import Icon, { BarsOutlined, ExperimentOutlined, GroupOutlined, HomeOutlined, LinkOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as AntSvg } from '@/assets/ant.svg'

// 是否允许同时展开多个菜单 (仅在 mode=inline 下生效)
const openMultipleMenu: boolean = false
// 是否运行同时展开多个子菜单
const openMultipleSubMenu: boolean = true
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
                label: '可配置抽屉组件',
                route: '/Drawer',
            },
            {
                label: 'ChineseInput',
                route: '/ChineseInput',
            },
        ],
    },
    {
        label: 'Utils.js',
        icon: <ExperimentOutlined/>,
        children: [
            {
                label: 'EasyOut',
                route: '/EasyOut',
            },
            {
                label: '原生Ajax',
                route: '/Ajax',
            },
            {
                label: 'IndexDB',
                route: '/IndexDB',
            },
            {
                label: 'DoubleCharCodeLength',
                route: '/DoubleCharCodeLength',
            },
        ],
    },
    {
        label: '带分组的菜单',
        icon: <GroupOutlined/>,
        children: [
            {
                type: 'group',
                label: 'Item 1',
                children: [
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
        label: '三级菜单',
        icon: <BarsOutlined/>,
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
        icon: <LinkOutlined/>,
        label: (
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                外链菜单
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