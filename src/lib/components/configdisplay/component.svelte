<script lang="ts">
    import type { Props } from ".";
    import { CopyButton } from "../copybutton";

    type $$Props = Props;

    export let value: $$Props['value'] = '';
</script>

<div class="relative h-max w-full break-all rounded-md border-2 border-gray-100 bg-gray-50 p-4">
    <span class="whitespace-pre-line">
        {value}
    </span>
    <CopyButton class="absolute bottom-1 right-1" text={value} />
</div>