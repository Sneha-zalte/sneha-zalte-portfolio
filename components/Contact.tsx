"use client";

import { FormEvent, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { profile } from "@/lib/data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");
  const [error, setError] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Failed to send");
      setStatus("ok");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section id="contact" className="py-16">
      <h2 className="font-[var(--font-display)] text-3xl font-bold text-white">
        <span className="holo-text">Contact</span>
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-[1.15fr_.85fr]">
        <form onSubmit={onSubmit} className="glass rounded-3xl p-6">
          <label className="block text-sm font-semibold text-slate-300">
            Name
            <input
              name="name"
              required
              className="mt-2 w-full rounded-xl border border-white/15 bg-[#020617]/70 px-3 py-2.5 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              placeholder="Your name"
            />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-300">
            Email
            <input
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-xl border border-white/15 bg-[#020617]/70 px-3 py-2.5 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              placeholder="you@example.com"
            />
          </label>
          <label className="mt-4 block text-sm font-semibold text-slate-300">
            Message
            <textarea
              name="message"
              required
              className="mt-2 min-h-28 w-full resize-y rounded-xl border border-white/15 bg-[#020617]/70 px-3 py-2.5 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              placeholder="How can I help?"
            />
          </label>
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn-future mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-teal-300 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-[0_0_24px_rgba(34,211,238,0.35)] disabled:opacity-60"
          >
            {status === "loading" ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            {status === "loading" ? "Sending…" : "Send message"}
          </button>
          {status === "ok" && (
            <p className="mt-3 text-sm text-emerald-300">
              Message sent. I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && <p className="mt-3 text-sm text-rose-300">{error}</p>}
        </form>
        <div className="glass rounded-3xl p-6">
          <h3 className="font-[var(--font-display)] text-xl font-semibold text-white">
            Let’s build something useful
          </h3>
          <p className="mt-3 leading-relaxed text-slate-300">
            I&apos;m a Junior Software Engineer at Ant Systemz, working on AI and media
            systems — including adaptive dubbing, Python/ML pipelines, and full-stack product
            work. I care about shipping reliable tools that make technology more accessible.
            If you&apos;re hiring for ML, Android, or full-stack roles, I&apos;d be glad to connect.
          </p>
          <p className="mt-5 text-sm">
            <a className="text-cyan-300 hover:underline" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <br />
            <a className="text-cyan-300 hover:underline" href={`tel:${profile.phoneHref}`}>
              {profile.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
