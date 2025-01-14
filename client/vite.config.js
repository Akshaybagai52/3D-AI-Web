import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    rollupOptions: {
      external: ['@react-three/fiber', '@react-three/drei'],
    },
  },
  optimizeDeps: {
    include: ['@react-three/fiber', '@react-three/drei'],
  },
});
