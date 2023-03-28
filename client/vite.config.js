import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  dotenv.config({ mode });

  return {
    plugins: [react()],
    server: {
      port: 3000,
    },
  }
});
