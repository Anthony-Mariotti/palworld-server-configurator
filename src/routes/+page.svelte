<script lang="ts">
  import * as Card from '$lib/components/ui/card';

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
  import * as ConfigItem from '$lib/components/configitem';

  $: configuration = new PalworldConfiguration();
  $: output = configuration.output();
</script>

<Card.Root>
  <Card.Header class="mx-auto w-full max-w-screen-2xl ">
    <Card.Title>PalWorldSettings.ini</Card.Title>
  </Card.Header>
  <Card.Content class="mx-auto w-full max-w-screen-2xl flex flex-col gap-8">
    <ConfigDisplay value={output} />

    <div class="grid grid-flow-row gap-y-8">
      {#each configuration.getConfigItems() as [key, item]}
        <div class="grid grid-cols-[1fr_min-content_16rem_min-content] lg:grid-cols-[1fr_min-content_24rem_min-content] xl:grid-cols-[1fr_min-content_36rem_min-content] gap-x-10 p-4 bg-gray-50">
          {#if item.type === PalworldConfigType.TextInput && item instanceof PalworldString}
              <ConfigItem.String {key} bind:item={item} />
          {:else if item.type === PalworldConfigType.TextInput && item instanceof PalworldOptionalString}
              <ConfigItem.OptionalString {key} bind:item={item} />
          {:else if item.type === PalworldConfigType.Decimal && item instanceof PalworldDecimal}
              <ConfigItem.Decimal {key} bind:item={item} />
          {:else if item.type === PalworldConfigType.SelectOne && item instanceof PalworldSelectOne}
              <ConfigItem.SelectOne {key} bind:item={item} />
          {:else if item.type === PalworldConfigType.Number && item instanceof PalworldInteger}
              <ConfigItem.Number {key} bind:item={item} />
          {:else if item.type === PalworldConfigType.Boolean && item instanceof PalworldBoolean}
              <ConfigItem.Boolean {key} bind:item={item} />
          {:else if item.type === PalworldConfigType.IpAddress && item instanceof PalworldIpAddress}
              <ConfigItem.IpAddress {key} bind:item={item} />
          {:else if item.type === PalworldConfigType.Port && item instanceof PalworldPort}
              <ConfigItem.Port {key} bind:item={item} />
          {:else if item.type === PalworldConfigType.Url && item instanceof PalworldUrl}
              <ConfigItem.Url {key} bind:item={item} />
          {/if}
          {#if item instanceof PalworldConfigItemValue}
            <ConfigItem.Reset {key} bind:item={item} />
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
