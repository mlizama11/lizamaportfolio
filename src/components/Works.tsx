import React from 'react';
import Image from 'next/image';
import { projects } from '@/constants';
import { NextLink } from './NextLink';

export default function Works() {
  return (
    <section id="works">
      <div className="flex flex-col gap-4">
        <h2 className="text-3xl font-bold">Works</h2>
        <p className="text-lg">
          Here are some of the projects I have worked on. Each project reflects
          my dedication to quality and my passion for web development,
          journalism, audiovisual and photography.
        </p>
      </div>
      <div className="mt-6 grid gap-8 md:grid-cols-2">
        {projects.map(({ id, name, description, img, techStack }) => (
          <div
            key={id}
            className="overflow-hidden rounded-lg border-2 border-gray-200"
          >
            <div className="h-70 w-full">
              <Image
                src={img}
                alt={name}
                className="h-full w-full object-cover object-top"
                width={550}
                height={640}
              />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <div className="flex flex-col gap-3">
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm">{description}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {techStack.map(({ name, logo }) => (
                    <img
                      key={name}
                      src={`https://img.shields.io/badge/${encodeURIComponent(name)}-000000?style=flat&logo=${encodeURIComponent(
                        logo
                      )}&labelColor=white&color=white&logoColor=black`}
                      alt={`${name} badge`}
                      className="h-6"
                    />
                  ))}
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <NextLink
                  href="#"
                  className="underline-none flex items-center rounded-md border border-black bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-black hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:outline-none aria-[disabled=true]:pointer-events-none aria-[disabled=true]:opacity-5"
                >
                  More information
                </NextLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
