import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rollupOptions = {
  external: ["react"],
  output: {
    dir: "lib",
    globals: {
      react: "React",
    },
  },
};

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "my-lib",
      // 导出模块格式
      formats: ["es", "umd", "iife"],
    },
  },
});
