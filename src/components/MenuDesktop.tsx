'use client';

import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { links } from '@/constants';
import { NextLink } from './NextLink';

export const MenuDesktop: FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <motion.nav
      layout
      initial={false}
      transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      className={cn(
        'fixed top-5 z-0 flex flex-row flex-nowrap items-center justify-center overflow-hidden rounded-[8px] p-0',
        {
          'z-50 rounded-[8px]': isOpen,
        }
      )}
    >
      <div
        className={cn(
          'flex flex-none flex-row flex-nowrap items-center justify-center overflow-visible bg-transparent px-4 py-1',
          { 'gap-8 bg-gray-200 dark:bg-neutral-300': isOpen }
        )}
      >
        <motion.div
          layout
          initial={false}
          animate={isOpen ? { opacity: 1 } : { opacity: 0 }}
          transition={
            isOpen
              ? { type: 'spring', stiffness: 100, damping: 30 }
              : { opacity: { duration: 0.1, ease: 'easeInOut' } }
          }
          className={cn(
            'flex flex-none flex-row flex-nowrap items-center justify-end gap-2 overflow-visible p-0',
            { 'pointer-events-auto gap-4': isOpen }
          )}
        >
          {links.slice(0, 4).map(({ href, label }) => (
            <NextLink
              key={href}
              href={href}
              className={cn({ 'pointer-events-none opacity-40': !isOpen })}
              aria-disabled={!isOpen}
              tabIndex={isOpen ? 0 : -1}
            >
              {label}
            </NextLink>
          ))}
        </motion.div>

        <div className="max-[700px]:order-first">
          <Button
            variant="ghost"
            size="sm"
            aria-expanded={isOpen}
            className={cn('cursor-pointer bg-neutral-300', {
              'bg-white': isOpen,
            })}
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <motion.span
              layout
              initial={false}
              animate={{
                rotate: isOpen ? 45 : 0,
                scale: isOpen ? 1.02 : 1,
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              className="inline-flex"
            >
              <FiPlus size={16} color="black" />
            </motion.span>
          </Button>
        </div>

        <motion.div
          layout
          initial={false}
          animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
          transition={
            isOpen
              ? { type: 'spring', stiffness: 100, damping: 30 }
              : {
                  opacity: { duration: 0.1, ease: 'easeInOut' },
                  x: { type: 'spring', stiffness: 100, damping: 30 },
                }
          }
          className={cn(
            'flex flex-none flex-row flex-nowrap items-center justify-start gap-2 overflow-visible p-0',
            { 'pointer-events-auto gap-4': isOpen }
          )}
        >
          {links.slice(4, 8).map(({ href, label }) => (
            <NextLink
              key={href}
              href={href}
              className={cn({ 'pointer-events-none opacity-40': !isOpen })}
              aria-disabled={!isOpen}
              tabIndex={isOpen ? 0 : -1}
            >
              {label}
            </NextLink>
          ))}
        </motion.div>
      </div>
    </motion.nav>
  );
};
