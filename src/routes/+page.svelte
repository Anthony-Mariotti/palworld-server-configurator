<script lang="ts">
  import * as Card from '$lib/components/ui/card';
  import * as Drawer from '$lib/components/ui/drawer';

  import {
    PalworldBoolean,
    PalworldConfigType,
    PalworldDecimal,
    PalworldInteger,
    PalworldIpAddress,
    PalworldOptionalString,
    PalworldPort,
    PalworldSelectOne,
    PalworldString,
    PalworldUrl,
    PalworldStore
  } from '$lib/palworld';

  import { ConfigDisplay } from '$lib/components/configdisplay';
  import * as ConfigItem from '$lib/components/configitem';
  import { Button } from '$lib/components/ui/button';
  import { CopyButton } from '$lib/components/copybutton';
  import { LoadConfig } from '$lib/components/drawer/loadconfig';

  $: output = $PalworldStore.output();
</script>

<Card.Root>
  <Card.Header class="mx-auto w-full max-w-screen-2xl">
    <Card.Title class="text-2xl font-bold">PalWorldSettings.ini</Card.Title>
  </Card.Header>
  <Card.Content class="mx-auto flex w-full max-w-screen-2xl flex-col gap-8 pb-16">
    <div class="flex flex-col gap-y-4 lg:grid lg:grid-flow-row lg:gap-y-8">
      {#each $PalworldStore.getConfigItems() as [key, item]}
        {#if item.type === PalworldConfigType.TextInput && item instanceof PalworldString}
          <ConfigItem.String {key} bind:item />
        {:else if item.type === PalworldConfigType.TextInput && item instanceof PalworldOptionalString}
          <ConfigItem.OptionalString {key} bind:item />
        {:else if item.type === PalworldConfigType.Decimal && item instanceof PalworldDecimal}
          <ConfigItem.Decimal {key} bind:item />
        {:else if item.type === PalworldConfigType.SelectOne && item instanceof PalworldSelectOne}
          <ConfigItem.SelectOne {key} bind:item />
        {:else if item.type === PalworldConfigType.Number && item instanceof PalworldInteger}
          <ConfigItem.Number {key} bind:item />
        {:else if item.type === PalworldConfigType.Boolean && item instanceof PalworldBoolean}
          <ConfigItem.Boolean {key} bind:item />
        {:else if item.type === PalworldConfigType.IpAddress && item instanceof PalworldIpAddress}
          <ConfigItem.IpAddress {key} bind:item />
        {:else if item.type === PalworldConfigType.Port && item instanceof PalworldPort}
          <ConfigItem.Port {key} bind:item />
        {:else if item.type === PalworldConfigType.Url && item instanceof PalworldUrl}
          <ConfigItem.Url {key} bind:item />
        {/if}
      {/each}
    </div>
  </Card.Content>
</Card.Root>
<div class="fixed bottom-0 z-10 w-full">
  <div
    class="mx-auto flex w-full max-w-screen-2xl justify-center gap-1 px-6 sm:justify-end sm:gap-4"
  >
    <LoadConfig />
    <Drawer.Root>
      <Drawer.Overlay asChild />
      <Drawer.Trigger asChild let:builder>
        <Button
          class="rounded-b-none rounded-t-2xl px-4 py-6 text-lg shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_-4px_6px_-4px_rgba(0,0,0,0.1)] sm:p-6"
          builders={[builder]}>Generate Config File</Button
        >
      </Drawer.Trigger>
      <Drawer.Content class="max-h-[80%]">
        <div class="mx-auto w-full max-w-screen-2xl pb-4">
          <Drawer.Header class="text-xl font-bold">PalWorldSettings.ini</Drawer.Header>
          <div class="flex flex-col gap-4 px-4">
            <ConfigDisplay value={output} />
            <div class="flex flex-row gap-2">
              <CopyButton full text={output} />
              <!-- <Button size="lg" class="rounded-lg w-full">Save to File</Button> -->
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
  </div>
</div>
