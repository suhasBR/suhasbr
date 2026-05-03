import { experience } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Experience
        </p>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-border" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <div key={i} className="relative pl-8">
                {/* Timeline dot */}
                <div className="absolute left-[-4px] top-[7px] w-2 h-2 rounded-full bg-accent ring-4 ring-background" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-base font-medium text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-accent">{exp.company}</p>
                  </div>
                  <span className="font-mono text-xs text-muted-foreground shrink-0 md:mt-1">
                    {exp.period}
                  </span>
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
