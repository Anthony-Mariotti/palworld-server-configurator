<script lang="ts">
  import { PalworldConfigItemValue } from '$lib/palworld';
  import { ConfigItemReset } from '.';
  import type { SelectOneProps } from '.';
  import * as Select from '../ui/select';
  import * as Notice from '../notice';
  import { InfoIcon } from 'lucide-svelte';

  type $$Props = SelectOneProps;

  export let key: $$Props['key'] = 'key';
  export let item: $$Props['item'];
</script>

<div
  class="flex flex-col gap-y-4 bg-gray-50 p-4 lg:grid lg:grid-cols-[1fr_min-content_24rem_min-content] lg:gap-x-10 lg:gap-y-2 xl:grid-cols-[1fr_min-content_36rem_min-content]"
>
  <div class="col-span-2 flex items-center">
    <label for={key} class="text-base font-semibold lg:text-lg">{key}</label>
  </div>
  <div class="flex w-full lg:max-w-xl">
    <Select.Root bind:selected={item.value} items={item.options} disabled={item.readonly}>
      <Select.Trigger>
        <Select.Value asChild>
          <span>{item.value.value}</span>
        </Select.Value>
      </Select.Trigger>
      <Select.Content>
        {#each item.options as option}
          <Select.Item value={option.value}>{option.label}</Select.Item>
        {/each}
      </Select.Content>
    </Select.Root>
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
