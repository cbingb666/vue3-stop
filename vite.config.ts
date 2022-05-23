import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport, { VantResolve } from 'vite-plugin-style-import';
import path from 'path';
import vueJsx from '@vitejs/plugin-vue-jsx';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [VantResolver()],
    }),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
});
