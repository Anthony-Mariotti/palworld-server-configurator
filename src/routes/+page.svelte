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
  import { Textarea } from '$lib/components/ui/textarea';
  import { Input } from '$lib/components/ui/input';
  import * as Notice from '$lib/components/notice';
  import { InfoIcon } from 'lucide-svelte';
  import { Separator } from '$lib/components/ui/separator';
  import type { FormEventHandler } from 'svelte/elements';

  $: output = $PalworldStore.output();

  $: loadConfig = '';

  const loadFile: FormEventHandler<HTMLInputElement> = (event) => {
    const file = event.currentTarget.files?.item(0);
    if (!(file instanceof Blob)) return;

    if (!file.name || !file.name.endsWith('.ini')) {
      event.currentTarget.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (loaded) => {
      const result = loaded.target?.result;

      if (typeof result === 'string') {
        loadConfig = loaded.target?.result as string;
      }
    };

    reader.readAsText(file);
  };

  const processConfig = () => {
    if (!loadConfig || loadConfig === '') return;

    // reference: https://gist.github.com/anonymous/dad852cde5df545ed81f1bc334ea6f72
    var regex = {
      section: /^\s*\[\s*([^\]]*)\s*\]\s*$/,
      param: /^\s*([^=]+?)\s*=\s*(.*?)\s*$/,
      comment: /^\s*;.*$/
    };

    let value: {
      [key: string]: {
        [key: string]: string;
      };
    } = {};

    let section: string | undefined;
    var lines: Array<string> = loadConfig.split(/[\r\n]+/);
    lines.forEach((line: string) => {
      if (regex.comment.test(line)) {
        return;
      }

      if (regex.param.test(line)) {
        const match = line.match(regex.param);

        if (match) {
          if (section) {
            value[section][match[1]] = match[2];
          }
        }
      } else if (regex.section.test(line)) {
        const match = line.match(regex.section);

        if (match) {
          value[match[1]] = {};
          section = match[1];
        }
      } else if (line.length === 0 && section) {
        section = undefined;
      }
    });
    // end reference

    const configKey = '/Script/Pal.PalGameWorldSettings';
    const optionKey = 'OptionSettings';
    if (configKey in value) {
      const palGameWorldSettings = value[configKey];

      if (optionKey in palGameWorldSettings) {
        const optionsRaw = palGameWorldSettings[optionKey].slice(
          1,
          palGameWorldSettings[optionKey].length - 1
        );
        const optionsSettings = optionsRaw
          .split(',')
          .map((pair) => pair.split('=').map((s) => s.trim()));

        const resultObject: Record<string, string> = Object.fromEntries(optionsSettings);
        PalworldStore.load(resultObject);
      }
    }
  };
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
    <Drawer.Root>
      <Drawer.Overlay asChild />
      <Drawer.Trigger asChild let:builder>
        <Button
          class="rounded-b-none rounded-t-2xl px-4 py-6 text-lg shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_-4px_6px_-4px_rgba(0,0,0,0.1)] sm:p-6"
          builders={[builder]}>Paste Config File</Button
        >
      </Drawer.Trigger>
      <Drawer.Content class="max-h-[80%]">
        <div class="mx-auto w-full max-w-screen-2xl pb-4">
          <Drawer.Header class="text-left text-xl font-bold">
            <Drawer.Title>Load Current Configuration File</Drawer.Title>
            <Drawer.Description class="flex flex-col gap-4">
              <span
                >Supply your current Palworld server configuration so you can modify it. Paste it in
                the box below or upload the file directly.</span
              >
              <Separator />
              <Notice.Root variant="warning">
                <InfoIcon class="h-4 w-4" />
                <Notice.Title
                  >File uploads processed on your browser and not sent to any service for
                  processing.</Notice.Title
                >
              </Notice.Root>
              <Input
                id="settings-upload"
                name="palworldsettings"
                type="file"
                accept={'.ini'}
                on:input={loadFile}
              />
            </Drawer.Description>
          </Drawer.Header>
          <div class="flex flex-col gap-4 px-4">
            <Textarea
              class="h-52 text-lg"
              spellcheck={false}
              cols={10}
              placeholder={'[/Script/Pal.PalGameWorldSettings]\nOptionSettings='}
              bind:value={loadConfig}
            />
            <div class="flex gap-2">
              <Button class="w-full" on:click={() => processConfig()}>Load Configuration</Button>
            </div>
          </div>
        </div>
      </Drawer.Content>
    </Drawer.Root>
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
