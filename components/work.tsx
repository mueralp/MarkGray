import Image from 'next/image'
import { projects } from '@/lib/site'

export function Work() {
  return (
    <section id="work" aria-labelledby="work-heading" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex items-baseline justify-between gap-4">
          <h2 id="work-heading" className="font-serif text-4xl tracking-tight md:text-5xl">
            Selected work
          </h2>
          <span className="text-sm text-muted-foreground">{`(${projects.length})`}</span>
        </div>

        <ul className="mt-12 flex flex-col gap-16">
          {projects.map((project, index) => (
            <li key={project.title}>
              <article className="group grid gap-6 md:grid-cols-12 md:gap-10">
                <div className="overflow-hidden rounded-lg bg-muted md:col-span-8">
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    width={1200}
                    height={800}
                    className="aspect-[3/2] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
                    priority={index === 0}
                  />
                </div>
                <div className="flex flex-col justify-end gap-3 md:col-span-4">
                  <span className="text-sm text-muted-foreground">
                    {String(index + 1).padStart(2, '0')} — {project.year}
                  </span>
                  <h3 className="font-serif text-3xl tracking-tight">{project.title}</h3>
                  <p className="text-sm font-medium text-brand">{project.category}</p>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
