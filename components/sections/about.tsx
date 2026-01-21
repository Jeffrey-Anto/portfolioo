export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            About
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
          A bit about me
        </h2>
        
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            {"I'm"} a <span className="text-foreground font-medium">3rd year Computer Science Engineering student</span> with 
            a deep passion for frontend development and creating meaningful digital experiences. 
            My journey in web development started with curiosity about how websites work, 
            and {"it's"} evolved into a commitment to building accessible, performant applications.
          </p>
          
          <p>
            Currently, {"I'm"} focused on expanding my skills in <span className="text-foreground font-medium">React</span> and 
            modern JavaScript frameworks while also diving into full-stack development. 
            I believe in writing clean, maintainable code and constantly learning new technologies 
            to stay current with industry trends.
          </p>
          
          <p>
            When {"I'm"} not coding, you can find me participating in hackathons, contributing to 
            open-source projects, or exploring the latest developments in web technologies. 
            {"I'm"} always excited to connect with fellow developers and learn from the community.
          </p>
        </div>
      </div>
    </section>
  )
}
