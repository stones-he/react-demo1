import React, { Component } from 'react'
import { Form, Input, InputNumber, Modal } from 'antd';

export default class UserForm extends Component {
    formRef = React.createRef()
    onOk = () => {
        this.formRef.current.submit()
    }
    render() {
        return (
            <Modal title="Basic Drawer" visible={this.props.visible} onOk={this.onOk} onCancel={this.props.onCancel}>
                <Form ref={this.formRef} layout="vertical" name="userForm">
                    <Form.Item
                        name="name"
                        label="User Name"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >
                    <Input />
                    </Form.Item>
                    <Form.Item
                        name="age"
                        label="User Age"
                        rules={[
                            {
                            required: true,
                            },
                        ]}
                    >
                        <InputNumber />
                    </Form.Item>
                </Form>
                </Modal>
        )
    }
}
