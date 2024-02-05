<script lang="ts">
    import type { SelectOneProps } from ".";
    import * as Select from "../ui/select";

    type $$Props = SelectOneProps;

    export let key: $$Props['key'] = 'key'
    export let item: $$Props['item'];
</script>

<div class="flex items-center col-span-2">
    <label for={key} class="font-semibold text-base lg:text-lg">{key}</label>
</div>
<div class="flex max-w-xl w-full">
    <Select.Root
        selected={item.value}
        disabled={item.readonly}
        onSelectedChange={(e) => (item.value = e ?? item.default)}
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
