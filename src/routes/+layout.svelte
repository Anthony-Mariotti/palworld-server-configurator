<script lang="ts">
  import { GithubIcon, InfoIcon, MinusIcon, PictureInPicture2Icon, XIcon } from 'lucide-svelte';
  import '../app.pcss';

  import { onMount } from 'svelte';
  import { Toaster } from '$lib/components/ui/sonner';
  import * as Dialog from '$lib/components/ui/dialog';
  import { ModeWatcher } from 'mode-watcher';
  import { cn, isTauri } from '$lib/utils';
  import type { WebviewWindow } from '@tauri-apps/api/window';
  import { Button } from '$lib/components/ui/button';

  import { dev, version as webVersion } from '$app/environment';
  import { page } from '$app/stores';
  import { mediaQuery } from 'svelte-legos';

  let appWindow: WebviewWindow;
  let title: string = 'Palworld Server Configurator';
  let mode: string = 'Web';
  let version: string = webVersion;

  onMount(async () => {
    if (isTauri) {
      appWindow = (await import('@tauri-apps/api/window')).appWindow;
      version = await (await import('@tauri-apps/api/app')).getVersion();
      title = await appWindow.title();
      mode = 'Desktop';
      document.body.classList.add('overflow-hidden');
    } else {
      const analytics = (await import('@vercel/analytics')).inject;
      analytics({
        mode: dev ? 'development' : 'production'
      });
    }
  });

  const isLarge = mediaQuery('(min-width: 1024px)');
</script>

<svelte:head>
  <meta
    name="robots"
    content={$page.url.hostname === 'palworldserverconfigurator.com'
      ? 'index, follow'
      : 'noindex, nofollow'}
  />
</svelte:head>

<div
  class="fixed left-0 right-0 top-0 z-[100] flex h-10 select-none justify-between bg-primary text-opacity-100 shadow"
>
  <div data-tauri-drag-region class="flex grow items-center gap-2 pl-4">
    <img src="/favicon.png" alt="logo" class="h-5 w-5" />
    <span data-tauri-drag-region class="text-base font-bold tracking-wide">{title}</span>
  </div>
  <div data-tauri-drag-region class="flex items-center gap-2">
    <div>
      <Dialog.Root>
        <Dialog.Trigger
          class="inline-flex h-8 w-10 items-center justify-center rounded-sm transition-all hover:bg-[#cb8cf4]"
        >
          <InfoIcon class="h-5 w-5" />
        </Dialog.Trigger>
        <Dialog.Content>
          <Dialog.Header class="border-b-2 pb-2 text-left">
            <Dialog.Title>Palworld Server Configurator</Dialog.Title>
            <Dialog.Description>
              <Button
                href="https://github.com/Anthony-Mariotti/palworld-server-configurator"
                class="p-0"
                target="_blank"
                variant="link">Made with ❤️ on GitHub</Button
              >
            </Dialog.Description>
          </Dialog.Header>
          <div class="flex flex-col gap-2">
            <section class="grid grid-cols-[1fr_3fr] gap-2">
              <h2>Mode:</h2>
              <p>{mode}</p>
            </section>
            <section class="grid grid-cols-[1fr_3fr] gap-2">
              {#if isTauri}
                <h2>App Version:</h2>
              {:else}
                <h2>Version:</h2>
              {/if}
              <p>{version}</p>
            </section>
            {#if isTauri}
              <section class="grid grid-cols-[1fr_3fr] gap-2">
                <h2>Web Version:</h2>
                <p>{webVersion}</p>
              </section>
            {/if}
            <section class="grid grid-cols-[1fr_3fr] gap-2">
              <h2>License:</h2>
              <p>AGPL-3.0</p>
            </section>
          </div>
          <Dialog.Footer>
            <Button href="https://github.com/Anthony-Mariotti/palworld-server-configurator/issues" target="_blank">Report Issue</Button>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>

      <a
        href="https://github.com/Anthony-Mariotti/palworld-server-configurator"
        target="_blank"
        class="inline-flex h-8 w-10 items-center justify-center rounded-sm transition-all hover:bg-[#cb8cf4]"
      >
        <GithubIcon class="h-5 w-5" />
      </a>
    </div>
    <div>
      {#if isTauri}
        <button
          id="titlebar-minimize"
          class="inline-flex h-10 w-12 items-center justify-center transition-all hover:bg-[#cb8cf4]"
          on:click={appWindow.minimize}
        >
          <MinusIcon class="h-5 w-5" />
        </button>
        <button
          id="titlebar-maximize"
          class="inline-flex h-10 w-12 items-center justify-center transition-all hover:bg-[#cb8cf4]"
          on:click={appWindow.toggleMaximize}
        >
          <PictureInPicture2Icon class="h-5 w-5" />
        </button>
        <button
          id="titlebar-close"
          class="inline-flex h-10 w-12 items-center justify-center transition-all hover:bg-red-600 hover:text-white"
          on:click={appWindow.close}
        >
          <XIcon class="h-5 w-5" />
        </button>
      {/if}
    </div>
  </div>
</div>
<div class={cn(isTauri && 'mb-96 overflow-auto', 'mt-10 max-h-[calc(100vh-2.5rem)] min-h-full')}>
  <slot />
</div>

<Toaster theme="light" richColors closeButton position={$isLarge ? 'bottom-left' : 'top-center'} />
<ModeWatcher defaultMode="light" track={false} />
