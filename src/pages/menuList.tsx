import React from 'react';
import Icon, { ExperimentOutlined, HomeOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as AntSvg } from '@/assets/ant.svg'

// 是否允许同时展开多个菜单 (仅在 mode=inline 下生效)
const openMultipleMenu: boolean = false
// 是否运行同时展开多个子菜单
const openMultipleSubMenu: boolean = true
// 导航列表
let list = [
    {
        label: '首页',
        icon: <HomeOutlined/>,
        route: '',
        key: '0',
    },
    {
        label: '自定义组件',
        icon: <Icon component={AntSvg}/>,
        children: [
            {
                type: 'group',
                label: '可配置组件',
                children: [
                    {
                        label: 'Drawer',
                        route: '/Drawer',
                    },
                ],
            },
            {
                type: 'group',
                label: '自定义组件',
                children: [
                    {
                        label: 'ChineseInput',
                        route: '/ChineseInput',
                    },
                ],
            },
        ],
    },
    {
        label: 'Utils.js',
        icon: <ExperimentOutlined/>,
        children: [
            {
                label: '扩展函数',
                children: [
                    {
                        label: 'EasyOut',
                        route: '/EasyOut',
                    },
                    {
                        label: 'DoubleCharCodeLength',
                        route: '/DoubleCharCodeLength',
                    },
                ],
            },
            {
                label: '原生封装',
                children: [
                    {
                        label: '原生Ajax',
                        route: '/Ajax',
                    },
                    {
                        label: 'IndexDB',
                        route: '/IndexDB',
                    },
                ]
            }
        ],
    },
];


let menuMap: any = {}

// 给菜单加上统一的key属性
const menuList: MenuProps['items'] = deepAddKey(list, '')

function deepAddKey(menuList: any, parentKey: string = '') {
    return menuList.map((item: any, index: number) => {
        item.title = item.label
        item.key = parentKey ? (parentKey + '-' + index.toString()) : index.toString()
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

export default menuList