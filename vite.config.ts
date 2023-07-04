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
      "/get_place_details": {
        target: "http://127.0.0.1:5000/get_place_details",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/get_place_details/, ""),
      },
    },
  },
  plugins: [react()],
});
