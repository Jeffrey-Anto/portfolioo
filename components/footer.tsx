import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border/50">
      <div className="max-w-4xl flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} Alex Chen. Built with Next.js & Tailwind CSS.
        </p>
        
        <div className="flex items-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="size-4" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="size-4" />
          </a>
          <a
            href="mailto:alex.chen@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="size-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}
