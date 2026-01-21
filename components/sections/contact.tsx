"use client"

import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Github, Linkedin, Mail, Send } from "lucide-react"
import { useState } from "react"

const socialLinks = [
  {
    name: "Email",
    href: "mailto:alex.chen@email.com",
    icon: Mail,
    label: "alex.chen@email.com",
  },
  {
    name: "GitHub",
    href: "https://github.com",
    icon: Github,
    label: "github.com/alexchen",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: Linkedin,
    label: "linkedin.com/in/alexchen",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px w-12 bg-primary" />
          <span className="text-primary text-sm font-medium tracking-wider uppercase">
            Contact
          </span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          {"Let's"} work together
        </h2>
        
        <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
          {"I'm"} currently looking for internship opportunities and always open to 
          discussing new projects. Feel free to reach out!
        </p>
        
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] md:text-sm resize-none"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                <Send className="size-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Or find me on
            </h3>
            <div className="space-y-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.name !== "Email" ? "_blank" : undefined}
                  rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:bg-secondary/30"
                >
                  <div className="p-2 rounded-md bg-secondary group-hover:bg-primary transition-colors">
                    <link.icon className="size-5 text-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                      {link.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {link.label}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
