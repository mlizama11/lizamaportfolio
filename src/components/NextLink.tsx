import { type VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { NextLinkProps } from '@/types';

const nextLinkVariants = cva(
  'rounded-md text-black hover:text-blue-400 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default: '',
        primary:
          'z-30 cursor-pointer text-sm font-medium text-black hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400',
        secondary:
          'focus-visible:no-underline focus-visible:border-ring focus-visible:ring-ring/50 z-30 flex items-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black transition-colors outline-none hover:bg-black hover:text-white focus-visible:ring-[3px] aria-disabled:pointer-events-none aria-disabled:opacity-5 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black',
        reversedSecondary:
          'focus-visible:no-underline focus-visible:border-ring focus-visible:ring-ring/50 z-30 flex items-center rounded-md border border-black bg-black px-4 py-2 text-sm font-medium text-white transition-colors outline-none hover:bg-white hover:text-black focus-visible:ring-[3px] aria-disabled:pointer-events-none aria-disabled:opacity-5 dark:border-black dark:bg-transparent dark:text-black dark:hover:bg-black dark:hover:text-white'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

export function NextLink({
  href,
  children,
  target = '_parent',
  className,
  variant,
  ...props
}: NextLinkProps & VariantProps<typeof nextLinkVariants>) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(nextLinkVariants({ variant, className }))}
      {...props}
    >
      {children}
    </Link>
  );
}
