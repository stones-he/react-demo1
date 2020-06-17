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
    ReduxDemo,
    StandReduxDemo
} from '../views'

export const mainRouter = [{
    pathname: '/login',
    component: Login,
    title: 'Login'
}, {
    pathname: '/404',
    component: NotFound,
    title: '404'
}]

export const adminRouter = [{
    pathname: '/admin/dashboard',
    component: Dashboard,
    title: 'Dashboard',
    isNav:true
}, {
    pathname: '/admin/settings',
    component: Settings,
    title: 'Settings',
    isNav:true
}, {
    pathname: '/admin/artical',
    component: ArticalList,
    title: 'Artical',
    exact: true,
    isNav:true
}, {
    pathname: '/admin/artical/edit/:id',
    component: ArticalEdit
}, {
    pathname: '/admin/todo',
    component: Todos,
    title: 'Todos',
    isNav:true
}, {
    pathname: '/admin/counter',
    component: Counter,
    title: 'Counter',
    isNav:true
}, {
    pathname: '/admin/counter2',
    component: Counter2,
    title: 'Counter-2',
    isNav:true
}, {
    pathname: '/admin/reduxdemo',
    component: ReduxDemo,
    title: 'Redux study Demo',
    isNav:true
}, {
    pathname: '/admin/sreduxdemo',
    component: StandReduxDemo,
    title: 'Stand Redux Demo',
    isNav:true
}]