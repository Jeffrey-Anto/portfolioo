import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Figma", "Chrome DevTools"],
  },
  {
    title: "Concepts",
    skills: ["DSA Basics", "OOP", "Responsive Design", "REST APIs", "Version Control"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 bg-card/50">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Skills
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
          Technologies I work with
        </h2>
        
        <div className="grid gap-10 md:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill} 
                    variant="secondary"
                    className="px-3 py-1.5 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
