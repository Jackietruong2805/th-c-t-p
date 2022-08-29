**TABLE OF CONTENT**
- [Init plugin types and options](#init-plugin-types-and-options)
- [Regist types](#regist-types)
- [Init plugin instance](#init-plugin-instance)
- [Install in main file](#install-in-main-file)
- [Usage in components](#usage-in-components)

## Init plugin types and options
```ts
// socket.types.ts
interface ISocketPlugin{
  method1(): void
  method2(): void
}
interface ISocketPluginOption {
  options1: string
  options2: string
}
```
---

## Regist types
```ts
// plugins.types.ts
interface IPluginsMap extends IMapStructure {
  // ... other plugin above 
  $socket: [ISocketPlugin, ISocketPluginOption];
}
```
---

## Init plugin instance
```ts
// socket.ts
class SocketPlugin {
  constructor(options?: ISocketPluginOption) {
    console.log(options);
  }
}
export const socketPlugin = installPlugin(
  '$socket',
  (options) => new SocketPlugin(options)
);
```
---

## Install in main file
```ts
// main.ts
app.use(socketPlugin, { option: 'here' });
```
---

## Usage in components
```ts
// Component.vue.ts
export default defineComponent({
   mounted() {
     this.$socket.<method>
  }
}
```
---


