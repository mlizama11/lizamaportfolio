'use client';

import { motion } from 'framer-motion';
import { FiPlus } from 'react-icons/fi';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { links, linkStyles } from '@/constants';
import { link } from 'fs';

export default function MenuDesktop({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}) {
  return (
    <motion.nav
      layout
      initial={false}
      animate={{
        backgroundColor: isOpen ? 'rgb(243 244 246)' : 'rgba(0,0,0,0)',
      }}
      transition={{ type: 'spring', stiffness: 100, damping: 30 }}
      className={cn(
        'relative flex h-min w-min origin-[50%_50%_0px] transform-none flex-row flex-nowrap content-center items-center justify-center overflow-hidden rounded-[8px] p-0.5',
        {
          'rounded-[8px]': isOpen,
        }
      )}
    >
      <div
        className={cn(
          'relative flex h-min w-min flex-none origin-[50%_50%_0px] transform-none flex-row flex-nowrap content-center items-center justify-center overflow-visible px-4 py-0',
          { 'gap-8': isOpen }
        )}
      >
        <motion.div
          layout
          initial={false}
          animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: 0 }}
          transition={
            isOpen
              ? { type: 'spring', stiffness: 100, damping: 30 }
              : {
                  opacity: { duration: 0.1, ease: 'easeInOut' },
                  x: { type: 'spring', stiffness: 100, damping: 30 },
                }
          }
          className={cn(
            'relative flex h-min w-min flex-none origin-[50%_50%_0px] transform-none flex-row flex-nowrap content-center items-center justify-end gap-2 overflow-visible p-0',
            { 'pointer-events-auto gap-4': isOpen }
          )}
        >
          {links.slice(0, 4).map(({ href, label }) => {
            return (
              <Link
                key={href}
                href={href}
                className={cn(linkStyles, {
                  'pointer-events-none opacity-40': !isOpen,
                })}
                aria-disabled={!isOpen}
                tabIndex={isOpen ? 0 : -1}
              >
                {label}
              </Link>
            );
          })}
        </motion.div>

        <div className="max-[700px]:order-first">
          <Button
            aria-expanded={isOpen}
            className={cn('bg-gray-200', { 'bg-white': isOpen })}
            onClick={() => setIsOpen((prevState: boolean) => !prevState)}
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
              <FiPlus
                className="shrink-0 transition-transform duration-300"
                size={16}
                color="black"
              />
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
            'relative flex h-min w-min flex-none origin-center transform-none flex-row flex-nowrap content-center items-center justify-start gap-2 overflow-visible p-0',
            { 'pointer-events-auto gap-4': isOpen }
          )}
        >
          {links.slice(4, 8).map(({ href, label }) => {
            return (
              <Link
                key={href}
                href={href}
                className={cn(linkStyles, {
                  'pointer-events-none opacity-40': !isOpen,
                })}
                aria-disabled={!isOpen}
                tabIndex={isOpen ? 0 : -1}
              >
                {label}
              </Link>
            );
          })}
        </motion.div>
      </div>
    </motion.nav>
  );
}
