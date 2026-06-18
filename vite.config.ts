import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3400,
        host: "0.0.0.0",
        historyApiFallback: true,
      },
      preview: {
        port: 4173,
        historyApiFallback: true,
      },
      plugins: [
        react(),
        // Gzip compression
        viteCompression({
          algorithm: 'gzip',
          ext: '.gz',
          threshold: 10240,
          deleteOriginFile: false,
        }),
        // Brotli compression
        viteCompression({
          algorithm: 'brotliCompress',
          ext: '.br',
          threshold: 10240,
          deleteOriginFile: false,
        }),
      ],
      define: {
        "process.env.API_KEY": JSON.stringify(env.VITE_GEMINI_API_KEY),
        "process.env.GEMINI_API_KEY": JSON.stringify(env.VITE_GEMINI_API_KEY),
      },
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "."),
        },
      },
      optimizeDeps: {
        include: [
          'react',
          'react-dom',
          'framer-motion',
          'lucide-react',
          '@google/genai',
        ],
      },
      build: {
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
            passes: 2,
            unsafe_arrows: true,
            unsafe_methods: true,
          },
          mangle: {
            safari10: true,
          },
          format: {
            comments: false,
          },
        },
        cssMinify: true,
        reportCompressedSize: false,
        chunkSizeWarningLimit: 1000,
        rollupOptions: {
          output: {
            manualChunks: (id: string) => {
              // React + framer-motion core vendor chunk
              if (
                id.includes('node_modules/react/') ||
                id.includes('node_modules/react-dom/') ||
                id.includes('node_modules/scheduler/')
              ) {
                return 'vendor-react';
              }
              // Framer Motion in its own chunk (large library)
              if (id.includes('node_modules/framer-motion')) {
                return 'vendor-framer';
              }
              // Lucide icons
              if (id.includes('node_modules/lucide-react')) {
                return 'vendor-lucide';
              }
              // Google AI SDK
              if (
                id.includes('node_modules/@google/genai') ||
                id.includes('node_modules/@google/generative-ai')
              ) {
                return 'vendor-ai';
              }
              // All other node_modules
              if (id.includes('node_modules/')) {
                return 'vendor-utils';
              }
            },
            // Use content hash for long-term caching
            chunkFileNames: 'assets/[name]-[hash].js',
            entryFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash][extname]',
          },
        },
      },
    };
});
