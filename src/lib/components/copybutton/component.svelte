<script lang="ts">
  import { CheckCircleIcon, CopyIcon, XCircleIcon } from 'lucide-svelte';
  import type { Props } from '.';
  import { Button } from '../ui/button';
  import { cn, isTauri } from '$lib/utils';
  import { toast } from 'svelte-sonner';
  import { onMount } from 'svelte';

  type $$Props = Props;

  let className: $$Props['class'] = undefined;
  export let text: $$Props['text'];
  export let full: $$Props['full'] = false;
  export { className as class };

  let writeText: (text: string) => Promise<void>;

  const ERROR_MSG: string = 'There was an error copying to clipboard!';

  onMount(async () => {
    if (isTauri) {
      writeText = (await import('@tauri-apps/api/clipboard')).writeText;
    }
  });

  const copy = async (): Promise<void> => {
    if (copied || failed) {
      return;
    }

    if (isTauri) {
      try {
        await writeText(text);
        success();
      } catch (err) {
        if (err instanceof Error) {
          error(ERROR_MSG, err.message);
          return;
        }
        error(ERROR_MSG);
      }
      return;
    }

    if ('clipboard' in navigator) {
      try {
        await navigator.clipboard.writeText(text);
        success();
      } catch (err) {
        if (err instanceof Error) {
          error(ERROR_MSG, err.message);
          return;
        }

        error(ERROR_MSG);
      }
      return;
    }

    try {
      const element = document.createElement('textarea');
      element.id = 'copy-config-area';
      element.disabled = true;
      element.classList.add('fixed', 'z-[-100]', 'pointer-events-none', 'opacity-0');
      element.value = text;

      document.body.appendChild(element);

      element.click();
      element.select();

      // Legacy copy support
      document.execCommand('copy');
      document.body.removeChild(element);

      success();
      return;
    } catch (err) {
      if (err instanceof Error) {
        error(ERROR_MSG, err.message);
        return;
      }

      error(ERROR_MSG);
      return;
    }
  };

  const error = (msg: string, err?: string): void => {
    failed = true;
    copied = false;

    setTimeout(() => {
      failed = false;
    }, 4000);

    toast.error('Failure', {
      description: err ? msg + ` ${err}` : msg,
      dismissable: true
    });
  };

  const success = (): void => {
    copied = true;
    failed = false;

    setTimeout(() => {
      copied = false;
    }, 4000);

    toast.success('Success!', {
      description: 'Copied configuration to clipboard!'
    });
  };

  let copied: boolean = false;
  let failed: boolean = false;

  const copyClass = 'text-green-500 hover:text-green-500 hover:bg-primary hover:cursor-default';
  const failClass = 'text-red-500 hover:text-red-500 hover:bg-primary hover:cursor-default';
  const baseClass = 'transition-all';
</script>

<Button
  class={cn(
    'rounded-lg',
    full && 'w-full text-lg',
    copied && copyClass,
    failed && failClass,
    !copied && !failed && baseClass,
    className
  )}
  size={full ? 'lg' : 'icon'}
  variant={full ? 'default' : 'ghost'}
  {...$$restProps}
  on:click={copy}
>
  {#if !copied && !failed && full}
    Copy Configuration
  {/if}

  {#if !copied && !failed && !full}
    <CopyIcon />
  {/if}

  {#if copied}
    <CheckCircleIcon />
  {/if}

  {#if failed}
    <XCircleIcon />
  {/if}
</Button>
