import { awards } from '@/data/awards'
import { Trophy, Award } from 'lucide-react'

export function Awards() {
  const okta = awards.filter((a) => a.type === 'okta')
  const external = awards.filter((a) => a.type === 'external')

  return (
    <section id="awards" className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Awards & Recognition
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
              <Trophy size={11} />
              Competitions & Industry
            </p>
            <div className="space-y-5">
              {external.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-accent mt-[9px] shrink-0" />
                  <div>
                    <p className="text-base font-medium text-foreground">{a.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {a.detail}
                      {a.detail && a.org ? ' · ' : ''}
                      {a.org}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-6 flex items-center gap-2">
              <Award size={11} />
              Okta Internal
            </p>
            <div className="space-y-5">
              {okta.map((a, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1 h-1 rounded-full bg-accent mt-[9px] shrink-0" />
                  <div>
                    <p className="text-base font-medium text-foreground">{a.title}</p>
                    <p className="text-sm text-muted-foreground">{a.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
