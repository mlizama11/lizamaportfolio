import { type VariantProps, cva } from 'class-variance-authority';
import Link, { LinkProps } from 'next/link';
import React, { FunctionComponent } from 'react';

import { cn } from '@/lib/utils';

const nextLinkVariants = cva(
  'focus-visible:underline-blue-400 rounded-md text-black outline-none hover:text-blue-400 focus-visible:underline',
  {
    variants: {
      variant: {
        default: '',
        custom:
          'underline-none flex items-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50',
        secondary:
          'underline-none flex items-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-blue-200 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none aria-disabled:pointer-events-none aria-disabled:opacity-50'
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
