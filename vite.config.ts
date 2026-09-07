import path from 'path';
import { defineConfig, loadEnv } from 'vite';
// @ts-ignore
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 5173,
        host: '0.0.0.0',
        // Allows reloading on deep routes like /project/:id
        historyApiFallback: true,
      },
      plugins: [
        react()
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            passes: 2,
          }
        },
        chunkSizeWarningLimit: 800,
        // Inline small assets to avoid extra round trips
        assetsInlineLimit: 4096,
        modulePreload: {
          resolveDependencies: (filename, deps) => {
            return deps.filter(dep =>
              !dep.includes('gsap-vendor')
            );
          }
        },
        rollupOptions: {
          output: {
            manualChunks: {
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              'gsap-vendor': ['gsap']
            }
          }
        }
      }
    };
});
