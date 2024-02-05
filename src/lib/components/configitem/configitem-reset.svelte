<script lang="ts">
    import { RotateCcwIcon } from "lucide-svelte";
    import { Button } from "../ui/button";
    import type { ResetProps } from ".";

    type $$Props = ResetProps;

    export let key: $$Props['key'] = 'key';
    export let item: $$Props['item'];

</script>
<div>
<Button id={key.toLocaleLowerCase() + "-reset-button"}  variant="outline" size="icon" disabled={item.value === item.default} on:click={() => item.value = item.default}>
    <RotateCcwIcon />
</Button>
</div>