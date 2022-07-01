import React from 'react';
import { Form, InputNumber, Select, Switch } from "antd";

function RenderFormItem({ item }: any): JSX.Element {
    let html = null
    item.default = item.default.replace(/^['"]|['"]$/g, '')

    if (item.type === 'boolean') {
        html = <Form.Item
            label={item.key}
            name={item.key}
            initialValue={item.default === 'true'}
            valuePropName="checked"
        >
            <Switch />
        </Form.Item>

    } else if ((item.type.includes('top') && item.type.includes('bottom')) || item.type.includes('large')) {
        html = <Form.Item
            label={item.key}
            name={item.key}
            initialValue={item.default}
        >
            <Select>
                {item.type.trim().split(/\s*\|\s*/).map((s: string) => {
                    s = s.replace(/^['"]|['"]$/g, '')
                    return <Select.Option key={s} value={s}>{s}</Select.Option>
                })}
            </Select>
        </Form.Item>

    } else if (item.type.includes('number') && !isNaN(item.default)) {
        html = <Form.Item
            label={item.key}
            name={item.key}
            initialValue={item.default}
        >
            <InputNumber
                style={{ width: '100%' }}
                placeholder={item.default}
            />
        </Form.Item>

    } else if (item.type === 'CSSProperties' || item.type === 'ReactNode' || item.type.includes('string')) {
        html = <Form.Item
            label={item.key}
        >
            {item.default}
        </Form.Item>


    } else if (item.type.includes('function') || item.type.includes('HTMLElement')) {
        let str = item.type.match(/function\(([^()]*)\)/)?.[1] || ''
        html = <Form.Item
            label={item.key}
        >
            {`(${str}) => {}`}
        </Form.Item>
    }
    return <>{html}</>;
}

export default RenderFormItem;