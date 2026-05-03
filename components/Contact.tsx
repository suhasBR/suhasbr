import { Mail, Linkedin, Github } from 'lucide-react'

const links = [
  {
    display: 'Email',
    label: 'suhas.bangalore16@gmail.com',
    href: 'mailto:suhas.bangalore16@gmail.com',
    Icon: Mail,
    external: false,
  },
  {
    display: 'LinkedIn',
    label: 'linkedin.com/in/suhassharma-53a776122',
    href: 'https://linkedin.com/in/suhassharma-53a776122',
    Icon: Linkedin,
    external: true,
  },
  {
    display: 'GitHub',
    label: 'github.com/suhasBR',
    href: 'https://github.com/suhasBR',
    Icon: Github,
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-md">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
            Contact
          </p>
          <h2 className="text-2xl font-semibold text-foreground mb-10 leading-snug">
            Let&apos;s talk identity, AI agents, or solutions engineering.
          </h2>

          <div className="space-y-5">
            {links.map(({ display, label, href, Icon, external }) => (
              <a
                key={href}
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className="flex items-center gap-4 group"
              >
                <div className="p-2.5 rounded-md border border-border bg-surface group-hover:border-accent/30 group-hover:bg-accent/5 transition-all shrink-0">
                  <Icon
                    size={15}
                    className="text-muted-foreground group-hover:text-accent transition-colors"
                  />
                </div>
                <div>
                  <p className="text-xs font-mono text-muted-foreground">
                    {display}
                  </p>
                  <p className="text-base text-foreground group-hover:text-accent transition-colors">
                    {label}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
