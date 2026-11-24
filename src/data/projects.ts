export interface Project {
  id: string;
  title: string;
  category: 'Web' | 'E-Commerce' | 'SaaS' | 'Mobile';
  description: string;
  url?: string;
  image?: string;
  tags: string[];
  featured?: boolean;
  accentColor: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'germany-success-institut',
    title: 'Germany Success Institute',
    category: 'Web',
    description:
      'Plateforme éducative et portail d’accompagnement pour les études et carrières en Allemagne (cours d’allemand A1–B2, préparation TELC). Interface moderne, responsive et optimisée SEO.',
    url: 'https://www.germanysuccessinstitut.com/',
    image: '/projects/germany-success.png',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    accentColor: 'from-amber-400 to-yellow-600',
  },
  {
    id: 'radiwood-tn',
    title: 'Radiwoodtn',
    category: 'E-Commerce',
    description:
      'Boutique e-commerce dédiée à la vente de créations et produits artisanaux en bois d’olivier tunisien, façonnés à la main avec commande en ligne et WhatsApp.',
    url: 'https://radiwood-app-git-main-wilietechtn.vercel.app/',
    image: '/projects/RadiWood.png',
    tags: ['Next.js', 'TypeScript', 'E-Commerce'],
    featured: true,
    accentColor: 'from-amber-500 to-emerald-700',
  },
  {
    id: 'prodeco-web',
    title: 'ProDeco',
    category: 'Web',
    description:
      'Site vitrine élégant et moderne mettant en valeur les réalisations, services de décoration et d’aménagement avec une navigation fluide et responsive.',
    url: 'https://prodeco-web2.vercel.app/',
    image: '/projects/prodeco.png',

    tags: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    accentColor: 'from-amber-300 to-stone-600',
  },
  {
    id: 'ecommerce-platform',
    title: 'Plateforme E-Commerce',
    category: 'E-Commerce',
    description:
      'Boutique en ligne haute performance avec gestion de panier, paiement sécurisé et tableau de bord administrateur.',
    tags: ['Next.js', 'TypeScript', 'App Router'],
    accentColor: 'from-blue-400 to-indigo-600',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Analytics Dashboard',
    category: 'SaaS',
    description:
      'Interface analytique temps réel avec visualisation de données, gestion multi-utilisateurs et architecture modulaire.',
    tags: ['Next.js', 'TypeScript', 'App Router'],
    accentColor: 'from-cyan-400 to-blue-600',
  },
  {
    id: 'mobile-solutions',
    title: 'Applications Mobiles Sur-Mesure',
    category: 'Mobile',
    description:
      'Conception et développement d’applications mobiles cross-platform fluides et connectées aux APIs cloud.',
    tags: ['Flutter', 'TypeScript'],
    accentColor: 'from-amber-300 to-orange-500',
  },
];