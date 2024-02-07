import autoAdapter from '@sveltejs/adapter-auto';
import staticAdapter from '@sveltejs/adapter-static';
import vercelAdapter from '@sveltejs/adapter-vercel';

import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [vitePreprocess({})],

  kit: {
    adapter: getAdapter(),
    version: {
      name: await getWebVersion()
    }
  }
};

/** @returns {import('@sveltejs/kit').Adapter} **/
function getAdapter() {
  switch (process.env.ADAPTER) {
    case 'vercel':
      return vercelAdapter();
    case 'tauri':
      return staticAdapter();
    default:
      // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
      // If your environment is not supported or you settled on a specific environment, switch out the adapter.
      // See https://kit.svelte.dev/docs/adapters for more information about adapters.
      return autoAdapter();
  }
}

/** @returns {Promise<string>} **/
function getWebVersion() {
  return new Promise(async (resolve, reject) => {
    try {
      const file = fileURLToPath(new URL('package.json', import.meta.url));
      const json = readFileSync(file, 'utf-8');
      const pkg = JSON.parse(json);

      resolve(pkg.version);
      return;
    } catch (err) {
      reject('Failed to get version from package.json');
    }
  });
}

export default config;
