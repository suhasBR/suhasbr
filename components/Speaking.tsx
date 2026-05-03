import { Users, Mic } from 'lucide-react'

const events = [
  {
    title: 'Warpspeed Agentic AI Hackathon',
    org: 'Lightspeed × Devfolio',
    detail: 'Bengaluru',
    year: '2024',
  },
  {
    title: 'Demo Days India',
    org: 'Presales Collective',
    detail: 'Runner-up',
    year: '2024',
  },
  {
    title: 'SF AI Hackathon',
    org: 'San Francisco',
    detail: '',
    year: '2024',
  },
]

export function Speaking() {
  return (
    <section id="speaking" className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Speaking & Community
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
              <Users size={11} />
              Community
            </p>
            <div className="flex items-start gap-3">
              <div className="w-1 h-1 rounded-full bg-accent mt-[9px] shrink-0" />
              <div>
                <p className="text-base font-medium text-foreground">
                  Presales Collective
                </p>
                <p className="text-sm text-muted-foreground">
                  Active member · Demo Days India Runner-up 2024
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
              <Mic size={11} />
              Events & Hackathons
            </p>
            <div className="space-y-4">
              {events.map((e, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-accent mt-[9px] shrink-0" />
                  <div>
                    <p className="text-base font-medium text-foreground">
                      {e.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {e.org}
                      {e.detail ? ` · ${e.detail}` : ''} · {e.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-8 font-mono border-l-2 border-border pl-3">
              More talks and panels added as they happen.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
