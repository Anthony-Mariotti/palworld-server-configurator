<script lang="ts">
  import { PalworldConfigItemValue } from '$lib/palworld';
  import { ConfigItemReset } from '.';
  import type { DecimalProps } from '.';
  import { Slider } from '../ui/slider';
  import * as Notice from '../notice';
  import { InfoIcon } from 'lucide-svelte';

  type $$Props = DecimalProps;

  export let key: $$Props['key'] = 'key';
  export let item: $$Props['item'];
</script>

<div
  class="flex flex-col gap-y-4 bg-gray-50 p-4 lg:grid lg:grid-cols-[1fr_min-content_24rem_min-content] lg:gap-x-10 lg:gap-y-2 xl:grid-cols-[1fr_min-content_36rem_min-content]"
>
  <div class="flex items-center">
    <label for={key} class="flex text-base font-semibold lg:text-lg">
      {key}
      <span class="ml-2 flex tracking-wider lg:hidden">({item.value.toFixed(2)})</span>
    </label>
  </div>
  <div class="hidden items-center text-lg font-semibold lg:flex">
    {item.value}
  </div>
  <div class="flex lg:max-w-xl">
    <Slider
      id={key}
      value={[item.value]}
      disabled={item.readonly}
      min={item.min}
      max={item.max}
      step={item.step}
      onValueChange={(e) => (item.value = e[0])}
    />
  </div>
  {#if item instanceof PalworldConfigItemValue && !item.readonly}
    <ConfigItemReset {key} bind:item />
  {:else}
    <div class="hidden w-10 lg:block" />
  {/if}
  {#if item.notice}
    <Notice.Root variant="warning" class="col-start-3">
      <InfoIcon class="h-4 w-4" />
      <Notice.Title>{item.notice}</Notice.Title>
    </Notice.Root>
  {/if}
</div>
