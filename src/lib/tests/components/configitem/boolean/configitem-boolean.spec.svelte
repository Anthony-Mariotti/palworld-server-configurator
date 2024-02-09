<script lang="ts" context="module">
  export type ConfigItemBooleanTestProps = {
    key: string;
    item: PalworldBoolean;
  };
</script>

<script lang="ts">
  import ConfigitemBoolean from '$lib/components/configitem/configitem-boolean.svelte';
  import type { PalworldBoolean } from '$lib/palworld';

  type $$Props = ConfigItemBooleanTestProps;

  export let key: $$Props['key'];
  export let item: $$Props['item'];
</script>

<ConfigitemBoolean {key} bind:item />
