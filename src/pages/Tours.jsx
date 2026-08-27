import { useMemo, useState } from 'react'

import { Page, PageHead } from '../components/Chrome.jsx'
import TourCard from '../components/TourCard.jsx'
import { TOURS, REGIONS, GRADES } from '../data.js'
import { href } from '../lib/paths.js'

const ANY = 'Any'

export default function Tours() {
  const [region, setRegion] = useState(ANY)
  const [grade, setGrade] = useState(ANY)
  const [maxDays, setMaxDays] = useState(4)
  const [openTour, setOpenTour] = useState(null)

  const shown = useMemo(() => TOURS.filter((t) => (
    (region === ANY || t.region === region)
    && (grade === ANY || t.grade === grade)
    && t.days <= maxDays
  )), [region, grade, maxDays])

  const filtered = region !== ANY || grade !== ANY || maxDays < 4

  function clear() {
    setRegion(ANY)
    setGrade(ANY)
    setMaxDays(4)
  }

  return (
    <Page>
      <PageHead
        eyebrow="Tours"
        title="Six trips, run on fixed dates"
        note="Prices are per person, based on a group of six. Smaller groups cost a little more — we will tell you exactly what before you commit."
      />

      <section className="section section-tight">
        <div className="shell">
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
            {filtered && <button className="clear" type="button" onClick={clear}>Clear</button>}
          </div>

          <p className="count" role="status">
            {shown.length} of {TOURS.length} {shown.length === 1 ? 'trip' : 'trips'}
          </p>

          {shown.length === 0 ? (
            <p className="empty">
              Nothing matches that combination. Widen the days, or drop the grade
              filter — the harder trips are all two days or more.
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

          <div className="after-list">
            <a className="btn btn-solid btn-lg" href={href('enquire')}>Ask about a date</a>
          </div>
        </div>
      </section>
    </Page>
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
