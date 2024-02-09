import { readFile, readIniFile } from './fileUtil';
import { cn, flyAndScale } from './shadcnSvelte';

export const isTauri: boolean = '__TAURI__' in window;

export {
  // shadcn-svelte
  cn,
  flyAndScale,

  // fileUtil
  readIniFile,
  readFile
};
