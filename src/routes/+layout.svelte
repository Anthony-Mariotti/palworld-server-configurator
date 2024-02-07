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

  import { version as webVersion } from '$app/environment';
    import { page } from '$app/stores';

  let appWindow: WebviewWindow;
  let title: string = 'Palworld Server Configurator';
  let mode: string = 'Web';
  let version: string = webVersion;

  onMount(async () => {
    if (isTauri) {
      appWindow = ((await import('@tauri-apps/api/window')).appWindow)
      version = (await (await import('@tauri-apps/api/app')).getVersion())
      title = await appWindow.title();
      mode = 'Desktop';
      document.body.classList.add('overflow-hidden');
    }
  })
</script>

  <svelte:head>
    <meta name="robots" content={$page.url.hostname === 'palworldserverconfigurator.com' ? 'index, follow' : 'noindex, nofollow'}>
  </svelte:head>

  <div class="h-10 bg-primary text-opacity-100 select-none flex justify-between fixed top-0 left-0 right-0 z-[100]">
    <div data-tauri-drag-region class="grow flex items-center pl-4 gap-2">
      <img src="/favicon.png" alt="logo" class="w-5 h-5" />
      <span data-tauri-drag-region class="text-base tracking-wide font-bold">{title}</span>
    </div>
    <div data-tauri-drag-region class="flex items-center gap-2">
      <div>
        <Dialog.Root>
          <Dialog.Trigger class="inline-flex justify-center items-center w-10 h-8 hover:bg-[#cb8cf4] rounded-sm transition-all">
              <InfoIcon class="w-5 h-5" />
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Header class="text-left border-b-2 pb-2">
              <Dialog.Title>Palworld Server Configurator</Dialog.Title>
              <Dialog.Description>
                <Button href="https://github.com/Anthony-Mariotti/palworld-server-configurator" class="p-0" variant="link">Made with ❤️ on GitHub</Button>
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
            </div>
          </Dialog.Content>
        </Dialog.Root>
        
        <a href="https://github.com/Anthony-Mariotti/palworld-server-configurator" target="_blank" class="inline-flex justify-center items-center w-10 h-8 hover:bg-[#cb8cf4] rounded-sm transition-all">
          <GithubIcon class="w-5 h-5" />
        </a>
      </div>
      <div>
        {#if isTauri}
          <button id="titlebar-minimize" class="inline-flex justify-center items-center w-12 h-10 hover:bg-[#cb8cf4] transition-all" on:click={appWindow.minimize}>
            <MinusIcon class="w-5 h-5" />
          </button>
          <button id="titlebar-maximize" class="inline-flex justify-center items-center w-12 h-10 hover:bg-[#cb8cf4] transition-all" on:click={appWindow.toggleMaximize}>
            <PictureInPicture2Icon class="w-5 h-5" />
          </button>
          <button id="titlebar-close" class="inline-flex justify-center items-center w-12 h-10 hover:bg-red-600 hover:text-white transition-all" on:click={appWindow.close}>
            <XIcon class="w-5 h-5" />
          </button>
        {/if}
      </div>
    </div>
  </div>
<div class={cn(isTauri && 'overflow-auto mb-96', 'max-h-[calc(100vh-2.5rem)] mt-10 min-h-full')}>
  <Toaster theme="light" />
  <slot />
</div>
<ModeWatcher defaultMode="light" track={false} />

