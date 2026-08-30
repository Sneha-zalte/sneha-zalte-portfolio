"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Inbox, Lock, RefreshCw } from "lucide-react";

type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

export default function SubmissionsPage() {
  const [password, setPassword] = useState("");
  const [items, setItems] = useState<Submission[] | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const load = async (e?: FormEvent) => {
    e?.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `/api/submissions?password=${encodeURIComponent(password)}`
      );
      const json = await res.json();
      if (!res.ok) throw new Error(json.error || "Unauthorized");
      setItems(json.submissions);
    } catch (err) {
      setItems(null);
      setError(err instanceof Error ? err.message : "Failed to load");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 mx-auto min-h-screen w-[min(900px,92%)] py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm font-semibold text-cyan-300">Private inbox</p>
          <h1 className="font-[var(--font-space)] text-3xl font-bold text-white">
            Contact submissions
          </h1>
        </div>
        <Link href="/" className="text-sm text-slate-400 hover:text-white">
          ← Back to portfolio
        </Link>
      </div>

      <form onSubmit={load} className="glass mb-8 flex flex-wrap items-end gap-3 rounded-3xl p-5">
        <label className="min-w-[220px] flex-1 text-sm font-semibold text-slate-300">
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-white/15 bg-[#020617]/70 px-3 py-2.5 outline-none focus:border-cyan-400"
            placeholder="Enter inbox password"
            required
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 px-5 py-2.5 text-sm font-bold text-white"
        >
          {loading ? <RefreshCw size={16} className="animate-spin" /> : <Lock size={16} />}
          Unlock inbox
        </button>
      </form>

      {error && <p className="mb-4 text-sm text-rose-300">{error}</p>}

      {items && (
        <div className="space-y-4">
          <p className="flex items-center gap-2 text-sm text-slate-400">
            <Inbox size={16} /> {items.length} message{items.length === 1 ? "" : "s"}
          </p>
          {items.length === 0 && (
            <div className="glass rounded-3xl p-8 text-center text-slate-400">
              No messages yet. When someone uses the contact form, they appear here.
            </div>
          )}
          {items.map((item) => (
            <article key={item.id} className="glass rounded-3xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="font-semibold text-white">{item.name}</h2>
                <time className="text-xs text-slate-500">
                  {new Date(item.createdAt).toLocaleString()}
                </time>
              </div>
              <a href={`mailto:${item.email}`} className="text-sm text-cyan-300">
                {item.email}
              </a>
              <p className="mt-3 whitespace-pre-wrap text-slate-300">{item.message}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
