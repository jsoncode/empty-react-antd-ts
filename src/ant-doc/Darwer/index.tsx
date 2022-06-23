import React, { FC, useEffect, useState } from 'react';
import { Button, Drawer, DrawerProps, Form, Tooltip } from 'antd';
import styles from './index.module.less'
import defaultProps, { config } from './config';
import RenderFormItem from '@/pages/user/Home/RenderFormItem';

const Index: FC = (s) => {
    const [form] = Form.useForm()
    const [drawerProps, setDrawerProps] = useState<DrawerProps>({})

    const showDrawer = () => {
        setDrawerProps({
            ...drawerProps,
            visible: true,
        })
        form.setFieldsValue({
            visible: true,
        })
    };

    const onClose = () => {
        setDrawerProps({})
        form.resetFields()
    };

    const onFormValueChange = (value: any) => {
        if (value.visible === false) {
            onClose()
            return;
        }
        let newProps: any = { ...drawerProps }
        if (value.style) {
            value.style = {
                ...value.style,
                position: 'absolute'
            }
        }
        let key = Object.keys(value)[0];
        if (value[key] === undefined) {
            delete newProps[key]
        } else {
            if (defaultProps[key] === undefined || typeof value[key] === 'object' && JSON.stringify(value[key]) !== JSON.stringify(defaultProps[key]) || (typeof value[key] !== 'object' && value[key] !== defaultProps[key])) {
                newProps = {
                    ...newProps,
                    ...value
                }
                console.log(newProps)
            } else {
                delete newProps[key]
            }
        }
        setDrawerProps({ ...newProps })
    };

    // 根据配置文件,初始化组件的值
    useEffect(() => {

    }, [])

    return <div className={styles.page}>
        <div className={styles.view}>
            <Button type="primary" onClick={showDrawer}>
                Open Drawer
            </Button>
            <Drawer
                title="Basic Drawer"
                onClose={onClose}
                getContainer={false}
                style={{ position: 'absolute' }}
                {...drawerProps}
            >
                <p>Some contents...</p>
            </Drawer>
        </div>
        <div
            className={styles.form}>
            <h3 className={styles.formTitle}>属性配置: </h3>
            <Form
                form={form}
                labelCol={{ span: 12 }}
                wrapperCol={{ span: 12 }}
                layout="horizontal"
                onValuesChange={onFormValueChange}
            >
                {config.sort((a) => {
                    if (a.type === 'boolean'
                        || (a.type.includes('top') && a.type.includes('bottom')) || a.type.includes('large')
                        || a.type.includes('number')
                    ) {
                        return -1
                    } else {
                        return 1
                    }
                }).map(item => {
                    item.default = item.default.replace(/^['"]|['"]$|-/g, '')

                    return <Tooltip
                        key={item.key}
                        overlayStyle={{
                            maxWidth: 400,
                            width: 400
                        }}
                        placement="left"
                        title={<div>
                            <div>属性名称: {item.key}</div>
                            <div>字段类型: {item.type}</div>
                            <div>字段描述: {item.desc}</div>
                            <div>默认值: {item.default}</div>
                            <div>版本: {item.version}</div>
                        </div>}
                    >
                        <div
                            className={styles.formItem}
                        >
                            <RenderFormItem item={item}/>
                        </div>
                    </Tooltip>
                })}
            </Form>
        </div>
    </div>
}

export default Index