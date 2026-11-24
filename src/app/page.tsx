'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Code2,
  ExternalLink,
  Mail,
  Phone,
  Terminal,
  Layers,
  Smartphone,
  Sparkles,
  GraduationCap,
  Cpu,
  Server,
  Globe,
} from 'lucide-react';
import { PROJECTS, Project } from '@/data/projects';
import TiltCard3D from '@/components/TiltCard3D';
import Hero3DScene from '@/components/Hero3DScene';

const TECH_STACK = [
  {
    category: 'Frontend & Web',
    icon: Globe,
    skills: ['Next.js', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    category: 'Backend & APIs',
    icon: Server,
    skills: ['Node.js', 'Spring Boot', 'Laravel', 'Symfony', '.NET'],
  },
  {
    category: 'Mobile & Intelligence Artificielle',
    icon: Cpu,
    skills: ['Flutter', 'Intelligence Artificielle (IA)', 'REST / GraphQL'],
  },
];

export default function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous');

  const categories = ['Tous', 'Web', 'E-Commerce', 'SaaS', 'Mobile'];

  const filteredProjects =
    selectedCategory === 'Tous'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#070b14] bg-tech-grid text-slate-100">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-[#070b14]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo WilieTechTn */}
          <a href="#accueil" className="group flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-400 bg-[#0e1628] text-amber-400 transition-transform group-hover:scale-105">
              <Code2 className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">
              Wilie<span className="text-amber-400">TechTn</span>
            </span>
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
            <a href="#accueil" className="transition-colors hover:text-amber-400">
              Accueil
            </a>
            <a href="#projets" className="transition-colors hover:text-amber-400">
              Mes Projets
            </a>
            <a href="#competences" className="transition-colors hover:text-amber-400">
              Compétences
            </a>
            <a href="#services" className="transition-colors hover:text-amber-400">
              Services
            </a>
            <a href="#contact" className="transition-colors hover:text-amber-400">
              Contact
            </a>
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="rounded-lg bg-amber-400 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:bg-amber-300"
          >
            Me Contacter
          </a>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="accueil"
        className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:py-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          {/* Bloc Photo de Profil + Diplôme ESPRIT */}
          <div className="mb-6 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl border-2 border-amber-400 bg-[#0e1628] shadow-[0_0_25px_rgba(245,183,0,0.35)] sm:h-28 sm:w-28">
              <img
                src="/profile.png"
                alt="Wael Rjeibi - Ingénieur en Informatique"
                className="h-full w-full object-cover object-top"
              />
            </div>

            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-3.5 py-1 text-xs font-semibold text-amber-300">
                <GraduationCap className="h-4 w-4" />
                Ingénieur en Informatique — Diplômé d&apos;ESPRIT Tunisie
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-400">
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                Fondateur de <span className="font-bold text-white">WilieTechTn</span> • Développement Web, Mobile & IA
              </div>
            </div>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
            <span className="text-amber-400">WilieTechTn</span>
            <span className="mt-2 block text-2xl font-bold text-white sm:text-4xl">
              WAEL RJEIBI
            </span>
            <span className="mt-1 block text-lg font-semibold text-slate-300 sm:text-2xl">
              INGÉNIEUR EN INFORMATIQUE & DÉVELOPPEUR FULL-STACK
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Diplômé d&apos;<span className="font-semibold text-white">ESPRIT Tunisie</span>, je conçois des applications web, mobiles et solutions d&apos;intelligence artificielle performantes avec{' '}
            <span className="font-semibold text-amber-300">Next.js</span>,{' '}
            <span className="font-semibold text-amber-300">TypeScript</span>,{' '}
            <span className="font-semibold text-amber-300">Node.js</span>,{' '}
            <span className="font-semibold text-amber-300">Spring Boot</span>,{' '}
            <span className="font-semibold text-amber-300">Laravel</span>,{' '}
            <span className="font-semibold text-amber-300">Symfony</span>,{' '}
            <span className="font-semibold text-amber-300">.NET</span> et{' '}
            <span className="font-semibold text-amber-300">Flutter</span>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projets"
              className="rounded-xl bg-amber-400 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-400/25 transition hover:bg-amber-300"
            >
              Voir mes projets
            </a>
            <a
              href="#competences"
              className="rounded-xl border border-slate-700 bg-[#0e1628] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-amber-400/60"
            >
              Mes compétences
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <Hero3DScene />
        </motion.div>
      </section>

      {/* SECTION MES PROJETS */}
      <section id="projets" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Mes <span className="text-amber-400">Projets</span>
            </h2>
            <p className="mt-2 text-slate-400">
              Découvrez mes réalisations web et mobiles développées pour mes clients.
            </p>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-lg px-4 py-2 text-xs font-semibold transition ${
                  selectedCategory === cat
                    ? 'bg-amber-400 text-slate-950'
                    : 'border border-slate-800 bg-[#0e1628] text-slate-300 hover:border-amber-400/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grille 3D des projets */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredProjects.map((project: Project) => (
            <TiltCard3D
              key={project.id}
              className={`group relative rounded-2xl border bg-[#0e1628] bg-gradient-to-b from-[#131d36] to-[#0b1120] p-6 transition-all ${
                project.featured
                  ? 'border-amber-400/60 gold-glow'
                  : 'border-slate-800 hover:border-amber-400/40'
              }`}
            >
              {/* Aperçu visuel : vraie image du site ou carte stylisée */}
              <div className="relative mb-6 h-56 w-full overflow-hidden rounded-xl border border-slate-700/70 bg-slate-950 shadow-lg">
                {project.image ? (
                  <>
                    <img
                      src={project.image}
                      alt={`Aperçu du site ${project.title}`}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070b14]/85 via-transparent to-transparent" />
                  </>
                ) : (
                  <div
                    className={`h-full w-full bg-gradient-to-br ${project.accentColor}`}
                  />
                )}

                {/* Badges haut */}
                <div className="absolute top-3 right-3 left-3 flex items-center justify-between">
                  <span className="rounded-md bg-slate-950/85 px-3 py-1 text-xs font-bold text-amber-400 backdrop-blur-sm">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="rounded-md bg-amber-400 px-2.5 py-1 text-xs font-extrabold text-slate-950 shadow">
                      Projet Réel
                    </span>
                  )}
                </div>

                {/* Titre et URL */}
                <div className="absolute right-4 bottom-3 left-4">
                  <h3
                    className={`text-xl font-black tracking-tight ${
                      project.image ? 'text-white' : 'text-slate-950'
                    }`}
                  >
                    {project.title}
                  </h3>
                  {project.url && (
                    <p
                      className={`font-mono text-xs font-medium ${
                        project.image ? 'text-amber-300' : 'text-slate-900/80'
                      }`}
                    >
                      {project.url.replace('https://', '')}
                    </p>
                  )}
                </div>
              </div>

              {/* Description & Technologies */}
              <p className="text-sm leading-relaxed text-slate-300">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-t border-slate-800/80 pt-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-slate-700 bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-400 hover:text-amber-300"
                  >
                    Visiter le site <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="text-xs font-medium text-slate-500">
                    Démo disponible sur demande
                  </span>
                )}
              </div>
            </TiltCard3D>
          ))}
        </div>
      </section>

      {/* SECTION COMPÉTENCES TECHNIQUES (STACK FULL-STACK & IA) */}
      <section id="competences" className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Compétences <span className="text-amber-400">Techniques</span>
          </h2>
          <p className="mt-2 text-slate-400">
            Ingénieur en Informatique (ESPRIT Tunisie) — Écosystème Full-Stack, Mobile & IA.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {TECH_STACK.map((group) => {
            const IconComponent = group.icon;
            return (
              <TiltCard3D
                key={group.category}
                className="rounded-2xl border border-slate-800 bg-[#0e1628] p-6 hover:border-amber-400/50"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-400/10 text-amber-400">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-lg border border-amber-400/25 bg-slate-900/90 px-3 py-1.5 text-xs font-semibold text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard3D>
            );
          })}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-[#0e1628] p-6">
            <Terminal className="mb-4 h-8 w-8 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Sites Web Vitrines</h3>
            <p className="mt-2 text-sm text-slate-400">
              Interfaces modernes, rapides et optimisées pour valoriser votre activité.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-[#0e1628] p-6">
            <Layers className="mb-4 h-8 w-8 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Plateformes & Backends</h3>
            <p className="mt-2 text-sm text-slate-400">
              Architectures robustes (Node.js, Spring Boot, Laravel, Symfony, .NET) et intégration IA.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-[#0e1628] p-6">
            <Smartphone className="mb-4 h-8 w-8 text-amber-400" />
            <h3 className="text-lg font-bold text-white">Applications Mobiles Flutter</h3>
            <p className="mt-2 text-sm text-slate-400">
              Solutions mobiles Android & iOS sur-mesure connectées à vos outils métiers.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer
        id="contact"
        className="mt-16 border-t border-slate-800 bg-[#05080f] py-16"
      >
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            Travaillons ensemble sur votre prochain projet
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Contactez <strong className="text-amber-400">Wael Rjeibi</strong> —{' '}
            <strong className="text-white">WilieTechTn</strong> pour obtenir un
            devis ou discuter de votre application web, mobile ou IA.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href="tel:+21654552528"
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0e1628] px-6 py-4 text-sm font-semibold text-white transition hover:border-amber-400"
            >
              <Phone className="h-5 w-5 text-amber-400" />
              +216 54 552 528
            </a>

            <a
              href="mailto:wilietechtn@gmail.com"
              className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#0e1628] px-6 py-4 text-sm font-semibold text-white transition hover:border-amber-400"
            >
              <Mail className="h-5 w-5 text-amber-400" />
              wilietechtn@gmail.com
            </a>
          </div>

          <p className="mt-12 text-xs text-slate-500">
            © 2026 WilieTechTn — Wael Rjeibi (Ingénieur en Informatique • ESPRIT Tunisie).
          </p>
        </div>
      </footer>
    </div>
  );
}