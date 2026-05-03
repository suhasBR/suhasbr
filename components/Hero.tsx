import Image from 'next/image'
import { Mail, Github, Linkedin } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative flex items-center dot-pattern">
      {/* Radial vignette over dot pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Photo with blue gradient ring */}
          <div className="shrink-0">
            <div className="p-[2px] rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700">
              <div className="p-[3px] rounded-full bg-background">
                <Image
                  src="/photo.jpg"
                  alt="Suhas Sharma"
                  width={100}
                  height={100}
                  className="rounded-full object-cover w-[100px] h-[100px]"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div>
            {/* Cert badges */}
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="font-mono text-xs text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded">
                Auth0 Certified Developer
              </span>
              <span className="font-mono text-xs text-accent border border-accent/30 bg-accent/10 px-2 py-0.5 rounded">
                Okta for AI Agents
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-2">
              Suhas Sharma
            </h1>
            <p className="text-base text-muted-foreground mb-4">
              Solutions Engineer ·{' '}
              <span className="text-foreground font-medium">Okta</span>
              <span className="mx-2 opacity-30">·</span>
              <span className="text-muted-foreground">Bengaluru</span>
            </p>
            <p className="text-base text-muted-foreground max-w-lg leading-relaxed mb-8">
              Solutions Engineer at the intersection of identity, developer
              experience, and AI agents.
            </p>

            {/* Social links */}
            <div className="flex flex-wrap gap-3">
              <a
                href="https://linkedin.com/in/suhassharma-53a776122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 bg-surface/50 px-3 py-1.5 rounded-md transition-all"
              >
                <Linkedin size={14} />
                LinkedIn
              </a>
              <a
                href="https://github.com/suhasBR"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 bg-surface/50 px-3 py-1.5 rounded-md transition-all"
              >
                <Github size={14} />
                GitHub
              </a>
              <a
                href="mailto:suhas.bangalore16@gmail.com"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground border border-border hover:border-foreground/30 bg-surface/50 px-3 py-1.5 rounded-md transition-all"
              >
                <Mail size={14} />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
