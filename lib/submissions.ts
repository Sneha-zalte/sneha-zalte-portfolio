import { promises as fs } from "fs";
import path from "path";
import os from "os";

export type Submission = {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

function storePath() {
  // Vercel filesystem is read-only except /tmp
  if (process.env.VERCEL) {
    return path.join(os.tmpdir(), "sneha-portfolio-submissions.json");
  }
  return path.join(process.cwd(), "data", "submissions.json");
}

async function ensureFile(filePath: string) {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, "[]", "utf8");
  }
}

export async function readSubmissions(): Promise<Submission[]> {
  const filePath = storePath();
  await ensureFile(filePath);
  const raw = await fs.readFile(filePath, "utf8");
  try {
    const parsed = JSON.parse(raw) as Submission[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function addSubmission(
  input: Omit<Submission, "id" | "createdAt">
): Promise<Submission> {
  const list = await readSubmissions();
  const entry: Submission = {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    ...input,
  };
  list.unshift(entry);
  await fs.writeFile(storePath(), JSON.stringify(list, null, 2), "utf8");
  return entry;
}
