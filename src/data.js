import kazbegi from './assets/kazbegi.jpg'
import svaneti from './assets/svaneti.jpg'
import towers from './assets/towers.jpg'
import mestia from './assets/mestia.jpg'
import lakes from './assets/lakes.jpg'
import tusheti from './assets/tusheti.jpg'
import omalo from './assets/omalo.jpg'
import vardzia from './assets/vardzia.jpg'
import trail from './assets/trail.jpg'

export const COMPANY = {
  name: 'Ridgeline',
  street: '11 Ietim Gurji Street',
  city: 'Tbilisi 0105, Georgia',
  phone: '+995 322 55 18 40',
  email: 'hello@ridgeline.ge',
  licence: 'Georgian National Tourism Administration · TO-4471',
}

export const REGIONS = ['Kazbegi', 'Svaneti', 'Tusheti', 'Samtskhe']
export const GRADES = ['Easy', 'Moderate', 'Hard']

export const TOURS = [
  {
    id: 'gergeti',
    name: 'Gergeti & the Truso Valley',
    region: 'Kazbegi',
    grade: 'Easy',
    days: 2,
    price: 340,
    photo: kazbegi,
    season: 'May — October',
    summary:
      'Two days under Kazbek. Up to the Gergeti church on foot, then into Truso '
      + 'for the travertine springs and the abandoned towers.',
    itinerary: [
      ['Day 1', 'Tbilisi to Stepantsminda along the Military Road, stopping at Ananuri and the Jvari Pass. Afternoon walk up to Gergeti Trinity — 400 m of ascent, about three hours there and back. Guesthouse in the village.'],
      ['Day 2', 'Drive into the Truso Valley, walk the flat valley floor past the mineral springs and Zakagori fortress, then back to Tbilisi by early evening.'],
    ],
    includes: ['Transport from Tbilisi', 'One night in a guesthouse', 'Breakfast and dinner', 'Licensed mountain guide'],
  },
  {
    id: 'ushguli',
    name: 'Mestia to Ushguli',
    region: 'Svaneti',
    grade: 'Hard',
    days: 4,
    price: 760,
    photo: svaneti,
    season: 'June — September',
    summary:
      'The classic four-day traverse through Upper Svaneti, village to village, '
      + 'ending in Ushguli under Shkhara.',
    itinerary: [
      ['Day 1', 'Mestia to Zhabeshi. A long first day on an old forest track, 14 km, with the Svan towers in view most of the way.'],
      ['Day 2', 'Zhabeshi to Adishi over the Bagvdanari pass. The steepest climb of the trek and the best of the ridgelines.'],
      ['Day 3', 'Adishi to Iprari, crossing the Adishi river on horseback and climbing the Chkhutnieri pass.'],
      ['Day 4', 'Iprari to Ushguli. Shorter walking, then the afternoon in the highest inhabited village in Europe.'],
    ],
    includes: ['Four nights in village guesthouses', 'All meals on the trail', 'Luggage transfer between villages', 'River crossing by horse', 'Licensed mountain guide'],
  },
  {
    id: 'koruldi',
    name: 'Koruldi Lakes',
    region: 'Svaneti',
    grade: 'Moderate',
    days: 1,
    price: 180,
    photo: lakes,
    season: 'June — September',
    summary:
      'A single hard day above Mestia to the lakes at 2,700 m, with Ushba filling '
      + 'the whole northern sky.',
    itinerary: [
      ['Morning', 'Up past the Mestia cross, then a steady climb on a 4x4 track. 1,200 m of ascent, taken slowly.'],
      ['Afternoon', 'An hour at the lakes, then down the same way or by jeep if legs have had enough — your choice on the day.'],
    ],
    includes: ['Guide', 'Packed lunch', 'Optional jeep descent'],
  },
  {
    id: 'tusheti',
    name: 'Omalo & the Abano Pass',
    region: 'Tusheti',
    grade: 'Moderate',
    days: 3,
    price: 590,
    photo: tusheti,
    season: 'July — early October',
    summary:
      'Over the highest drivable pass in the Caucasus into Tusheti, and three days '
      + 'in villages the road only reaches for four months of the year.',
    itinerary: [
      ['Day 1', 'The Abano Pass by 4x4 — six hours, 2,850 m, and the reason this trip has a season at all. Night in Omalo.'],
      ['Day 2', 'Walk the ridge to Shenako and Diklo, both fortified villages looking straight into Dagestan.'],
      ['Day 3', 'Down to Dartlo and its towers, then back over the pass to Kakheti.'],
    ],
    includes: ['4x4 with local driver', 'Two nights in Tusheti guesthouses', 'All meals', 'Licensed guide'],
  },
  {
    id: 'chaukhi',
    name: 'Chaukhi & Abudelauri',
    region: 'Kazbegi',
    grade: 'Hard',
    days: 2,
    price: 380,
    photo: trail,
    season: 'July — September',
    summary:
      'The three coloured lakes under the Chaukhi massif — green, blue and white '
      + 'within an hour of each other.',
    itinerary: [
      ['Day 1', 'Drive to Roshka, then walk to the green and blue lakes. Camp or stay in the village, depending on the group.'],
      ['Day 2', 'Up to the white lake at the foot of the glacier, then back down and on to Tbilisi.'],
    ],
    includes: ['Transport', 'One night', 'All meals', 'Licensed guide'],
  },
  {
    id: 'vardzia',
    name: 'Vardzia & Southern Stone',
    region: 'Samtskhe',
    grade: 'Easy',
    days: 2,
    price: 310,
    photo: vardzia,
    season: 'All year',
    summary:
      'The cave city at Vardzia, the fortress at Khertvisi and the high plateau '
      + 'around Paravani — the quiet, dry south.',
    itinerary: [
      ['Day 1', 'Tbilisi to Borjomi, then along the Kura gorge to Khertvisi and Vardzia. Several hours in the caves. Night in Akhaltsikhe.'],
      ['Day 2', 'Rabati fortress in the morning, then the plateau road home past Paravani lake.'],
    ],
    includes: ['Transport', 'One night in Akhaltsikhe', 'Breakfast', 'Entry tickets', 'Guide'],
  },
]

export const GALLERY = [
  { src: mestia, alt: 'Snow-streaked peaks above Mestia' },
  { src: towers, alt: 'Svan defensive towers in a Ushguli village' },
  { src: omalo, alt: 'Stone towers above Omalo in Tusheti' },
  { src: trail, alt: 'A forest trail under the Caucasus' },
]

export const PRINCIPLES = [
  {
    title: 'Eight people, never nine',
    body: 'Small enough that the guide walks with everyone and the guesthouse can '
      + 'actually feed you. Groups do not get topped up to fill a bus.',
  },
  {
    title: 'Guides who live here',
    body: 'Every trip is led by a licensed Georgian mountain guide, most of them '
      + 'from the region they work in. No seasonal imports reading a script.',
  },
  {
    title: 'Village guesthouses',
    body: 'You sleep in the villages you walk through, with the families who live '
      + 'there. It is where most of the money stays, too.',
  },
  {
    title: 'Fixed departures, honest weather',
    body: 'Dates are set in advance and we run them. If the pass is closed we say '
      + 'so and move you, rather than driving up to find out.',
  },
]
