'use client';

import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import Link from 'next/link';

import { links } from '@/constants/site';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="home" className="h-20 w-full">
      <motion.nav
        aria-label="Main navigation"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 140, damping: 22 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/85 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-black/75"
      >
        <div className="mx-auto flex h-20 w-full max-w-300 items-center justify-between px-6">
          <Link
            href="/#home"
            aria-label="Mauricio Lizama home"
            onClick={() => setIsOpen(false)}
            className="group flex size-11 shrink-0 items-center justify-center rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            <motion.svg
              viewBox="0 0 44 44"
              aria-hidden="true"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', stiffness: 350, damping: 20 }}
              className="size-11 shrink-0 overflow-visible text-gray-900 dark:text-white"
              fill="none"
            >
              <motion.path
                d="M6 34V10l10 12 10-12v24"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
              />
              <motion.path
                d="M28 10v24h10"
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.45, delay: 0.35, ease: 'easeOut' }}
              />
            </motion.svg>
          </Link>

          <div className="hidden items-center gap-1 min-[900px]:flex">
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-blue-400"
              >
                {label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            className="flex size-10 items-center justify-center rounded-lg border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 min-[900px]:hidden dark:border-white/15 dark:text-gray-200 dark:hover:bg-white/10"
            onClick={() => setIsOpen((open) => !open)}
          >
            <motion.span
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="flex"
            >
              {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </motion.span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-black/5 bg-white/95 min-[900px]:hidden dark:border-white/10 dark:bg-black/95"
            >
              <div className="mx-auto flex w-full max-w-300 flex-col gap-1 px-6 py-3">
                {links.map(({ href, label }, index) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.025, duration: 0.18 }}
                  >
                    <Link
                      href={href}
                      className="block rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 dark:text-gray-200 dark:hover:bg-white/10 dark:hover:text-blue-400"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
