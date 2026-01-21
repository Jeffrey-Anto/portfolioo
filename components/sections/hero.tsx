"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Welcome
          </span>
        </div>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 tracking-tight">
          Jeffrey Anto Thomas
        </h1>
        
        <p className="text-xl md:text-2xl text-primary font-medium mb-6">
          3rd Year CSE Student | Frontend Developer
        </p>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10 leading-relaxed">
          I build accessible, pixel-perfect digital experiences for the web. 
          Passionate about crafting intuitive interfaces and solving complex problems 
          through clean, efficient code.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-12">
          <Button 
            size="lg" 
            onClick={() => scrollToSection("projects")}
            className="group"
          >
            View Projects
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="size-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="size-5" />
          </a>
          <a 
            href="mailto:alex.chen@email.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="size-5" />
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <button 
          onClick={() => scrollToSection("about")}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to about section"
        >
          <ArrowDown className="size-6" />
        </button>
      </div>
    </section>
  )
}
