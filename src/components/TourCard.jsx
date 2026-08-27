import { useState } from 'react'

/**
 * A trip. Collapsed it is a card in the grid; expanded it takes the full row and
 * shows the day-by-day plan and a price that follows the group size.
 */
export default function TourCard({ tour, open, onToggle }) {
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
          <p className="from">from <b>{tour.price}&#8382;</b> <i>per person</i></p>
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
