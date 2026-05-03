import { projects } from '@/data/projects'
import { Github, ExternalLink, Trophy } from 'lucide-react'

export function Projects() {
  const featured = projects.filter((p) => p.featured)
  const past = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
          Projects
        </p>

        {/* Featured */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {featured.map((project, i) => (
            <div
              key={i}
              className="border border-border rounded-lg p-5 bg-surface flex flex-col hover:border-foreground/20 transition-colors"
            >
              <h3 className="text-base font-medium text-foreground mb-3">
                {project.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {project.description}
              </p>

              {project.award && (
                <p className="text-sm text-accent mb-3 flex items-start gap-1.5">
                  <Trophy size={12} className="shrink-0 mt-[3px]" />
                  {project.award}
                </p>
              )}

              <div className="flex flex-wrap gap-1 mb-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-xs text-muted-foreground border border-border px-1.5 py-0.5 rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {(project.link || project.github) && (
                <div className="flex gap-4 mt-auto pt-1">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Github size={11} />
                      Code
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <ExternalLink size={11} />
                      View
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Past Work */}
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-6">
            Past Work
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {past.map((project, i) => (
              <div
                key={i}
                className="border border-border rounded-lg p-4 bg-surface hover:border-foreground/20 transition-colors flex flex-col"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-base font-medium text-foreground">
                    {project.title}
                  </h4>
                  <div className="flex gap-2 ml-2 shrink-0">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github size={13} />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs text-muted-foreground/60 border border-border px-1.5 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
