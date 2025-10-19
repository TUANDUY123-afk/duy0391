import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Khối 'define' này rất quan trọng.
  // Nó lấy API_KEY từ môi trường build của Vercel (process.env.API_KEY)
  // và làm cho nó có sẵn trong mã nguồn phía client của bạn dưới cùng một tên.
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})
