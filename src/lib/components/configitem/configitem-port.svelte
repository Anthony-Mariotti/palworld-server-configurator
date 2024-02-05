<script lang="ts">
    import type { PortProps } from ".";
    import { Input } from "../ui/input";

    type $$Props = PortProps;

    export let key: $$Props['key'] = 'key'
    export let item: $$Props['item'];
</script>

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
