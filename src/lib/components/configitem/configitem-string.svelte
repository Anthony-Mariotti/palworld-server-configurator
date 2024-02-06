<script lang="ts">
    import { PalworldConfigItemValue } from "$lib/palworld";
    import { ConfigItemReset, type UrlProps } from ".";
    import type { StringProps } from ".";
    import { Input } from "../ui/input";

    type $$Props = StringProps;

    export let key: $$Props['key'] = 'key'
    export let item: $$Props['item'];
</script>

<div class="flex flex-col gap-y-4 lg:grid lg:grid-cols-[1fr_min-content_24rem_min-content] xl:grid-cols-[1fr_min-content_36rem_min-content] lg:gap-y-0 lg:gap-x-10 p-4 bg-gray-50">
    <div class="flex items-center col-span-2">
        <label for={key} class="font-semibold text-base lg:text-lg">{key}</label>
    </div>
    <div class="flex max-w-xl w-full">
        <Input
            id={key}
            class="text-lg px-4 py-6"
            disabled={item.readonly}
            maxlength={item.max}
            bind:value={item.value}
        />
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
