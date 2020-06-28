import React, { Component } from 'react'
import { Form, Input, Button, Avatar, Typography } from 'antd';
import { SmileOutlined, UserOutlined } from '@ant-design/icons';
import ModalForm  from './UserForm'

const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 16,
    },
  };


export default class FormDemo extends Component {
    constructor() {
        super()
        this.state = {
            visible:false
        }
    }
    setVisible = (v) =>{
        this.setState({
            visible: v
        })
    }
    onFinish = (values) => {
        console.log('Finish:', values);
    }
    showUserModal = ()=> {
        this.setVisible(true)
    }
    hideUserModal = () => {
        this.setVisible(false)
    }
    render() {
        return (
            <div>
                <Form.Provider
                    onFormFinish={(name, { values, forms }) => {
                    if (name === 'userForm') {
                        const { basicForm,userForm } = forms;
                        console.log("from=",forms,values)
                        const users = basicForm.getFieldValue('users') || [];
                        basicForm.setFieldsValue({
                        users: [...users, values],
                        });
                        this.setVisible(false);
                        userForm.resetFields()
                    }
                    }}
                >
                    <Form {...layout} name="basicForm" onFinish={this.onFinish}>
                    <Form.Item
                        name="group"
                        label="Group Name"
                        rules={[
                        {
                            required: true,
                        },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="User List"
                        shouldUpdate={(prevValues, curValues) => prevValues.users !== curValues.users}
                    >
                        {
                        ({ getFieldValue }) => {
                        const users = getFieldValue('users') || [];
                        return users.length ? (
                            <ul>
                            {users.map((user, index) => (
                                <li key={index} className="user">
                                <Avatar icon={<UserOutlined />} />
                                {user.name} - {user.age}
                                </li>
                            ))}
                            </ul>
                        ) : (
                            <Typography.Text className="ant-form-text" type="secondary">
                            ( <SmileOutlined /> No user yet. )
                            </Typography.Text>
                        );
                        }
                        }
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button htmlType="submit" type="primary">Submit</Button>
                        <Button
                            htmlType="button"
                            style={{
                                margin: '0 8px',
                            }}
                            onClick={this.showUserModal}
                            >
                            Add User
                        </Button>
                    </Form.Item>
                    </Form>

                    <ModalForm visible={this.state.visible} onCancel={this.hideUserModal} />
                </Form.Provider>
                </div>
        )
    }
}
