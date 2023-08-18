import { lazy } from 'react'
import { createBrowserRouter, Navigate } from 'react-router-dom'
import type { RouteObject } from 'react-router-dom'
import lazyLoad from './lazyLoad'
import Layout from '@/layout'

// import Home from '@/pages/Home'
// import About from '@/pages/About'

const Home = lazy(() => import('@/pages/Home'))
const About = lazy(() => import('@/pages/About'))

const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />
      },
      { path: 'home', element: lazyLoad(Home) },
      { path: 'about', element: lazyLoad(About) }
    ]
  }
]

console.log(import.meta)

export default createBrowserRouter(routes, {
  basename: import.meta.env.VITE_BASE_URL
})