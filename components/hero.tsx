import { ArrowDownRight } from 'lucide-react'
import { site } from '@/lib/site'

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-20 pt-20 md:pb-28 md:pt-32">
      <div className="flex items-center gap-3 text-sm text-muted-foreground">
        <span className="relative flex size-2">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60 motion-reduce:hidden" />
          <span className="relative inline-flex size-2 rounded-full bg-brand" />
        </span>
        <span>Available for new projects</span>
      </div>

      <h1 className="mt-8 max-w-4xl text-balance font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
        {site.name}, <span className="italic text-muted-foreground">{site.role.toLowerCase()}.</span>
      </h1>

      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          {site.intro}
        </p>
        <a
          href="#work"
          className="group inline-flex items-center gap-2 self-start rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90 md:self-auto"
        >
          See selected work
          <ArrowDownRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
          />
        </a>
      </div>
    </section>
  )
}
