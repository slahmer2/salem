import path from 'path';
import react from '@vitejs/plugin-react'; // Correct import statement
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});