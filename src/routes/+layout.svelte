<script lang="ts">
  import { MinusIcon, PictureInPicture2Icon, XIcon } from 'lucide-svelte';
  import '../app.pcss';

  import { appWindow } from '@tauri-apps/api/window'
    import { onMount } from 'svelte';

  let title: string = '<title>';

  onMount(async () => {
    title = await appWindow.title();
  })
</script>

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
<div class="mt-10 max-h-[calc(100vh-2.5rem)] overflow-auto mb-16">
  <slot />
</div>
