<script lang="ts">
  import type { HTMLAttributes } from 'svelte/elements';
  import { noticeVariants, type Variant } from '.';
  import { cn } from '$lib/utils';

  type $$Props = HTMLAttributes<HTMLDivElement> & {
    variant?: Variant;
  };

  let className: $$Props['class'] = undefined;
  export let variant: $$Props['variant'] = 'default';
  export { className as class };
</script>

<div class={cn(noticeVariants({ variant }), className)} {...$$restProps} role="alert">
  <slot />
</div>
