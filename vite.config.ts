import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        // Allows reloading on deep routes like /project/:id
        historyApiFallback: true,
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        chunkSizeWarningLimit: 1000,
        modulePreload: {
          resolveDependencies: (filename, deps) => {
            return deps.filter(dep => !dep.includes('three-vendor') && !dep.includes('Scene3D'));
          }
        },
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
              'motion-vendor': ['framer-motion'],
              'ui-vendor': ['lucide-react', 'formik', 'yup', '@emailjs/browser']
            }
          }
        }
      }
    };
});
