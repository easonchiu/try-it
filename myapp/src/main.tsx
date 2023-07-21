/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-21 10:30:48
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-21 14:33:51
 * @Description: 
 */
import React from 'react'
import ReactDOM from 'react-dom/client'
import PageRoutes from './routes/routes'
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <PageRoutes />
    </BrowserRouter>
  </React.StrictMode>,
)
