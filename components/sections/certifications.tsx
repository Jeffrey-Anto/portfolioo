import { Award, ExternalLink } from "lucide-react"

const certifications = [
  {
    title: "Web Development Fundamentals",
    issuer: "IBM",
    date: "2024",
    url: "#",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "2024",
    url: "#",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    issuer: "freeCodeCamp",
    date: "2024",
    url: "#",
  },
]

const achievements = [
  {
    title: "TechFest Symposium 2024",
    description: "Participated in web development track and presented innovative project solutions",
  },
  {
    title: "Hackathon Finalist",
    description: "Top 10 finalist at University Annual Hackathon for building an accessibility-focused web app",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Achievements
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Certifications & Recognition
        </h2>
        
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="size-5 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <a
                  key={cert.title}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-secondary/30"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        {cert.issuer} • {cert.date}
                      </p>
                    </div>
                    <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="size-5 text-primary" />
              Recognition
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="p-4 rounded-lg border border-border/50"
                >
                  <h4 className="font-medium text-foreground">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
