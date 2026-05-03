export interface Award {
  title: string
  detail: string
  org: string
  type: 'okta' | 'external'
}

export const awards: Award[] = [
  { title: 'SE of the Quarter', detail: 'Q2 FY26', org: 'Okta', type: 'okta' },
  { title: 'SE of the Quarter', detail: 'Q3 FY26', org: 'Okta', type: 'okta' },
  { title: 'Commercial SE Impact Award', detail: 'Q4 FY26', org: 'Okta', type: 'okta' },
  { title: 'MVP', detail: 'Q2 FY26', org: 'Okta', type: 'okta' },
  { title: 'Tech Champion Auth0', detail: 'Q1 FY26', org: 'Okta', type: 'okta' },
  { title: 'SE Collaboration', detail: 'Q1 FY26', org: 'Okta', type: 'okta' },
  { title: 'Special Mention', detail: 'Q3 FY25', org: 'Okta', type: 'okta' },
  {
    title: '2nd Runner-up',
    detail: 'Warpspeed Agentic AI Hackathon',
    org: 'Lightspeed × Devfolio',
    type: 'external',
  },
  {
    title: 'Runner-up',
    detail: 'Demo Days India',
    org: 'Presales Collective',
    type: 'external',
  },
  {
    title: 'National Winner',
    detail: 'Mobility Hackathon',
    org: 'Daimler',
    type: 'external',
  },
  {
    title: 'Extraordinary Achievement Award',
    detail: '',
    org: 'National Instruments',
    type: 'external',
  },
]
