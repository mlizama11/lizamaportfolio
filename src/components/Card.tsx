import React from 'react';
import { cn } from '@/lib/utils';

function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="card"
      role="card"
      className={cn(
        'flex flex-1 flex-col overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700',
        className
      )}
    >
      {children}
    </div>
  );
}

function CardHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="card-header"
      role="card-header "
      className={cn('h-70 w-full', className)}
    >
      {children}
    </div>
  );
}

function CardContent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      data-slot="card-content"
      role="card-content"
      className={cn('flex grow flex-col justify-between gap-8 p-4', className)}
    >
      {children}
    </div>
  );
}

export { Card, CardHeader, CardContent };
