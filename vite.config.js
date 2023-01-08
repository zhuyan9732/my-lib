import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const rollupOptions = {
  external: ["react", "react-dom"],
  output: {
    dir: "lib",
    globals: {
      react: "React",
    },
  },
};

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {
      NODE_ENV: "development",
    },
  },
  build: {
    rollupOptions,
    minify: false,
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "MyLib",
      // the proper extensions will be added
      fileName: "my-lib",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
  },
});
