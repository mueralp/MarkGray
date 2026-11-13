import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { SiteHeader } from '@/components/site-header'
import { Work } from '@/components/work'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Work />
        <About />
      </main>
      <Contact />
    </>
  )
}
