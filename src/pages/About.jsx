import { Page, PageHead, SectionHead } from '../components/Chrome.jsx'
import { PRINCIPLES, COMPANY, TOURS } from '../data.js'
import { href } from '../lib/paths.js'

import trail from '../assets/trail.jpg'

export default function About() {
  return (
    <Page>
      <PageHead
        eyebrow="How we run it"
        title="Four things we will not trade away"
        note="Every operator in Tbilisi will tell you their groups are small and their guides are local. These are the specifics behind ours."
      />

      <section className="section section-tight">
        <div className="shell">
          <div className="principle-list">
            {PRINCIPLES.map((p, i) => (
              <article key={p.title}>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h2>{p.title}</h2>
                  <p>{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-stone">
        <div className="shell about-split">
          <img src={trail} alt="A forest trail under the Caucasus" loading="lazy" />
          <div>
            <SectionHead eyebrow="Seasons" title="When the mountains are open" />
            <p>
              Tusheti has a road for about four months a year; the Abano Pass opens
              in July and shuts with the first serious snow. Svaneti runs June to
              September. Kazbegi is the longest season and the one we can most often
              rescue a trip into when the weather turns.
            </p>
            <p>
              Vardzia and the south are the exception — dry, low and walkable all
              year, which is why they are on the list at all.
            </p>
            <dl className="season-facts">
              <div><dt>Trips</dt><dd>{TOURS.length}</dd></div>
              <div><dt>Group</dt><dd>8 max</dd></div>
              <div><dt>Licence</dt><dd>{COMPANY.licence.split('·')[1].trim()}</dd></div>
            </dl>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell cta">
          <div>
            <h2>Still deciding?</h2>
            <p>Tell us your dates and fitness and we will say which trip fits — including when the answer is none of them.</p>
          </div>
          <a className="btn btn-solid btn-lg" href={href('enquire')}>Send an enquiry</a>
        </div>
      </section>
    </Page>
  )
}
