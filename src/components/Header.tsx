"use client";

import Link from "next/link";
import { Moon, Sun, Cpu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <Cpu className="h-8 w-8 text-blue-500" />
          <span className="text-xl font-bold tracking-tight text-white">
            Invisible <span className="text-blue-500">AI-Bridge</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">Home</Link>
          <Link href="/about" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">About</Link>
          <Link href="/docs" className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors">Docs</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg hover:bg-white/5 text-gray-300 hover:text-blue-400 transition-all"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all shadow-lg shadow-blue-500/20">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
