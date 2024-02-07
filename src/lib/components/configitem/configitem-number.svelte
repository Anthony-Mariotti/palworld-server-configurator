<script lang="ts">
  import { PalworldConfigItemValue } from '$lib/palworld';
  import { ConfigItemReset } from '.';
  import type { NumberProps } from '.';
  import { Slider } from '../ui/slider';

  type $$Props = NumberProps;

  export let key: $$Props['key'] = 'key';
  export let item: $$Props['item'];
</script>

<div
  class="flex flex-col gap-y-4 bg-gray-50 p-4 lg:grid lg:grid-cols-[1fr_min-content_24rem_min-content] lg:gap-x-10 lg:gap-y-0 xl:grid-cols-[1fr_min-content_36rem_min-content]"
>
  <label for={key} class="flex text-base font-semibold lg:text-lg">
    {key}
    <span class="ml-2 flex tracking-wider lg:hidden">({item.value})</span>
  </label>
  <div class="hidden items-center text-lg font-semibold lg:flex">
    {item.value}
  </div>
  <div class="flex w-full max-w-xl items-center">
    <Slider
      id={key}
      value={[item.value]}
      disabled={item.readonly}
      min={item.min}
      max={item.max}
      step={1}
      onValueChange={(e) => (item.value = e[0])}
    />
  </div>
  {#if item instanceof PalworldConfigItemValue && !item.readonly}
    <ConfigItemReset {key} bind:item />
  {:else}
    <div class="hidden w-10 lg:block" />
  {/if}
  {#if item.notice}
    <div
      class="col-start-3 rounded-sm border-l-4 border-l-yellow-300 bg-yellow-300/10 pl-2 text-yellow-600 lg:mt-2"
    >
      {item.notice}
    </div>
  {/if}
</div>
