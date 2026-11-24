'use client';

import { motion } from 'framer-motion';
import { Code2, Cpu, Globe, Terminal } from 'lucide-react';
import TiltCard3D from './TiltCard3D';

export default function Hero3DScene() {
  return (
    <TiltCard3D className="relative mx-auto w-full max-w-md">
      <div className="relative rounded-2xl border border-amber-400/25 bg-gradient-to-br from-[#0f172a] via-[#0b1120] to-[#172033] p-8 shadow-2xl gold-glow">
        {/* Halo lumineux interne */}
        <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-amber-400/15 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-blue-500/15 blur-3xl" />

        {/* Fenêtre Code Editor 3D */}
        <div className="rounded-xl border border-slate-700/70 bg-[#060911]/90 p-5 shadow-inner">
          <div className="mb-4 flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="font-mono text-xs text-slate-400">
              wilietechtn.config.ts
            </span>
          </div>

          {/* Monogramme W 3D central */}
          <div className="my-6 flex flex-col items-center justify-center">
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="flex h-24 w-24 items-center justify-center rounded-2xl border-2 border-amber-400/60 bg-gradient-to-tr from-amber-500/20 to-yellow-300/10 shadow-[0_0_30px_rgba(245,183,0,0.4)]"
            >
              <span className="bg-gradient-to-b from-amber-300 to-amber-500 bg-clip-text text-5xl font-black text-transparent">
                W
              </span>
            </motion.div>
            <p className="mt-3 font-mono text-xs tracking-widest text-amber-400 uppercase">
              WilieTechTn Architecture
            </p>
          </div>

          {/* Lignes de code simulées */}
          <div className="space-y-1.5 font-mono text-xs text-slate-400">
            <p>
              <span className="text-amber-400">const</span> engineer ={' '}
              <span className="text-emerald-400">&quot;Wael Rjeibi&quot;</span>;
            </p>
            <p>
              <span className="text-amber-400">const</span> stack = [
              <span className="text-sky-400">&quot;Next.js&quot;</span>,{' '}
              <span className="text-sky-400">&quot;TypeScript&quot;</span>];
            </p>
          </div>
        </div>

        {/* Badges flottants 3D */}
        <motion.div
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-5 -right-4 flex items-center gap-2 rounded-xl border border-amber-400/40 bg-[#0d1526] px-3.5 py-2 shadow-xl"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md bg-blue-600 text-xs font-bold text-white">
            TS
          </span>
          <span className="text-xs font-semibold text-slate-200">TypeScript</span>
        </motion.div>

        <motion.div
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-5 -left-4 flex items-center gap-2 rounded-xl border border-amber-400/40 bg-[#0d1526] px-3.5 py-2 shadow-xl"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-full border border-slate-500 bg-black text-xs font-bold text-white">
            N
          </span>
          <span className="text-xs font-semibold text-slate-200">Next.js 15</span>
        </motion.div>

        <div className="mt-6 grid grid-cols-3 gap-2 text-center text-xs text-slate-400">
          <div className="flex items-center justify-center gap-1 rounded-lg bg-slate-900/80 py-2">
            <Globe className="h-3.5 w-3.5 text-amber-400"/> Web
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg bg-slate-900/80 py-2">
            <Code2 className="h-3.5 w-3.5 text-amber-400"/> Mobile
          </div>
          <div className="flex items-center justify-center gap-1 rounded-lg bg-slate-900/80 py-2">
            <Cpu className="h-3.5 w-3.5 text-amber-400"/> Cloud
          </div>
        </div>
      </div>
    </TiltCard3D>
  );
}