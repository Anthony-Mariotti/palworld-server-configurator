<script lang="ts">
  import * as Notice from '$lib/components/notice';
  import { Button } from '$lib/components/ui/button';
  import * as Drawer from '$lib/components/ui/drawer';
  import { Input } from '$lib/components/ui/input';
  import { Separator } from '$lib/components/ui/separator';
  import { Textarea } from '$lib/components/ui/textarea';
  import { PalworldStore } from '$lib/palworld';
  import { readIniFile } from '$lib/utils';
  import { InfoIcon } from 'lucide-svelte';
  import { toast } from 'svelte-sonner';
  import type { FormEventHandler } from 'svelte/elements';

  $: loadConfig = '';
  $: open = false;

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

    const iniFile = readIniFile(loadConfig);

    const configKey = '/Script/Pal.PalGameWorldSettings';
    const optionKey = 'OptionSettings';
    if (configKey in iniFile) {
      const palGameWorldSettings = iniFile[configKey];

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
        toast.success('Success', {
          description: 'Loaded configuration file',
          duration: 10000
        });
        open = false;
      } else {
        fileError();
        return;
      }
    } else {
      fileError();
      return;
    }
  };

  const fileError = (): void => {
    toast.error('Invalid Configuration', {
      description:
        'The text/file provided is not a valid PalworldSettings.ini. Be sure to include the entire file.',
      duration: 20_000
    });
  };
</script>

<Drawer.Root bind:open>
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
            >Supply your current Palworld server configuration so you can modify it. Paste it in the
            box below or upload the file directly.</span
          >
          <Separator />
          <Notice.Root variant="warning">
            <InfoIcon class="h-4 w-4" />
            <Notice.Title
              >File uploads processed on your browser and not sent to any service for processing.</Notice.Title
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
          <Button class="w-full" on:click={processConfig}>Load Configuration</Button>
        </div>
      </div>
    </div>
  </Drawer.Content>
</Drawer.Root>
