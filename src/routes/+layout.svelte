<script lang="ts">
  import { MinusIcon, PictureInPicture2Icon, XIcon } from 'lucide-svelte';
  import '../app.pcss';

  import { onMount } from 'svelte';
  import { Toaster } from '$lib/components/ui/sonner';
  import { ModeWatcher, setMode } from 'mode-watcher';
  import { cn, isTauri } from '$lib/utils';
  import type { WebviewWindow } from '@tauri-apps/api/window';

  let appWindow: WebviewWindow;
  let title: string = '';

  onMount(async () => {
    if (isTauri) {
      appWindow = ((await import('@tauri-apps/api/window')).appWindow)
      title = await appWindow.title();
      document.body.classList.add('overflow-hidden');
    }
  })
</script>

{#if isTauri}
  <div class="h-10 bg-[#329ea3] select-none flex justify-between fixed top-0 left-0 right-0 z-10">
    <div data-tauri-drag-region class="grow flex items-center pl-4 gap-2">
      <img src="/favicon.png" alt="logo" class="w-5 h-5" />
      <span data-tauri-drag-region class="text-base font-bold">{title}</span>
    </div>
    <div data-tauri-drag-region>
      <button id="titlebar-minimize" class="inline-flex justify-center items-center w-12 h-10 hover:bg-[#5bbec3] transition-all" on:click={appWindow.minimize}>
        <MinusIcon class="w-5 h-5" />
      </button>
      <button id="titlebar-maximize" class="inline-flex justify-center items-center w-12 h-10 hover:bg-[#5bbec3] transition-all" on:click={appWindow.toggleMaximize}>
        <PictureInPicture2Icon class="w-5 h-5" />
      </button>
      <button id="titlebar-close" class="inline-flex justify-center items-center w-12 h-10 hover:bg-red-600 hover:text-white transition-all" on:click={appWindow.close}>
        <XIcon class="w-5 h-5" />
      </button>
    </div>
  </div>
{/if}
<div class={cn(isTauri && 'max-h-[calc(100vh-2.5rem)] mt-10 overflow-auto mb-96', 'min-h-full')}>
  <Toaster theme="light" />
  <slot />
</div>
<ModeWatcher defaultMode="light" track={true} />

