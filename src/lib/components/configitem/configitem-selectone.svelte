<script lang="ts">
    import { PalworldConfigItemValue } from "$lib/palworld";
    import { ConfigItemReset, type UrlProps } from ".";
    import type { SelectOneProps } from ".";
    import * as Select from "../ui/select";

    type $$Props = SelectOneProps;

    export let key: $$Props['key'] = 'key'
    export let item: $$Props['item'];
</script>

<div class="flex flex-col gap-y-4 lg:grid lg:grid-cols-[1fr_min-content_24rem_min-content] xl:grid-cols-[1fr_min-content_36rem_min-content] lg:gap-y-0 lg:gap-x-10 p-4 bg-gray-50">
    <div class="flex items-center col-span-2">
        <label for={key} class="font-semibold text-base lg:text-lg">{key}</label>
    </div>
    <div class="flex lg:max-w-xl w-full">
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
    {#if item instanceof PalworldConfigItemValue && !item.readonly}
        <ConfigItemReset {key} bind:item={item} />
    {:else}
        <div class="hidden lg:block w-10" />
    {/if}
    {#if item.notice}
        <div class="col-start-3 border-l-4 rounded-sm bg-yellow-300/10 border-l-yellow-300 pl-2 text-yellow-600 lg:mt-2">
            {item.notice}
        </div>
    {/if}
</div>
