import type { HTMLButtonAttributes } from 'svelte/elements';
import Root from './component.svelte';

type Props = HTMLButtonAttributes & {
  text: string;
  full: boolean;
};

export {
  Root,
  type Props,
  //
  Root as CopyButton,
  type Props as CopyButtonProps
};
