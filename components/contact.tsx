import { ArrowUpRight } from 'lucide-react'
import { site } from '@/lib/site'

export function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" aria-labelledby="contact-heading" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <p className="text-sm opacity-60">Have a project in mind?</p>
        <h2 id="contact-heading" className="mt-4 font-serif text-5xl tracking-tight md:text-7xl">
          {"Let's work together."}
        </h2>
        <a
          href={`mailto:${site.email}`}
          className="group mt-10 inline-flex items-center gap-2 border-b border-background/30 pb-1 text-xl transition-colors hover:border-brand hover:text-brand md:text-2xl"
        >
          {site.email}
          <ArrowUpRight
            aria-hidden="true"
            className="size-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </a>

        <div className="mt-20 flex flex-col gap-6 border-t border-background/15 pt-8 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="opacity-60">{`© ${year} ${site.name}`}</p>
          <ul className="flex gap-6">
            {site.links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-70 transition-opacity hover:opacity-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
