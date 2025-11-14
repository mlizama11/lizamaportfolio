'use client';

import { DialogClose } from '@radix-ui/react-dialog';
import Image from 'next/image';
import React from 'react';

import { Card, CardContent, CardHeader } from './Card';
import { NextLink } from './NextLink';
import { Button } from './ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog';
import { works } from '@/constants';
import { ProjectType } from '@/types';

export function ProjectsList() {
  return (
    <div className="flex flex-col gap-8">
      {works.map(({ id, type, projects }) => {
        return (
          <div key={id} className="flex flex-col gap-3">
            <h4>{type}</h4>
            <div className="grid gap-8 md:grid-cols-2">
              {projects.map(
                ({ id, img, title, description, link, techStack }) => {
                  return (
                    <Card key={id}>
                      <CardHeader>
                        <Image
                          src={img}
                          alt={title}
                          className="h-full w-full object-cover"
                          width={550}
                          height={640}
                        />
                      </CardHeader>
                      <CardContent>
                        <div>
                          <div className="flex flex-col gap-3">
                            <h4 className="font-semibold">{title}</h4>
                            <div className="flex flex-col items-end">
                              <p className="text-sm text-gray-600 dark:text-gray-300">
                                {description}
                              </p>
                            </div>
                          </div>

                          {techStack && (
                            <div className="flex flex-col gap-3 pt-4">
                              <h5 className="font-bold">Tech Stack</h5>
                              <div className="flex flex-wrap gap-2">
                                {techStack.map(({ title, logo }) => (
                                  <Image
                                    key={title}
                                    src={`https://img.shields.io/badge/${encodeURIComponent(
                                      title
                                    )}-000000?style=flat&logo=${encodeURIComponent(
                                      logo
                                    )}&labelColor=white&color=white&logoColor=black`}
                                    alt={`${title} badge`}
                                    className="h-6"
                                    width={100}
                                    height={24}
                                    unoptimized
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        <div className="flex justify-end gap-4">
                          {type === ProjectType.WEBDEV && (
                            <NextLink
                              href={link || '#'}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline-none focus-visible:border-ring focus-visible:ring-ring/50 z-30 flex items-center rounded-md border border-black bg-white px-4 py-2 font-medium text-black transition-colors outline-none hover:bg-black hover:text-white focus-visible:ring-[3px] aria-[disabled=true]:pointer-events-none aria-[disabled=true]:opacity-5 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black"
                            >
                              Visit Website
                            </NextLink>
                          )}
                          {type === ProjectType.AUDIOVISUAL && (
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button className="underline-none focus-visible:border-ring focus-visible:ring-ring/50 z-30 flex cursor-pointer items-center rounded-md border border-black bg-white px-4 py-2 font-medium text-black transition-colors outline-none hover:bg-black hover:text-white focus-visible:ring-[3px] aria-[disabled=true]:pointer-events-none aria-[disabled=true]:opacity-5 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black">
                                  Check Video
                                </Button>
                              </DialogTrigger>

                              <DialogContent
                                showCloseButton={false}
                                className="flex w-[500px] flex-col items-center justify-center gap-0 overflow-hidden border-0 p-0 dark:bg-white"
                              >
                                <DialogHeader className="sr-only">
                                  <DialogTitle>Video</DialogTitle>
                                  <DialogDescription>
                                    Project created when working as Multimedia
                                    Officer at the OAS
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="aspect-video w-full">
                                  <iframe
                                    title="vimeo-player"
                                    className="inset-0 h-full w-full"
                                    src="https://player.vimeo.com/video/247341360?h=25d69368d5"
                                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                                  />
                                </div>
                                <div className="flex h-16 w-full items-center justify-center">
                                  <DialogClose className="focus-visible:border-ring focus-visible:ring-ring/50 cursor-pointer rounded-md border border-black bg-white px-4 py-2 font-medium text-black shadow-2xl transition-colors outline-none hover:bg-black hover:text-white focus-visible:ring-[3px]">
                                    Close
                                  </DialogClose>
                                </div>
                              </DialogContent>
                            </Dialog>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                }
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
