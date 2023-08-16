import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PageCounter from '../pages/counter'
import PageMiddleware from '../pages/middleware'
import MyPage from '../pages/page'

const router = createBrowserRouter([
  {
    path: '/counter',
    element: <PageCounter />,
  },
  {
    path: '/middleware',
    element: <PageMiddleware />,
  },
  {
    path: '/page',
    element: <MyPage />,
  }
])

function Routers() {
  return <RouterProvider router={router} />
}

export default Routers
