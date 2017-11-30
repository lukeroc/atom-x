import Loadable from 'react-loadable'
import Loader from '~atoms/loader'

// Set Loadable defaults
const loadableDefaults = {
  delay: 300,
  loading: Loader,
  timeout: 10000
}

export const ROUTES = [
  {
    component: Loadable({
      loader: () => import('~pages/auth'),
      ...loadableDefaults
    }),
    exact: true,
    name: 'Auth',
    path: '/auth'
  },
  {
    component: Loadable({
      loader: () => import('~containers/home'),
      ...loadableDefaults
    }),
    exact: true,
    name: 'Home',
    path: '/'
  },
  {
    component: Loadable({
      loader: () => import('~pages/about'),
      ...loadableDefaults
    }),
    exact: true,
    name: 'About',
    path: '/about'
  },
  {
    component: Loadable({
      loader: () => import('~pages/posts'),
      ...loadableDefaults
    }),
    exact: true,
    name: 'Posts',
    path: '/posts'
  },
  {
    component: Loadable({
      loader: () => import('~pages/error'),
      ...loadableDefaults
    }),
    exact: null,
    name: null,
    path: null
  }
]
