<script lang="ts">
  import { PalworldConfigItemValue } from '$lib/palworld';
  import { ConfigItemReset, type BooleanProps } from '.';
  import { Switch } from '../ui/switch';
  import * as Notice from '../notice';
  import { InfoIcon } from 'lucide-svelte';

  type $$Props = BooleanProps;

  export let key: $$Props['key'] = 'key';
  export let item: $$Props['item'];
</script>

<div
  class="flex flex-col gap-y-4 bg-gray-50 p-4 lg:grid lg:grid-cols-[1fr_min-content_24rem_min-content] lg:gap-x-10 lg:gap-y-2 xl:grid-cols-[1fr_min-content_36rem_min-content]"
>
  <label for={key} class="flex text-base font-semibold lg:text-lg">
    {key}
  </label>
  <div class="hidden items-center text-lg font-semibold lg:flex">
    {item.value ? 'Yes' : 'No'}
  </div>
  <div class="flex items-center space-x-2">
    <Switch id={key} disabled={item.readonly} bind:checked={item.value} />
    <span class="flex text-base font-semibold tracking-wider lg:hidden"
      >({item.value ? 'Yes' : 'No'})</span
    >
  </div>
  {#if item instanceof PalworldConfigItemValue && !item.readonly}
    <ConfigItemReset {key} bind:item />
  {:else}
    <div class="hidden w-10 lg:block" />
  {/if}
  {#if item.notice}
    <Notice.Root variant="warning" class="col-start-3 lg:mt-2">
      <InfoIcon class="h-4 w-4" />
      <Notice.Title>{item.notice}</Notice.Title>
    </Notice.Root>
  {/if}
</div>
