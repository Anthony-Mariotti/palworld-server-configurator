<script lang="ts">
  import { PalworldConfigItemValue } from '$lib/palworld';
  import { ConfigItemReset, type BooleanProps } from '.';
  import { Switch } from '../ui/switch';

  type $$Props = BooleanProps;

  export let key: $$Props['key'] = 'key';
  export let item: $$Props['item'];
</script>

<div
  class="flex flex-col gap-y-4 bg-gray-50 p-4 lg:grid lg:grid-cols-[1fr_min-content_24rem_min-content] lg:gap-x-10 lg:gap-y-0 xl:grid-cols-[1fr_min-content_36rem_min-content]"
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
    <div
      class="col-start-3 rounded-sm border-l-4 border-l-yellow-300 bg-yellow-300/10 pl-2 text-yellow-600 lg:mt-2"
    >
      {item.notice}
    </div>
  {/if}
</div>
