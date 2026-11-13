import { experience, services, site } from '@/lib/site'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <h2 id="about-heading" className="font-serif text-4xl tracking-tight md:text-5xl">
            About
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">{site.location}</p>
        </div>

        <div className="flex flex-col gap-12 md:col-span-7">
          <div className="flex flex-col gap-5 text-lg leading-relaxed">
            <p className="text-pretty">
              {"I'm a designer who writes code. For the past eight years I've helped teams turn fuzzy ideas into products people enjoy using — balancing craft with the pragmatism needed to actually ship."}
            </p>
            <p className="text-pretty text-muted-foreground">
              I care about clear information hierarchy, accessible interfaces, and the small details
              that make software feel trustworthy.
            </p>
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Services</h3>
              <ul className="mt-4 flex flex-col gap-2">
                {services.map((service) => (
                  <li key={service}>{service}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Experience</h3>
              <ul className="mt-4 flex flex-col gap-4">
                {experience.map((item) => (
                  <li key={item.period}>
                    <p className="text-sm text-muted-foreground">{item.period}</p>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
