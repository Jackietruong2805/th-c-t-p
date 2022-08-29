/// <reference types="vite/client" />
/// <reference types="src/types/index.d.ts" />

interface ImportMetaEnv {
  readonly VITE_SOCKET_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
