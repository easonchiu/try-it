/*
 * @Author: zhaozhida zhaozhida@qiniu.com
 * @Date: 2023-07-21 10:30:48
 * @LastEditors: zhaozhida zhaozhida@qiniu.com
 * @LastEditTime: 2023-07-21 16:36:49
 * @Description: 
 */
import { defineConfig } from 'vite'
import pluginLinaria from '@linaria/rollup';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), pluginLinaria()],
  resolve: {
    alias: {
      '@': '/src',
      'styled': '/src/styled',
    }
  }
});
