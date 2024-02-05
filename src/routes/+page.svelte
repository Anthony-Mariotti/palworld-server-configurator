<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Slider } from '$lib/components/ui/slider';
  import { Switch } from '$lib/components/ui/switch';

  import * as Card from '$lib/components/ui/card';
  import * as Select from '$lib/components/ui/select';

  import { CopyIcon, RotateCcwIcon } from 'lucide-svelte';

  import {
    PalworldBoolean,
    PalworldConfigItemValue,
    PalworldConfigType,
    PalworldConfiguration,
    PalworldDecimal,
    PalworldInteger,
    PalworldIpAddress,
    PalworldOptionalString,
    PalworldPort,
    PalworldSelectOne,
    PalworldString,
    PalworldUrl
  } from '$lib/palworld';
    import { ConfigDisplay } from '$lib/components/configdisplay';

  $: configuration = new PalworldConfiguration();
  $: output = configuration.output();
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>PalWorldSettings.ini</Card.Title>
  </Card.Header>
  <Card.Content class="flex flex-col gap-4">
    <ConfigDisplay value={output} />

    <div class="mx-auto w-full max-w-screen-2xl grid grid-flow-row gap-y-8">
      {#each configuration.getConfigItems() as [key, item]}
        <div class="grid grid-cols-[1fr_min-content_36rem_min-content] gap-x-10 p-4 bg-gray-50">
          {#if item.type === PalworldConfigType.TextInput}
            {#if item instanceof PalworldString}
              <div class="flex items-center col-span-2">
                <label for={key} class="font-semibold text-lg">{key}</label>
              </div>
              <div class="flex max-w-xl w-full">
                <Input
                  id={key}
                  class="text-lg px-4 py-6"
                  disabled={item.readonly}
                  maxlength={item.max}
                  bind:value={item.value}
                />
              </div>
            {:else if item instanceof PalworldOptionalString}
              <div class="flex items-center col-span-2">
                <label for={key} class="font-semibold text-lg">{key}</label>
              </div>
              <div class="flex max-w-lg w-full">
                <Input
                  id={key}
                  class="text-lg px-4 py-6"
                  disabled={item.readonly}
                  maxlength={item.max}
                  bind:value={item.value}
                />
              </div>
            {/if}
          {:else if item.type === PalworldConfigType.Decimal}
            {#if item instanceof PalworldDecimal}
              <div class="flex items-center">
                <label for={key} class="font-semibold text-lg">{key}</label>
              </div>
              <div class="flex items-center font-semibold text-lg">
                {item.value}
              </div>
              <div class="flex max-w-xl w-full">
                <Slider
                  id={key}
                  value={[item.value]}
                  disabled={item.readonly}
                  min={item.min}
                  max={item.max}
                  step={item.step}
                  onValueChange={(e) => {
                    if (item instanceof PalworldDecimal) {
                      item.value = e[0];
                    }
                  }}
                />
              </div>
            {/if}
          {:else if item.type === PalworldConfigType.SelectOne}
            {#if item instanceof PalworldSelectOne}
              <div class="flex items-center col-span-2">
                <label for={key} class="font-semibold text-lg">{key}</label>
              </div>
              <div class="flex max-w-xl w-full">
                  <!-- Property 'value' does not exist on type 'PalworldConfigItem'.ts(2339) (but it does) -->
                  <Select.Root
                    selected={item.value}
                    disabled={item.readonly}
                    onSelectedChange={(e) => (item.value = e)}
                  >
                  <Select.Trigger>
                    <Select.Value>{item.value}</Select.Value>
                  </Select.Trigger>
                  <Select.Content>
                    {#each item.options as option}
                      <Select.Item value={option.value}>{option.label}</Select.Item>
                    {/each}
                  </Select.Content>
                </Select.Root>
              </div>
            {/if}
          {:else if item.type === PalworldConfigType.Number}
            {#if item instanceof PalworldInteger}
              <div class="flex items-center">
                <label for={key} class="font-semibold text-lg">{key}</label>
              </div>
              <div class="flex items-center font-semibold text-lg">
                {item.value}
              </div>
              <div class="flex items-center max-w-xl w-full">
                <Slider
                  id={key}
                  value={[item.value]}
                  disabled={item.readonly}
                  min={item.min}
                  max={item.max}
                  step={1}
                  onValueChange={(e) => {
                    if (item instanceof PalworldInteger) {
                      item.value = e[0];
                    }
                  }}
                />
              </div>
            {/if}
          {:else if item.type === PalworldConfigType.Boolean}
            {#if item instanceof PalworldBoolean}
              <div class="flex items-center">
                <label for={key} class="font-semibold text-lg">{key}</label>
              </div>
              <div class="flex items-center font-semibold text-lg">
                {item.value ? 'Yes' : 'No'}
              </div>
              <div class="flex items-center">
                <Switch id={key} disabled={item.readonly} bind:checked={item.value} />
              </div>
            {/if}
          {:else if item.type === PalworldConfigType.IpAddress}
            {#if item instanceof PalworldIpAddress}
              <div class="flex items-center col-span-2">
                <label for={key} class="font-semibold text-lg">{key}</label>
              </div>
              <div class="flex max-w-xl w-full">
                <Input
                  id={key}
                  class="text-lg px-4 py-6"
                  disabled={item.readonly}
                  required={item.required}
                  bind:value={item.value}
                />
                </div>
            {/if}
          {:else if item.type === PalworldConfigType.Port}
            {#if item instanceof PalworldPort}
              <div class="flex items-center col-span-2">
                <label for={key} class="font-semibold text-lg">{key}</label>
              </div>
              <div class="flex max-w-xl w-full">
                <Input
                  id={key}
                  class="text-lg px-4 py-6"
                  type="number"
                  disabled={item.readonly}
                  required={item.required}
                  min={item.min}
                  max={item.max}
                  bind:value={item.value}
                />
              </div>
            {/if}
          {:else if item.type === PalworldConfigType.Url}
            {#if item instanceof PalworldUrl}
              <div class="flex items-center col-span-2">
                <label for={key} class="font-semibold text-lg">{key}</label>
              </div>
              <div class="flex max-w-xl w-full">
                <Input
                  id={key}
                  class="text-lg px-4 py-6"
                  type="url"
                  disabled={item.readonly}
                  required={item.required}
                  max={item.max}
                  bind:value={item.value}
                />
              </div>
            {/if}
          {/if}
          {#if item instanceof PalworldConfigItemValue}
            <div>
              <!-- Property 'reset' does not exist on type 'PalworldConfigItem'.ts(2339) but it does -->
              <!-- Property 'default' does not exist on type 'PalworldConfigItem'.ts(2339) but it does -->
              <Button variant="outline" size="icon" disabled={item.value === item.default} on:click={() => item.value = item.default}>
                <RotateCcwIcon />
              </Button>
            </div>
          {/if}
          {#if item.notice}
              <div class="col-start-3 border-l-4 rounded-sm bg-yellow-300/10 border-l-yellow-300 pl-2 text-yellow-600 mt-2">
                {item.notice}
              </div>
          {/if}

        </div>
      {/each}
    </div>
  </Card.Content>
</Card.Root>
