<script lang="ts">
    import { PalworldConfigItemValue } from "$lib/palworld";
    import { ConfigItemReset, type BooleanProps } from ".";
    import { Switch } from "../ui/switch";

    type $$Props = BooleanProps;

    export let key: $$Props['key'] = 'key'
    export let item: $$Props['item'];
    
</script>

<div class="flex flex-col gap-y-4 lg:grid lg:grid-cols-[1fr_min-content_24rem_min-content] xl:grid-cols-[1fr_min-content_36rem_min-content] lg:gap-y-0 lg:gap-x-10 p-4 bg-gray-50">
    <label for={key} class="flex font-semibold text-base lg:text-lg">
        {key}
    </label>
    <div class="hidden lg:flex items-center font-semibold text-lg">
        {item.value ? 'Yes' : 'No'}
    </div>
    <div class="flex items-center space-x-2">
        <Switch id={key} disabled={item.readonly} bind:checked={item.value} />
        <span class="flex tracking-wider font-semibold text-base lg:hidden">({item.value ? 'Yes' : 'No'})</span>
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
