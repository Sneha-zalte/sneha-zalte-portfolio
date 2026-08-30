"use client";

import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { Reveal, SectionTitle } from "@/components/Reveal";

export function About() {
  return (
    <section id="about" className="py-16">
      <SectionTitle eyebrow="Identity matrix" title="About me" />
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Reveal>
          <article className="glass rounded-3xl p-6">
            <p className="text-slate-300 leading-relaxed">{profile.about}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.languages.map((lang) => (
                <span
                  key={lang}
                  className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-3 py-1.5 text-sm font-semibold"
                >
                  {lang}
                </span>
              ))}
            </div>
          </article>
        </Reveal>
        <Reveal delay={0.1}>
          <aside className="glass rounded-3xl p-6">
            <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">
              Quick info
            </h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-400" /> {profile.location}
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-cyan-400" />
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-cyan-400" />
                <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm font-semibold hover:border-cyan-400/60"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-2 text-sm font-semibold hover:border-cyan-400/60"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
            </div>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
