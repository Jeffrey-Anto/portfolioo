import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "TaskFlow",
    description: "A modern task management application with drag-and-drop functionality, real-time updates, and collaborative features for team productivity.",
    tech: ["React", "Tailwind CSS", "Firebase"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "WeatherNow",
    description: "A responsive weather dashboard that provides real-time weather data, forecasts, and location-based services with a clean, intuitive interface.",
    tech: ["JavaScript", "CSS", "Weather API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "DevPortfolio",
    description: "A customizable portfolio template for developers featuring dark mode, smooth animations, and optimized performance for fast loading.",
    tech: ["React", "Next.js", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "QuizMaster",
    description: "An interactive quiz application with multiple categories, score tracking, and a leaderboard system to track progress over time.",
    tech: ["HTML", "CSS", "JavaScript"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Projects
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Some things {"I've"} built
        </h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <Card 
              key={project.title}
              className="group border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardHeader>
                <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="ghost" size="sm" asChild className="h-8 px-3">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="size-4 mr-1.5" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" asChild className="h-8 px-3">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="size-4 mr-1.5" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
