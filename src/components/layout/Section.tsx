import React from 'react';

import { cn } from '@/lib/utils';

function Section({
  children,
  id,
  className
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <section id={id} className={cn('scroll-mt-2', className)}>
      <div className="flex flex-col gap-8">{children}</div>
    </section>
  );
}

function SectionTitle({
  children,
  subtitle,
  className,
  icon
}: {
  children: React.ReactNode;
  subtitle?: string;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('flex flex-col', className)}>
      <h2 className="text-3xl font-bold">{children}</h2>
      {subtitle && <h4 className="text-2xl font-medium">{subtitle}</h4>}
      {icon && <div>{icon}</div>}
    </div>
  );
}

export { Section, SectionTitle };
