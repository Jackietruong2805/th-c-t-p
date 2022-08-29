import type { IPlugins, IPluginsOptions } from './plugins.types';

export function createPlugin<N extends keyof IPlugins>(
  pluginName: N,
  callback: (options: IPluginsOptions[N]) => IPlugins[N]
) {
  return {
    install: (app: any, options: IPluginsOptions[N]) => {
      app.config.globalProperties[pluginName as string] = callback(options);
    },
  };
}

export function createFunctionPlugin<N extends keyof IPlugins>(
  pluginName: N,
  callback: IPlugins[N]
) {
  return {
    install: (app: any) => {
      app.config.globalProperties[pluginName as string] = callback;
    },
  };
}

/**
 * incase we use `export default defineComponent({ ... })` and need types check support
 */
export function extractPlugin<N extends keyof IPlugins>(
  context: any,
  name: N
): IPlugins[N] | null {
  return context[name] || null;
}
