import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 mt-8 border-t border-white/10 py-10 text-center text-sm text-slate-500">
      © {new Date().getFullYear()} {profile.name} · Transmitted from Mumbai
    </footer>
  );
}
