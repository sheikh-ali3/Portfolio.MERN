import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  base: '',
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
    assetsDir: "",
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `[name]-[hash][extname]`;
          }
          if (/css/i.test(ext)) {
            return `[name]-[hash][extname]`;
          }
          return `[name]-[hash][extname]`;
        },
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Ensure proper asset handling
    assetsInlineLimit: 0,
    cssCodeSplit: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  },
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  }
});
