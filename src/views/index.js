// -Login
// -404
// -admin
//   -dashboard
//   -artical
//     -list
//     -edit
//   -setting
import {Loading} from '../components'
// import Loadable from 'react-loadable'
import Loadable from './loadable'

//
const Dashboard = Loadable({
    loader : () => import('./DashBoard'),
    loading:Loading
})

const Login = Loadable({
    loader : () => import('./Login'),
    loading:Loading
})

const NotFound = Loadable({
    loader : () => import('./NotFound'),
    loading:Loading
})

const Settings = Loadable({
    loader : () => import('./Settings'),
    loading:Loading
})

const ArticalList = Loadable({
    loader : () => import('./Artical'),
    loading:Loading
})

const ArticalEdit = Loadable({
    loader : () => import('./Artical/Edit'),
    loading:Loading
})

const Todos = Loadable({
    loader : () => import('./Todo'),
    loading:Loading
})

//
// import Dashboard from './DashBoard'
// import Login from './Login'
// import NotFound from './NotFound'
// import Settings from './Settings'
// import ArticalList from './Artical'
// import ArticalEdit from './Artical/Edit'

export {
    Dashboard,
    Login,
    NotFound,
    Settings,
    ArticalList,
    ArticalEdit,
    Todos
}