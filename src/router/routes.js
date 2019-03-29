// import Home from '@/pages/home'
// import Cart from '@/pages/cart'
// import Main from '@/pages/main'
// import Product from '@/pages/product'
// import Tabbar from '@/components/bxtabbar'
// import Notfont from '@/pages/Notfont'
// import Change from '@/pages/change'
import Tabbar from '@/components/bxtabbar'
import Search from '@/pages/search'
import Header from '@/components/bxheader'
<<<<<<< HEAD
const detail = () =>
    import('@/pages/detail')
const login = () =>
    import('@/pages/login')
const Home = () =>
    import('@/pages/home')
const Cart = () =>
    import('@/pages/cart')
const Main = () =>
    import('@/pages/mine')
const Notfont = () =>
    import('@/pages/Notfont')
const mall = () =>
    import('@/pages/mall')
const list = () =>
    import('@/pages/list')
const productlist = () =>
    import('@/pages/productlist')
const register = () =>
    import('@/pages/register')
=======
const detail = () => import('@/pages/detail')
const login = () => import('@/pages/login')
const Home = () => import('@/pages/home')
const Cart = () => import('@/pages/cart')
const Main = () => import('@/pages/mine')
const Notfont = () => import('@/pages/Notfont')
const mall = () => import('@/pages/mall')
const list = () => import('@/pages/list')
const productlist = () => import('@/pages/productlist')
const register = () => import('@/pages/register')
>>>>>>> 557efd14c8a88648b1d7427f1094502775394876

export default [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  isTabbar: true,
  title: '首页',
  icon: '&#xe612;',
  components: {
    default: Home,
    tabber: Tabbar,
    header: Header
  }
},
{
  path: '/mall',
  isTabbar: true,
  title: '分类',
  icon: '&#xe635;',
  components: {
    default: mall,
    tabber: Tabbar,
    header: Header
  },
  children: [{
    path: ':id',
    name: 'category',
    components: {
      default: productlist
    }
  }]
}, {
  path: '*',
  redirect: '/404'
}, {
  path: '/404',
  components: {
    default: Notfont,
    header: Header
  }
}, {
  path: '/cart',
  name: 'cart',
  title: '购物车',
  icon: '&#xe61b;',
  isTabbar: true,
  components: {
    default: Cart

  }
}, {
  path: '/main',
  title: '我的',
  icon: '&#xe615;',
  isTabbar: true,
  components: {
    default: Main,
    tabber: Tabbar
  },
  meta: {
    isRequeires: true
  }
},

{
  path: '/search',
  name: 'search',
  components: {
    default: Search
  }
}, {
  path: '/list/:id',
  name: 'list',
  components: {
    default: list

  }
}, {
  path: '/login',
  components: {
    default: login
  }
},

{
  path: '/register',
  components: {
    default: register
  }
},
{
  path: '/detail/:id',
  name: 'detail',
  components: {
    default: detail,
    nbheader: Header

  }
}
]
