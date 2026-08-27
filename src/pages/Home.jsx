import { Page, SectionHead } from '../components/Chrome.jsx'
import { COMPANY, TOURS, PRINCIPLES, GALLERY } from '../data.js'
import { href } from '../lib/paths.js'

import hero from '../assets/hero.jpg'

export default function Home() {
  return (
    <Page transparentHeader>
      <section className="hero">
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
            <a className="btn btn-solid btn-lg" href={href('tours')}>See the tours</a>
            <a className="btn btn-ghost btn-lg" href={href('enquire')}>Ask a question</a>
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

      <section className="section">
        <div className="shell">
          <SectionHead eyebrow="How we run it" title="Four things we will not trade away" />
          <div className="principles">
            {PRINCIPLES.map((p, i) => (
              <article key={p.title}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
          <div className="after-list">
            <a className="btn btn-ghost" href={href('about')}>More about how we work</a>
          </div>
        </div>
      </section>

      <section className="section section-stone">
        <div className="shell">
          <SectionHead
            eyebrow="Tours"
            title="Six trips, run on fixed dates"
            note="Prices are per person, based on a group of six. Smaller groups cost a little more — we will tell you exactly what before you commit."
          />
          <div className="teaser-grid">
            {TOURS.slice(0, 3).map((t) => (
              <a className="teaser" key={t.id} href={href('tours')}>
                <div className="teaser-media">
                  <img src={t.photo} alt={t.name} loading="lazy" />
                  <span className="tour-grade" data-grade={t.grade}>{t.grade}</span>
                </div>
                <p className="tour-meta">
                  <span>{t.region}</span>
                  <span>{t.days} {t.days === 1 ? 'day' : 'days'}</span>
                </p>
                <h3>{t.name}</h3>
                <p className="from">from <b>{t.price}&#8382;</b> <i>per person</i></p>
              </a>
            ))}
          </div>
          <div className="after-list">
            <a className="btn btn-solid btn-lg" href={href('tours')}>All six trips</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHead eyebrow="Gallery" title="Where the trips go" />
          <div className="gallery">
            {GALLERY.map((img) => (
              <a className="shot" key={img.src} href={href('gallery')}>
                <img src={img.src} alt={img.alt} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell cta">
          <div>
            <h2>Tell us when you are here.</h2>
            <p>
              We answer every message within a day, usually the same one. No booking
              system, no deposit at this stage.
            </p>
          </div>
          <a className="btn btn-solid btn-lg" href={href('enquire')}>Send an enquiry</a>
        </div>
      </section>
    </Page>
  )
}
