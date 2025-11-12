'use client';

import { motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { FiPlus } from 'react-icons/fi';

import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

import { NextLink } from './NextLink';
import { links } from '@/constants';

export const MenuMobileorTablet: FunctionComponent<{
  isOpen: boolean;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}> = ({ isOpen, setIsOpen }) => {
  return (
    <nav>
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            aria-expanded={isOpen}
            className={cn(
              'cursor-pointer bg-gray-200 max-[700px]:border max-[700px]:border-gray-200',
              { 'bg-white': isOpen }
            )}
            onClick={() => setIsOpen?.((prevState: boolean) => !prevState)}
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
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="center">
          <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-white p-4">
            {links.map(({ href, label }) => (
              <NextLink key={href} href={href} onClick={() => setIsOpen(false)}>
                {label}
              </NextLink>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </nav>
  );
};
