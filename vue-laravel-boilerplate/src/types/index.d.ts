/// <reference types="./shims-vue.d.ts" />

import type { IPlugins } from '@/plugins/plugins.types';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties extends IPlugins {}
}

