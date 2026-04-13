import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#0a0a0a] py-8 mt-auto">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Invisible AI-Bridge. All rights reserved.
        </div>
        
        <div className="flex items-center gap-2 bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/20">
          <ShieldCheck className="h-3 w-3" />
          PII Masking & Privacy Secured
        </div>
      </div>
    </footer>
  );
}
