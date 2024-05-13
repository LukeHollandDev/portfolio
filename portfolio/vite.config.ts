import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

const assetDirectory = "portfolio-assets";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: `${assetDirectory}/[name]-[hash][extname]`,
        chunkFileNames: `${assetDirectory}/[name]-[hash].js`,
        entryFileNames: `${assetDirectory}/[name]-[hash].js`,
      },
    },
  },
});
