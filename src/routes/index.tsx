import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

const services = [
  {
    tag: '01',
    title: 'Educational Consulting',
    copy: 'Curriculum audits, instructional design reviews, and accreditation prep for districts and independent schools weighing their next three years, not just their next semester.',
  },
  {
    tag: '02',
    title: 'Materials Acquisition',
    copy: 'Vendor evaluation, bid management, and procurement pipelines that keep textbook and instructional-materials budgets accountable from RFP to delivery.',
  },
  {
    tag: '03',
    title: 'Data Management',
    copy: 'Student information systems, reporting dashboards, and data-governance policy that hold up under state audit — built to be used, not just installed.',
  },
  {
    tag: '04',
    title: 'IT Strategy',
    copy: 'Network, device, and infrastructure planning sized to actual enrollment and actual budget, with a migration path that does not disrupt a school year mid-stream.',
  },
]

const engagements = [
  {
    stat: '17',
    label: 'districts advised since 2019',
  },
  {
    stat: '6,400+',
    label: 'staff seats migrated across SIS platforms',
  },
  {
    stat: '3',
    label: 'states with active procurement contracts',
  },
]

function Home() {
  return (
    <div className="min-h-screen">
      <header className="border-b border-[var(--color-line)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-5">
          <span className="font-display text-xl tracking-tight">
            Fenwick Hale
          </span>
          <nav className="hidden sm:flex items-center gap-8 text-sm">
            <a href="#services" className="hover:text-[var(--color-rust)] transition-colors">
              Services
            </a>
            <a href="#approach" className="hover:text-[var(--color-rust)] transition-colors">
              Approach
            </a>
            <a href="#contact" className="hover:text-[var(--color-rust)] transition-colors">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="text-sm px-4 py-2 border border-[var(--color-ink)] rounded-full hover:bg-[var(--color-ink)] hover:text-[var(--color-paper)] transition-colors"
          >
            Start a conversation
          </a>
        </div>
      </header>

      <main>
        <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-8 reveal">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-rust-dark)] mb-6">
              Independent consultancy for K&ndash;12 systems
            </p>
            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-8">
              Schools run on decisions made two budget cycles ago.
              <br />
              <span className="italic">We help you make the next ones well.</span>
            </h1>
            <p className="text-lg max-w-xl leading-relaxed text-[var(--color-ink)]/80">
              Fenwick Hale works directly with district leadership and school
              administrators on curriculum strategy, materials procurement,
              data infrastructure, and the IT systems underneath all of it.
              One point of contact, four disciplines, no handoffs between
              vendors who don't talk to each other.
            </p>
          </div>
          <div className="md:col-span-4 md:pt-24 flex md:justify-end reveal" style={{ animationDelay: '120ms' }}>
            <div className="border border-[var(--color-line)] rounded-2xl p-6 bg-[var(--color-paper-dim)] max-w-xs">
              <p className="font-display text-lg mb-3">Currently accepting</p>
              <p className="text-sm leading-relaxed text-[var(--color-ink)]/75">
                A limited number of district-level engagements for the
                2026&ndash;2027 planning cycle. Scoping calls booked through
                September.
              </p>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--color-line)] bg-[var(--color-paper-dim)]">
          <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {engagements.map((item) => (
              <div key={item.label}>
                <div className="font-display text-4xl mb-1">{item.stat}</div>
                <div className="text-sm text-[var(--color-ink)]/70">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="services" className="max-w-6xl mx-auto px-6 py-24">
          <div className="mb-14 max-w-2xl">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-rust-dark)] mb-4">
              What we do
            </p>
            <h2 className="font-display text-3xl md:text-4xl">
              Four disciplines, run as one practice.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-[var(--color-line)] border border-[var(--color-line)] rounded-2xl overflow-hidden">
            {services.map((service, index) => (
              <div
                key={service.tag}
                className={`bg-[var(--color-paper)] p-9 ${
                  index % 2 === 0 ? 'md:pr-14' : 'md:pl-14'
                }`}
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="font-display text-2xl text-[var(--color-rust)]">
                    {service.tag}
                  </span>
                  <h3 className="font-display text-2xl">{service.title}</h3>
                </div>
                <p className="text-[var(--color-ink)]/75 leading-relaxed">
                  {service.copy}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="approach" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="uppercase tracking-[0.2em] text-xs text-[var(--color-rust-dark)] mb-4">
              How we work
            </p>
            <h2 className="font-display text-3xl md:text-4xl mb-6">
              No slide decks that outlive the meeting.
            </h2>
            <p className="text-[var(--color-ink)]/75 leading-relaxed">
              Every engagement produces something you keep using: a
              procurement checklist, a governance policy, a migration
              runbook. Recommendations are sized to the staff who have to
              carry them out after the contract ends.
            </p>
          </div>
          <div className="md:col-span-7 md:pl-8">
            <ol className="space-y-8">
              <li className="flex gap-5">
                <span className="font-display text-xl text-[var(--color-rust)]">I.</span>
                <div>
                  <h3 className="font-medium mb-1">Assessment on-site</h3>
                  <p className="text-[var(--color-ink)]/75 leading-relaxed">
                    Two to three days with the people who will actually use
                    what gets recommended &mdash; not just the office that
                    signs the check.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="font-display text-xl text-[var(--color-rust)]">II.</span>
                <div>
                  <h3 className="font-medium mb-1">Plan, priced honestly</h3>
                  <p className="text-[var(--color-ink)]/75 leading-relaxed">
                    A phased roadmap with real vendor quotes attached, so a
                    board vote isn't guessing at cost.
                  </p>
                </div>
              </li>
              <li className="flex gap-5">
                <span className="font-display text-xl text-[var(--color-rust)]">III.</span>
                <div>
                  <h3 className="font-medium mb-1">Implementation support</h3>
                  <p className="text-[var(--color-ink)]/75 leading-relaxed">
                    We stay through the first semester of rollout, because
                    that's when a plan either holds or doesn't.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[var(--color-line)] bg-[var(--color-ink)] text-[var(--color-paper)]"
        >
          <div className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl md:text-4xl mb-4">
                Tell us where the plan is breaking down.
              </h2>
              <p className="text-[var(--color-paper)]/70 leading-relaxed max-w-lg">
                Most engagements start with a 30-minute scoping call, no
                proposal required beforehand. Reach out directly and we'll
                get back to you within two business days.
              </p>
            </div>
            <div className="md:col-span-5 md:pl-8 flex flex-col gap-3 justify-center">
              <a
                href="mailto:margaret@fenwickhale.com"
                className="inline-block text-lg border-b border-[var(--color-paper)]/40 pb-1 hover:border-[var(--color-rust)] hover:text-[var(--color-rust)] transition-colors w-fit"
              >
                margaret@fenwickhale.com
              </a>
              <a
                href="tel:+16175550148"
                className="inline-block text-lg border-b border-[var(--color-paper)]/40 pb-1 hover:border-[var(--color-rust)] hover:text-[var(--color-rust)] transition-colors w-fit"
              >
                (617) 555&ndash;0148
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[var(--color-ink)] text-[var(--color-paper)]/60 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <span>&copy; 2026 Fenwick Hale Consulting</span>
          <span>Boston, Massachusetts</span>
        </div>
      </footer>
    </div>
  )
}
