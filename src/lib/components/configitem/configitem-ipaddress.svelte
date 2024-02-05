<script lang="ts">
    import type { IpAddressProps } from ".";
    import { Input } from "../ui/input";

    type $$Props = IpAddressProps;

    export let key: $$Props['key'] = 'key'
    export let item: $$Props['item'];
    
</script>

<div class="flex items-center col-span-2">
    <label for={key} class="font-semibold text-base lg:text-lg">{key}</label>
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