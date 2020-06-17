import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
// 用于处理子路由，把路由相关的上下文添加到当前路由中
import {withRouter} from 'react-router-dom'
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {adminRouter } from '../../routes'
const { Header, Content, Sider } = Layout;

const menus = adminRouter.filter(route => route.isNav === true)
class DefaultLayout extends Component {
    handleMenuClick = ({key}) => {
        this.props.history.push(key)
    }
    render() {
        console.log(this.props)
        return (
            <Layout>
                <Header className="header">
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">nav 1</Menu.Item>
                    <Menu.Item key="2">nav 2</Menu.Item>
                    <Menu.Item key="3">nav 3</Menu.Item>
                </Menu>
                </Header>
                <Layout>
                    <Sider width={200} className="site-layout-background">
                        <Menu
                        mode="inline"
                        defaultSelectedKeys={[menus[0].pathname]}
                        selectedKeys={[this.props.location.pathname]}
                        defaultOpenKeys={['sub1']}
                        onClick={this.handleMenuClick}
                        style={{ height: '100%', borderRight: 0 }}
                        >
                            {
                                menus.map(menu=> {
                                    return (
                                        <Menu.Item key={menu.pathname}>{menu.title}</Menu.Item>
                                    )
                                })
                            }
                            
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                        }}
                        >
                            {
                                this.props.children
                            }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        )
    }
}

export default withRouter(DefaultLayout)