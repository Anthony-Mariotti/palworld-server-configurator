<script lang="ts">
    import type { Props } from ".";

    type $$Props = Props;

    export let value: $$Props['value'] = '';
</script>

<div class="relative max-h-96 overflow-y-auto bg-gray-50 border-4 border-gray-100 p-4 rounded-lg">
    <div class="whitespace-pre-line break-all">{value}</div>
</div>