import { type VariantProps, cva } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import React, { FunctionComponent } from 'react';

import { cn } from '@/lib/utils';

const nextLinkVariants = cva(
  'rounded-md text-black hover:text-blue-400 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default: '',
        custom:
          'underline-none flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50',
        secondary:
          'focus-visible:no-underline focus-visible:border-ring focus-visible:ring-ring/50 z-30 flex items-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black transition-colors outline-none hover:bg-black hover:text-white focus-visible:ring-[3px] aria-disabled:pointer-events-none aria-disabled:opacity-5 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black'
      }
    },
    defaultVariants: {
      variant: 'default'
    }
  }
);

type NextLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode;
    className?: string;
  };

export const NextLink: FunctionComponent<
  NextLinkProps & VariantProps<typeof nextLinkVariants>
> = ({ href, children, className, variant, ...props }) => (
  <Link
    href={href}
    className={cn(nextLinkVariants({ variant, className }))}
    {...props}
  >
    {children}
  </Link>
);
