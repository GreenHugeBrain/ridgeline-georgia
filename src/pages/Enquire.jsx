import { useState } from 'react'

import { Page, PageHead } from '../components/Chrome.jsx'
import { COMPANY, TOURS } from '../data.js'
import { href } from '../lib/paths.js'

export default function Enquire() {
  const [form, setForm] = useState({ name: '', email: '', tour: '', people: '2', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })

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

  return (
    <Page>
      <PageHead
        eyebrow="Enquire"
        title="Tell us when you are here"
        note="We answer every message within a day, usually the same one. No booking system, no deposit at this stage."
      />

      <section className="section section-tight">
        <div className="shell enquire">
          <div>
            <h2 className="office-head">The office</h2>
            <p className="office">
              {COMPANY.street}<br />
              {COMPANY.city}<br /><br />
              <a href={`tel:${COMPANY.phone.replace(/\s/g, '')}`}>{COMPANY.phone}</a><br />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
            <p className="office-note">{COMPANY.licence}</p>
          </div>

          {sent ? (
            <div className="sent">
              <h2>Thank you, {form.name.split(' ')[0]}.</h2>
              <p>
                On a live site this would be in our inbox now, and you would hear
                back within the day. Nothing was actually sent — this is a
                demonstration build.
              </p>
              <div className="confirm-actions">
                <button className="btn btn-ghost" type="button" onClick={() => setSent(false)}>
                  Back to the form
                </button>
                <a className="btn btn-ghost" href={href('tours')}>Back to the tours</a>
              </div>
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
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={set('message')}
                  placeholder="Dates you have in mind, fitness, whether you have walked at altitude before…"
                />
              </label>

              <button className="btn btn-solid btn-lg" type="submit">Send enquiry</button>
            </form>
          )}
        </div>
      </section>
    </Page>
  )
}
