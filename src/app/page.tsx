import React from 'react';
import Intro from '@/components/Intro';
import About from '@/components/About';

export default function Home() {
  return (
    <main className="flex grow flex-col gap-20 px-4">
      <Intro />
      <About />
      <section id="works">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Projects</h2>
          <p className="text-lg">
            Here are some of the projects I have worked on recently. Each
            project reflects my dedication to quality and my passion for web
            development.
          </p>
        </div>
      </section>
      <section id="experience">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">Experience</h2>
          <p className="text-lg">
            Over the years, I have had the opportunity to work in various roles
            that have enriched my skills and broadened my perspective as a web
            developer. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Itaque blanditiis explicabo sed doloribus facere natus illum
            temporibus, repellat velit doloremque distinctio odio cumque fugit
            autem tenetur neque sunt. Aliquid, porro. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Libero maiores eveniet, aliquid ullam
            sapiente similique eligendi nihil quae dolorem facilis. Ipsam sint
            illo, doloribus cupiditate soluta iusto sequi repellat nam? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. In illum quisquam
            voluptatum minus, obcaecati aperiam, tempore vero natus quia beatae
            earum fuga eaque ab, asperiores rem vitae a necessitatibus officia.
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem. Quisquam, quidem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Quisquam, quidem.
          </p>
        </div>
      </section>
    </main>
  );
}
