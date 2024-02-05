<script lang="ts">
    import type { BooleanProps } from ".";
    import { Switch } from "../ui/switch";

    type $$Props = BooleanProps;

    export let key: $$Props['key'] = 'key'
    export let item: $$Props['item'];
    
</script>

<div class="flex items-center">
    <label for={key} class="font-semibold text-lg">{key}</label>
</div>
<div class="flex items-center font-semibold text-lg">
    {item.value ? 'Yes' : 'No'}
</div>
<div class="flex items-center">
    <Switch id={key} disabled={item.readonly} bind:checked={item.value} />
</div>