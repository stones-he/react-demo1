import {
    Dashboard,
    Login,
    NotFound,
    Settings,
    ArticalList,
    ArticalEdit,
    Todos,
    Counter,
    Counter2,
    ReduxDemo
} from '../views'

export const mainRouter = [{
    pathname: '/login',
    component: Login
}, {
    pathname: '/404',
    component: NotFound
}]

export const adminRouter = [{
    pathname: '/admin/dashboard',
    component: Dashboard
}, {
    pathname: '/admin/settings',
    component: Settings
}, {
    pathname: '/admin/artical',
    component: ArticalList,
    exact: true
}, {
    pathname: '/admin/artical/edit/:id',
    component: ArticalEdit
}, {
    pathname: '/admin/todo',
    component: Todos
}, {
    pathname: '/admin/counter',
    component: Counter
}, {
    pathname: '/admin/counter2',
    component: Counter2
}, {
    pathname: '/admin/reduxdemo',
    component: ReduxDemo
}]