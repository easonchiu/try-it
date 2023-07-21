/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-21 10:30:48
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-21 14:57:29
 * @Description: 
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      'styled': '/src/styled',
    }
  },
})
