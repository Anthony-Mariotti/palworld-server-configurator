import { tv, type VariantProps } from 'tailwind-variants';
import Root from './component.svelte';
import Description from '../ui/alert/alert-description.svelte';
import Title from '../ui/alert/alert-title.svelte';

export const noticeVariants = tv({
  base: 'relative w-full rounded-lg border p-4 [&>svg]:absolute [&>svg]:text-foreground [&>svg]:left-4 [&>svg]:top-4 [&>svg+div]:translate-y-[-3px] [&:has(svg)]:pl-11',

  variants: {
    variant: {
      default: 'bg-background text-foreground',
      destructive:
        'text-destructive border-destructive/50 dark:border-destructive [&>svg]:text-destructive text-destructive',
      warning: 'text-yellow-600 bg-yellow-300/10 [&>svg]:text-yellow-600 border-yellow-300/50'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export type Variant = VariantProps<typeof noticeVariants>['variant'];
export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export {
  Root,
  Title,
  Description,
  //
  Root as Notice,
  Description as NoticeDescription,
  Title as NoticeTitle
};
