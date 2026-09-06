import path from 'path';
import { defineConfig, loadEnv } from 'vite';
// @ts-ignore
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

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
        react(),
        VitePWA({
          registerType: 'autoUpdate',
          injectRegister: 'inline',
          workbox: {
            // Only precache critical assets to keep initial Service Worker install lightning fast.
            // This intentionally excludes React.lazy() chunks and section images from precaching.
            globPatterns: ['**/*.html', 'assets/index-*.{js,css}', 'assets/*vendor*.js', 'logo-*.png'],
            runtimeCaching: [
              {
                // Cache JS chunks (like LazyAbout.js) when they are naturally fetched on scroll
                urlPattern: /\.js$/,
                handler: 'StaleWhileRevalidate',
                options: {
                  cacheName: 'js-lazy-chunks',
                }
              },
              {
                // Cache images as they appear in the viewport
                urlPattern: /\.(?:png|jpg|jpeg|svg|webp)$/,
                handler: 'CacheFirst',
                options: {
                  cacheName: 'images-cache',
                  expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
                  },
                },
              }
            ]
          }
        })
      ],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
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
              'gsap-vendor': ['gsap'],
              'ui-vendor': ['lucide-react', 'formik', 'yup', '@emailjs/browser']
            }
          }
        }
      }
    };
});
