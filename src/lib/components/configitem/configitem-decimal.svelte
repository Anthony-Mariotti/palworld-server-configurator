<script lang="ts">
  import type { DecimalProps } from ".";
  import { Slider } from "../ui/slider";

  type $$Props = DecimalProps;

  export let key: $$Props['key'] = 'key'
  export let item: $$Props['item'];

</script>

<div class="flex items-center">
  <label for={key} class="font-semibold text-lg">{key}</label>
</div>
<div class="flex items-center font-semibold text-lg">
  {item.value}
</div>
<div class="flex max-w-xl w-full">
  <Slider
    id={key}
    value={[item.value]}
    disabled={item.readonly}
    min={item.min}
    max={item.max}
    step={item.step}
    onValueChange={(e) => item.value = e[0]}
  />
</div>