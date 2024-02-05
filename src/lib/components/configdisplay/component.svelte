<script lang="ts">
    import { CopyIcon } from "lucide-svelte";
    import { Button } from "../ui/button";
    import type { Props } from ".";

    type $$Props = Props;

    export let value: $$Props['value'] = '';

</script>

<div class="relative h-max w-full break-all rounded-md border-2 border-gray-100 bg-gray-50 p-4">
    <span class="whitespace-pre-line">
        {value}
    </span>
    <Button
        class="absolute bottom-1 right-1 opacity-25 hover:opacity-75"
        size="icon"
        variant="ghost"
    >
        <CopyIcon />
    </Button>
</div>