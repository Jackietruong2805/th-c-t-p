interface IPluginsMap {

}

export type IPlugins = {
  [Property in keyof IPluginsMap]: IPluginsMap[Property][0];
};

export type IPluginsOptions = {
  [Property in keyof IPluginsMap]: IPluginsMap[Property][1];
};
