<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Slider } from '$lib/components/ui/slider';
  import { Switch } from '$lib/components/ui/switch';
  import { Label } from '$lib/components/ui/label';

  import * as Card from '$lib/components/ui/card';
  import * as Select from '$lib/components/ui/select';

  import { CopyIcon } from 'lucide-svelte';

  import {
    PalworldBoolean,
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

  let configuration = new PalworldConfiguration();
  $: output = configuration.output();
</script>

<Card.Root>
  <Card.Header>
    <Card.Title>PalWorldSettings.ini</Card.Title>
  </Card.Header>
  <Card.Content class="flex flex-col gap-4">
    <div class="relative h-max w-full break-all rounded-md border-2 border-gray-100 bg-gray-50 p-4">
      <span class="whitespace-pre-line">
        {output}
      </span>
      <Button
        class="absolute bottom-1 right-1 opacity-25 hover:opacity-75"
        size="icon"
        variant="ghost"
      >
        <CopyIcon />
      </Button>
    </div>
    <div class="mx-auto flex w-full max-w-screen-2xl flex-col gap-8">
      {#each configuration.getConfigItems() as [key, item]}
        <div class="flex flex-col gap-2">
          {#if item.type === PalworldConfigType.TextInput}
            {#if item instanceof PalworldString}
              <Label for={key}>{key}</Label>
              <Input
                id={key}
                disabled={item.readonly}
                maxlength={item.max}
                bind:value={item.value}
              />
            {:else if item instanceof PalworldOptionalString}
              <Label for={key}>{key}</Label>
              <Input
                id={key}
                disabled={item.readonly}
                maxlength={item.max}
                bind:value={item.value}
              />
            {/if}
          {:else if item.type === PalworldConfigType.Decimal}
            {#if item instanceof PalworldDecimal}
              <Label for={key}>{key}</Label>
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
            {/if}
          {:else if item.type === PalworldConfigType.SelectOne}
            {#if item instanceof PalworldSelectOne}
              <Label for={key}>{key}</Label>
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
            {/if}
          {:else if item.type === PalworldConfigType.Number}
            {#if item instanceof PalworldInteger}
              <Label for={key}>{key}</Label>
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
            {/if}
          {:else if item.type === PalworldConfigType.Boolean}
            {#if item instanceof PalworldBoolean}
              <Label for={key}>{key}</Label>
              <Switch id={key} disabled={item.readonly} bind:checked={item.value} />
            {/if}
          {:else if item.type === PalworldConfigType.IpAddress}
            {#if item instanceof PalworldIpAddress}
              <Label for={key}>{key}</Label>
              <Input
                id={key}
                disabled={item.readonly}
                required={item.required}
                bind:value={item.value}
              />
            {/if}
          {:else if item.type === PalworldConfigType.Port}
            {#if item instanceof PalworldPort}
              <Label for={key}>{key}</Label>
              <Input
                id={key}
                type="number"
                disabled={item.readonly}
                required={item.required}
                min={item.min}
                max={item.max}
                bind:value={item.value}
              />
            {/if}
          {:else if item.type === PalworldConfigType.Url}
            {#if item instanceof PalworldUrl}
              <Label for={key}>{key}</Label>
              <Input
                id={key}
                type="url"
                disabled={item.readonly}
                required={item.required}
                max={item.max}
                bind:value={item.value}
              />
            {/if}
          {/if}
          {#if item.notice}
            <p class="border-l-4 border-l-yellow-300 pl-2 text-yellow-600">{item.notice}</p>
          {/if}
        </div>
      {/each}
    </div>
  </Card.Content>
</Card.Root>
