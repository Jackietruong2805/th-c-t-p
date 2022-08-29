import { version } from './package.json';

import { fileURLToPath, URL } from 'url';
import { resolve } from 'path';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';

const root = resolve('./');
const backendRoot = resolve(root);

// https://vitejs.dev/config/
export default defineConfig((env) => {
  const pmVersion = `piepmark.${version}`;
  const cdn = `https://cdn.webinaris.co/assets-webi-v4/${pmVersion}/piepmark/`;
  const query = `&folder=piepmark&version=${pmVersion}`;
  const cdnReady = false;
  console.log(query);

  return {
    plugins: [
      vue(),
      vueJsx({
        babelPlugins: [
          // https://class-component.vuejs.org/guide/installation.html#manual-setup
          {
            plugins: [],
          },
        ],
      }),

      // Visualize and analyze your Rollup bundle to see which modules are taking up space.
      // visualizer({
      //   template: 'treemap',
      // }),

      // https://element-plus.org/en-US/guide/quickstart.html#on-demand-import
      AutoImport({
        resolvers: [],
      }),
      Components({
        resolvers: [],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    /* ======== */
    /* https://sebastiandedeyne.com/vite-with-laravel/ */
    base: cdnReady && env.mode === 'production' ? cdn : '/',
    publicDir: 'fake_dir_so_nothing_gets_copied',
    build: {
      manifest: true,
      outDir: resolve(backendRoot, 'public'),
      assetsDir: 'build/assets',
      rollupOptions: {
        input: ['./src/main.ts'],
        output:
          env.mode === 'production'
            ? {
                entryFileNames: () => 'build/assets/[hash].js',
                chunkFileNames: () => 'build/assets/[hash].js',
                assetFileNames: () => 'build/assets/[hash][extname]',
              }
            : {},
      },
      emptyOutDir: false,
      sourcemap: env.command === 'build' && env.mode === 'development',
    },
    /* ============ */
  };
});
