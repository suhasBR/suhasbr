export function About() {
  return (
    <section id="about" className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
            About
          </p>
          <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a Solutions Engineer at Okta, working on Auth0&apos;s
              Customer Identity platform and helping development teams across the US
              SMB segment get authentication and authorization right before it
              becomes a problem. Deep technical fluency across complex systems,
              combined with the ability to translate it for people making
              high-stakes decisions, is what I bring into every sales cycle and
              every demo.
            </p>
            <p>
              The thread I keep pulling on is identity: who gets to do what, how
              systems prove it, and increasingly, how those rules apply when the
              actor isn&apos;t a person but an AI agent acting on someone&apos;s
              behalf. That last question is where I&apos;m spending most of my
              thinking time right now.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
