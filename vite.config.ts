import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { createViteLicensePlugin } from 'rollup-license-plugin'

export default defineConfig({
  plugins: [
    sveltekit(),
    createViteLicensePlugin({
      outputFilename: 'oss-web-licenses.json',
      licenseOverrides: {
        // No dedicated LICENSE file. Found license in README.md
        // https://github.com/wobsoriano/svelte-sonner/blob/main/README.md#license
        'svelte-sonner@0.3.11': 'MIT',

        // LICENSE file in on main, but not registering.
        // https://github.com/svecosystem/mode-watcher/blob/main/LICENSE
        'mode-watcher@0.2.0': 'MIT'
      }
    })
  ],
  test: {
    include: ['src/**/*.{test,spec}.{js,ts}']
  }
});
