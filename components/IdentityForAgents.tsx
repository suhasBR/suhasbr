export function IdentityForAgents() {
  return (
    <section id="focus" className="py-16 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
          Focus Area
        </p>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-accent shrink-0" />
          <h2 className="text-2xl font-semibold text-foreground">
            Identity for AI Agents
          </h2>
        </div>

        <div className="max-w-2xl space-y-4">
          <p className="text-base text-muted-foreground leading-relaxed">
            When an AI agent books a meeting, queries a database, or executes a
            payment on your behalf, it needs an identity, and that identity needs
            to be authorized, audited, and scoped correctly. This isn&apos;t a
            future problem. It&apos;s a right-now problem that most teams are
            solving with duct tape.
          </p>
          <p className="text-base text-muted-foreground leading-relaxed">
            I&apos;m building a point of view (and eventually tools) around how
            OAuth 2.0 and emerging standards like MCP apply to agent
            authorization. How do you give an LLM the minimum permissions it
            needs? How do you revoke access when something goes wrong? How does
            fine-grained authorization work when the principal is a model, not a
            person?
          </p>
        </div>
      </div>
    </section>
  )
}
