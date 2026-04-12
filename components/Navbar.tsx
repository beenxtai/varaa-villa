"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-panel-border">
      <div className="max-w-[1180px] mx-auto w-[calc(100%-32px)] flex items-center justify-between py-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#1b2a37] to-[#0c1318] border border-gold-light/30 grid place-items-center shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_18px_48px_rgba(0,0,0,0.32)] text-gold-light font-serif text-xl font-extrabold">
            V
          </div>
          <div>
            <h1 className="text-lg font-bold tracking-wide m-0 text-foreground">VARAA VILLA</h1>
            <p className="text-sm text-muted m-0 mt-0.5">Premium private villa in Mysore</p>
          </div>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          <a href="#about" className="text-sm font-medium text-muted hover:text-foreground transition-colors">About</a>
          <a href="#gallery" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Gallery</a>
          <a href="#stay" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Features</a>
          <a href="#rules" className="text-sm font-medium text-muted hover:text-foreground transition-colors">House Rules</a>
          <a href="#book" className="text-sm font-medium text-muted hover:text-foreground transition-colors">Book</a>
          
          <ThemeToggle />
          
          <a 
            href="#book" 
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full font-bold transition-transform hover:-translate-y-0.5 bg-gradient-to-br from-gold to-[#b98a43] text-[#1a1308] shadow-[0_18px_48px_rgba(0,0,0,0.32)]"
          >
            Reserve Now
          </a>
        </div>
        
        {/* Mobile menu could be added here, for now just show theme toggle and reserve button on mobile */}
        <div className="flex lg:hidden items-center gap-3">
          <ThemeToggle />
          <a 
            href="#book" 
            className="inline-flex items-center justify-center px-4 py-2 text-sm rounded-full font-bold transition-transform hover:-translate-y-0.5 bg-gradient-to-br from-gold to-[#b98a43] text-[#1a1308]"
          >
            Book
          </a>
        </div>
      </div>
    </nav>
  );
}
