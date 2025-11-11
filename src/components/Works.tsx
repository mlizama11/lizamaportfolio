import React from 'react';
import Image from 'next/image';
import { projects } from '@/constants';
import { NextLink } from './NextLink';
import { Section, SectionTitle } from './layout/Section';
import { Card, CardContent, CardHeader } from './Card';

export default function Works() {
  return (
    <Section id="works" className="scroll-mt-2">
      <SectionTitle>Works</SectionTitle>
      <p>
        Here are some of the projects I have worked on. Each project reflects my
        dedication to quality and my passion for web development, journalism,
        audiovisual and photography.
      </p>
      <div>
        <h4>Web Development</h4>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {projects
          .filter((type) => type.type === 'web development')
          .map(({ id, name, description, img, techStack }) => {
            return (
              <Card key={id}>
                <CardHeader>
                  <Image
                    src={img}
                    alt={name}
                    className="h-full w-full object-cover object-top"
                    width={550}
                    height={640}
                  />
                </CardHeader>
                <CardContent>
                  <div>
                    <div className="flex flex-col gap-3">
                      <h3 className="font-semibold">{name}</h3>
                      <div className="flex flex-col items-end">
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {description}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 pt-4">
                      <h4 className="font-bold">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {techStack?.map(({ name, logo }) => (
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
                  </div>
                  <div className="flex justify-end gap-4">
                    <NextLink
                      href="#"
                      className="underline-none focus-visible:border-ring focus-visible:ring-ring/50 z-30 flex items-center rounded-md border border-black bg-white px-4 py-2 font-medium text-black transition-colors outline-none hover:bg-black hover:text-white focus-visible:ring-[3px] aria-[disabled=true]:pointer-events-none aria-[disabled=true]:opacity-5 dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black"
                    >
                      More information
                    </NextLink>
                  </div>
                </CardContent>
              </Card>
            );
          })}
      </div>
    </Section>
  );
}
