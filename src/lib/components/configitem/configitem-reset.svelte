<script lang="ts">
    import { RotateCcwIcon } from "lucide-svelte";
    import { Button } from "../ui/button";
    import type { ResetProps } from ".";
    import { cn } from "$lib/utils";

    type $$Props = ResetProps;

    export let key: $$Props['key'] = 'key';
    export let item: $$Props['item'];

</script>

<div>
    <Button 
        id={key.toLocaleLowerCase() + "-reset-button-ic"}
        class={cn('hidden lg:flex')}
        variant="outline"
        size="icon"
        disabled={item.value === item.default}
        on:click={() => item.value = item.default}
    >
        <RotateCcwIcon />
    </Button>

    <Button 
        id={key.toLocaleLowerCase() + "-reset-button-fw"}
        class={cn('lg:hidden flex items-center justify-center w-full')}
        variant="outline"
        size="default"
        disabled={item.value === item.default}
        on:click={() => item.value = item.default}
    >
        Reset
        <RotateCcwIcon class="ml-2 h-4 w-4" />
    </Button>
</div>
