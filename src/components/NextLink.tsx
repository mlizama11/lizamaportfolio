import { type VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import { NextLinkProps } from '@/types';

const nextLinkVariants = cva(
  'rounded-md text-black hover:text-blue-400 outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200 z-30',
  {
    variants: {
      variant: {
        default:
          'outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200',
        primary:
          'cursor-pointer text-sm font-medium text-black hover:text-blue-400 dark:text-gray-300 dark:hover:text-blue-400',
        secondary:
          'flex items-center border border-black bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white aria-disabled:pointer-events-none aria-disabled:opacity-5 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200',
        blue: 'flex items-center border border-blue-700 px-4 py-2 text-sm font-medium text-blue-700 transition-colors hover:bg-blue-700 hover:text-white aria-disabled:pointer-events-none aria-disabled:opacity-5 outline-none focus-visible:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-200 dark:bg-blue-700 dark:text-white dark:hover:bg-white dark:hover:text-black dark:border-white'
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
