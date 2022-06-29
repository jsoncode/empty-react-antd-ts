export const config = [
    {
        "key": "autoFocus",
        "type": "boolean",
        "default": "true",
        "desc": "抽屉展开后是否将焦点切换至其 Dom 节点",
        "version": "4.17.0"
    },
    {
        "key": "afterVisibleChange",
        "type": "function(visible)",
        "default": "-",
        "desc": "切换抽屉时动画结束后的回调",
        "version": ""
    },
    {
        "key": "bodyStyle",
        "type": "CSSProperties",
        "default": "-",
        "desc": "可用于设置 Drawer 内容部分的样式",
        "version": ""
    },
    {
        "key": "className",
        "type": "string",
        "default": "-",
        "desc": "对话框外层容器的类名",
        "version": ""
    },
    {
        "key": "closable",
        "type": "boolean",
        "default": "true",
        "desc": "是否显示左上角的关闭按钮",
        "version": ""
    },
    {
        "key": "closeIcon",
        "type": "ReactNode",
        "default": "<CloseOutlined />",
        "desc": "自定义关闭图标",
        "version": ""
    },
    {
        "key": "contentWrapperStyle",
        "type": "CSSProperties",
        "default": "-",
        "desc": "可用于设置 Drawer 包裹内容部分的样式",
        "version": ""
    },
    {
        "key": "destroyOnClose",
        "type": "boolean",
        "default": "false",
        "desc": "关闭时销毁 Drawer 里的子元素",
        "version": ""
    },
    {
        "key": "drawerStyle",
        "type": "CSSProperties",
        "default": "-",
        "desc": "用于设置 Drawer 弹出层的样式",
        "version": ""
    },
    {
        "key": "extra",
        "type": "ReactNode",
        "default": "-",
        "desc": "抽屉右上角的操作区域",
        "version": "4.17.0"
    },
    {
        "key": "footer",
        "type": "ReactNode",
        "default": "-",
        "desc": "抽屉的页脚",
        "version": ""
    },
    {
        "key": "footerStyle",
        "type": "CSSProperties",
        "default": "-",
        "desc": "抽屉页脚部件的样式",
        "version": ""
    },
    {
        "key": "forceRender",
        "type": "boolean",
        "default": "false",
        "desc": "预渲染 Drawer 内元素",
        "version": ""
    },
    {
        "key": "getContainer",
        "type": "HTMLElement | () => HTMLElement | Selectors | false",
        "default": "body",
        "desc": "指定 Drawer 挂载的节点，并在容器内展现，false 为挂载在当前位置",
        "version": ""
    },
    {
        "key": "headerStyle",
        "type": "CSSProperties",
        "default": "-",
        "desc": "用于设置 Drawer 头部的样式",
        "version": ""
    },
    {
        "key": "height",
        "type": "string | number",
        "default": "378",
        "desc": "高度, 在 placement 为 top 或 bottom 时使用",
        "version": ""
    },
    {
        "key": "keyboard",
        "type": "boolean",
        "default": "true",
        "desc": "是否支持键盘 esc 关闭",
        "version": ""
    },
    {
        "key": "mask",
        "type": "boolean",
        "default": "true",
        "desc": "是否展示遮罩",
        "version": ""
    },
    {
        "key": "maskClosable",
        "type": "boolean",
        "default": "true",
        "desc": "点击蒙层是否允许关闭",
        "version": ""
    },
    {
        "key": "maskStyle",
        "type": "CSSProperties",
        "default": "{}",
        "desc": "遮罩样式",
        "version": ""
    },
    {
        "key": "placement",
        "type": "top | right | bottom | left",
        "default": "right",
        "desc": "抽屉的方向",
        "version": ""
    },
    {
        "key": "push",
        "type": "boolean | { distance: string | number }",
        "default": "{ distance: 180 }",
        "desc": "用于设置多层 Drawer 的推动行为",
        "version": "4.5.0+"
    },
    {
        "key": "size",
        "type": "'default' | 'large'",
        "default": "'default'",
        "desc": "预设抽屉宽度（或高度），default 378px 和 large 736px",
        "version": "4.17.0"
    },
    {
        "key": "style",
        "type": "CSSProperties",
        "default": "-",
        "desc": "可用于设置 Drawer 最外层容器的样式，和 drawerStyle 的区别是作用节点包括 mask",
        "version": ""
    },
    {
        "key": "title",
        "type": "ReactNode",
        "default": "-",
        "desc": "标题",
        "version": ""
    },
    {
        "key": "visible",
        "type": "boolean",
        "default": "-",
        "desc": "Drawer 是否可见",
        "version": ""
    },
    {
        "key": "width",
        "type": "string | number",
        "default": "378",
        "desc": "宽度",
        "version": ""
    },
    {
        "key": "zIndex",
        "type": "number",
        "default": "1000",
        "desc": "设置 Drawer 的 z-index",
        "version": ""
    },
    {
        "key": "onClose",
        "type": "function(e)",
        "default": "-",
        "desc": "点击遮罩层或左上角叉或取消按钮的回调",
        "version": ""
    }
]
const defaultProps: any = {}
config.forEach((item: any) => {
    item.default = item.default.replace(/^['"]|['"]$|-/g, '')
    let value = null;
    if (item.type === 'boolean') {
        value = item.default === 'true'
    } else if (item.type === 'string') {
        value = item.default
    } else if (item.type.includes('number') && !isNaN(item.default)) {
        value = Number(item.default)
    } else if (item.type === 'ReactNode' || item.type.includes('string') || (item.type.includes('top') && item.type.includes('bottom')) || item.type.includes('large')) {
        value = item.default
    } else if (item.default) {
        value = item.default
    }
    if (value) {
        if (typeof value === 'string' && value.startsWith('{') && value.endsWith('}')) {
            try {
                value = new Function('return ' + value)()
            } catch (e) {
            }
        }
        defaultProps[item.key] = value
    }
})

export default defaultProps