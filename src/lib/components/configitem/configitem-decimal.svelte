<script lang="ts">
  import { PalworldConfigItemValue } from "$lib/palworld";
  import { ConfigItemReset, type UrlProps } from ".";
  import type { DecimalProps } from ".";
  import { Slider } from "../ui/slider";

  type $$Props = DecimalProps;

  export let key: $$Props['key'] = 'key'
  export let item: $$Props['item'];

</script>

<div class="flex flex-col gap-y-4 lg:grid lg:grid-cols-[1fr_min-content_24rem_min-content] xl:grid-cols-[1fr_min-content_36rem_min-content] lg:gap-y-0 lg:gap-x-10 p-4 bg-gray-50">
  <div class="flex items-center">
    <label for={key} class="flex font-semibold text-base lg:text-lg">
      {key}
      <span class="ml-2 flex tracking-wider lg:hidden">({item.value.toFixed(2)})</span>
    </label>
  </div>
  <div class="hidden lg:flex items-center font-semibold text-lg">
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
      onValueChange={(e) => item.value = e[0]}
    />
  </div>
  {#if item instanceof PalworldConfigItemValue && !item.readonly}
    <ConfigItemReset {key} bind:item={item} />
  {:else}
    <div class="hidden lg:block w-10" />
  {/if}
  {#if item.notice}
      <div class="col-start-3 border-l-4 rounded-sm bg-yellow-300/10 border-l-yellow-300 pl-2 text-yellow-600 lg:mt-2">
          {item.notice}
      </div>
  {/if}
</div>
