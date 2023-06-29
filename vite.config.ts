import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/gmaps_api": {
        target: "https://maps.googleapis.com/maps/api/place/textsearch",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/gmaps_api/, ""),
      },
      "/backend": {
        target: "http://localhost:5000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/backend/, ""),
      },
    },
  },
  plugins: [react()],
});
