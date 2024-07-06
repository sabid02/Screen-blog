import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/server": {
        target: "http://localhost:7000",
        secure: false,
      },
    },
  },
  plugins: [react()],
});
