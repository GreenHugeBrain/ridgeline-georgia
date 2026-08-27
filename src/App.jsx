import { useEffect, useMemo, useState } from 'react'
import './styles.css'

import { COMPANY, REGIONS, GRADES, TOURS, GALLERY, PRINCIPLES } from './data.js'
import hero from './assets/hero.jpg'

const NAV = [
  ['Tours', 'tours'],
  ['How we run', 'principles'],
  ['Gallery', 'gallery'],
  ['Enquire', 'enquire'],
]

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Principles />
        <Tours />
        <Gallery />
        <Enquiry />
      </main>
      <Footer />
    </>
  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <div className="shell header-inner">
        <a className="wordmark" href="#top">
          <Peak />
          Ridgeline
        </a>
        <nav className={open ? 'nav is-open' : 'nav'}>
          {NAV.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}

function Peak() {
  return (
    <svg viewBox="0 0 32 22" width="26" height="18" aria-hidden="true">
      <path d="M1 21L11 3l6 10 4-6 10 14z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero" id="top">
      <img className="hero-img" src={hero} alt="" />
      <div className="hero-veil" />
      <div className="shell hero-inner">
        <p className="kicker">Small-group mountain tours · Georgia</p>
        <h1>The Caucasus,<br />eight at a time.</h1>
        <p className="hero-lede">
          Fixed departures into Kazbegi, Svaneti and Tusheti, led by licensed
          Georgian guides and sleeping in the villages you walk through.
        </p>
        <div className="hero-cta">
          <a className="btn btn-solid btn-lg" href="#tours">See the tours</a>
          <a className="btn btn-ghost btn-lg" href="#enquire">Ask a question</a>
        </div>
      </div>
      <div className="hero-strip">
        <div className="shell hero-strip-inner">
          <span><b>{TOURS.length}</b> fixed itineraries</span>
          <span><b>8</b> people maximum</span>
          <span><b>1—4</b> days</span>
          <span><b>{COMPANY.licence.split('·')[1].trim()}</b> licensed</span>
        </div>
      </div>
    </section>
  )
}

function Principles() {
  return (
    <section className="section" id="principles">
      <div className="shell">
        <SectionHead
          eyebrow="How we run it"
          title="Four things we will not trade away"
        />
        <div className="principles">
          {PRINCIPLES.map((p, i) => (
            <article key={p.title}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ----------------------------------------------------------------- tours */

const ANY = 'Any'

function Tours() {
  const [region, setRegion] = useState(ANY)
  const [grade, setGrade] = useState(ANY)
  const [maxDays, setMaxDays] = useState(4)
  const [openTour, setOpenTour] = useState(null)

  const shown = useMemo(() => TOURS.filter((t) => (
    (region === ANY || t.region === region)
    && (grade === ANY || t.grade === grade)
    && t.days <= maxDays
  )), [region, grade, maxDays])

  function clear() {
    setRegion(ANY)
    setGrade(ANY)
    setMaxDays(4)
  }

  const filtered = region !== ANY || grade !== ANY || maxDays < 4

  return (
    <section className="section section-stone" id="tours">
      <div className="shell">
        <SectionHead
          eyebrow="Tours"
          title="Six trips, run on fixed dates"
          note="Prices are per person, based on a group of six. Smaller groups cost a little more — we will tell you exactly what before you commit."
        />

        <div className="filters">
          <Filter label="Region" value={region} onChange={setRegion} options={REGIONS} />
          <Filter label="Grade" value={grade} onChange={setGrade} options={GRADES} />
          <label className="filter filter-range">
            <span className="filter-label">Up to {maxDays} {maxDays === 1 ? 'day' : 'days'}</span>
            <input
              type="range"
              min="1"
              max="4"
              value={maxDays}
              onChange={(e) => setMaxDays(Number(e.target.value))}
            />
          </label>
          {filtered && (
            <button className="clear" type="button" onClick={clear}>Clear</button>
          )}
        </div>

        <p className="count" role="status">
          {shown.length} of {TOURS.length} {shown.length === 1 ? 'trip' : 'trips'}
        </p>

        {shown.length === 0 ? (
          <p className="empty">
            Nothing matches that combination. Widen the days, or drop the grade filter —
            the harder trips are all two days or more.
          </p>
        ) : (
          <div className="tour-grid">
            {shown.map((t) => (
              <TourCard
                key={t.id}
                tour={t}
                open={openTour === t.id}
                onToggle={() => setOpenTour(openTour === t.id ? null : t.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function Filter({ label, value, onChange, options }) {
  return (
    <label className="filter">
      <span className="filter-label">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value={ANY}>{ANY}</option>
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  )
}

function TourCard({ tour, open, onToggle }) {
  const [people, setPeople] = useState(2)

  // A bigger group shares the vehicle and the guide, so the per-head price falls.
  const perPerson = Math.round(tour.price * (1 + Math.max(0, 4 - people) * 0.07))
  const total = perPerson * people

  return (
    <article className={open ? 'tour is-open' : 'tour'}>
      <div className="tour-media">
        <img src={tour.photo} alt={tour.name} loading="lazy" />
        <span className="tour-grade" data-grade={tour.grade}>{tour.grade}</span>
      </div>

      <div className="tour-body">
        <p className="tour-meta">
          <span>{tour.region}</span>
          <span>{tour.days} {tour.days === 1 ? 'day' : 'days'}</span>
          <span>{tour.season}</span>
        </p>
        <h3>{tour.name}</h3>
        <p className="tour-summary">{tour.summary}</p>

        <div className="tour-foot">
          <p className="from">
            from <b>{tour.price}&#8382;</b> <i>per person</i>
          </p>
          <button className="btn btn-ghost" type="button" onClick={onToggle} aria-expanded={open}>
            {open ? 'Hide detail' : 'Itinerary & price'}
          </button>
        </div>

        {open && (
          <div className="tour-detail">
            <h4>Itinerary</h4>
            <ol className="itinerary">
              {tour.itinerary.map(([label, text]) => (
                <li key={label}>
                  <span className="it-label">{label}</span>
                  <p>{text}</p>
                </li>
              ))}
            </ol>

            <h4>Included</h4>
            <ul className="includes">
              {tour.includes.map((inc) => <li key={inc}>{inc}</li>)}
            </ul>

            <div className="calc">
              <div className="calc-control">
                <span className="filter-label">Group size</span>
                <div className="stepper">
                  <button type="button" onClick={() => setPeople((n) => Math.max(1, n - 1))} aria-label="Fewer people">−</button>
                  <b>{people}</b>
                  <button type="button" onClick={() => setPeople((n) => Math.min(8, n + 1))} aria-label="More people">+</button>
                </div>
              </div>
              <div className="calc-out">
                <span>{perPerson}&#8382; each</span>
                <b>{total}&#8382; total</b>
              </div>
            </div>
            <p className="calc-note">
              Indicative only. Trips of one or two are quoted individually.
            </p>
          </div>
        )}
      </div>
    </article>
  )
}

/* --------------------------------------------------------------- gallery */

function Gallery() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i + 1) % GALLERY.length)
      if (e.key === 'ArrowLeft') setActive((i) => (i - 1 + GALLERY.length) % GALLERY.length)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  return (
    <section className="section" id="gallery">
      <div className="shell">
        <SectionHead eyebrow="Gallery" title="Where the trips go" />
        <div className="gallery">
          {GALLERY.map((img, i) => (
            <button key={img.src} type="button" className="shot" onClick={() => setActive(i)}>
              <img src={img.src} alt={img.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>
      {active !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setActive(null)}>
          <img src={GALLERY[active].src} alt={GALLERY[active].alt} />
          <p>{GALLERY[active].alt}</p>
          <button className="lightbox-close" type="button" aria-label="Close">&times;</button>
        </div>
      )}
    </section>
  )
}

/* -------------------------------------------------------------- enquiry */

function Enquiry() {
  const [form, setForm] = useState({ name: '', email: '', tour: '', people: '2', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function submit(e) {
    e.preventDefault()
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Your name, please.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) {
      next.email = 'We reply by email, so it has to be a real one.'
    }
    setErrors(next)
    if (!Object.keys(next).length) setSent(true)
  }

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

  return (
    <section className="section section-dark" id="enquire">
      <div className="shell enquire">
        <div>
          <SectionHead
            eyebrow="Enquire"
            title="Tell us when you are here"
            note="We answer every message within a day, usually the same one. No booking system, no deposit at this stage."
          />
          <p className="office">
            {COMPANY.street}<br />
            {COMPANY.city}<br /><br />
            <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a><br />
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
          </p>
        </div>

        {sent ? (
          <div className="sent">
            <h3>Thank you, {form.name.split(' ')[0]}.</h3>
            <p>
              On a live site this would be in our inbox now, and you would hear back
              within the day. Nothing was actually sent — this is a demonstration build.
            </p>
            <button className="btn btn-ghost" type="button" onClick={() => setSent(false)}>
              Back to the form
            </button>
          </div>
        ) : (
          <form className="enquiry-form" onSubmit={submit} noValidate>
            <label className={errors.name ? 'field has-error' : 'field'}>
              <span className="field-label">Name</span>
              <input value={form.name} onChange={set('name')} autoComplete="name" />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </label>
            <label className={errors.email ? 'field has-error' : 'field'}>
              <span className="field-label">Email</span>
              <input type="email" value={form.email} onChange={set('email')} autoComplete="email" />
              {errors.email && <span className="field-error">{errors.email}</span>}
            </label>
            <label className="field">
              <span className="field-label">Which trip</span>
              <select value={form.tour} onChange={set('tour')}>
                <option value="">Not sure yet</option>
                {TOURS.map((t) => <option key={t.id} value={t.id}>{t.name}</option>)}
              </select>
            </label>
            <label className="field">
              <span className="field-label">How many of you</span>
              <input type="number" min="1" max="8" value={form.people} onChange={set('people')} />
            </label>
            <label className="field field-wide">
              <span className="field-label">Anything else</span>
              <textarea rows={4} value={form.message} onChange={set('message')} placeholder="Dates you have in mind, fitness, whether you have walked at altitude before…" />
            </label>
            <button className="btn btn-solid btn-lg" type="submit">Send enquiry</button>
          </form>
        )}
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- pieces */

function SectionHead({ eyebrow, title, note }) {
  return (
    <div className="section-head">
      <p className="kicker">{eyebrow}</p>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="wordmark" href="#top"><Peak />Ridgeline</a>
        <p>{COMPANY.street}, {COMPANY.city}</p>
        <p>{COMPANY.licence}</p>
        <p className="fine">
          A concept site, built as a demonstration. Ridgeline is not a real
          operator. Photographs from Wikimedia Commons — see CREDITS.md.
        </p>
      </div>
    </footer>
  )
}
