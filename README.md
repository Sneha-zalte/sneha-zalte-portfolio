# Sneha Zalte — Portfolio

Next.js portfolio (MCA graduate · ML Engineer @ Ant Systemz).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact inbox

Visitors submit the contact form → messages are saved → you review them here:

- Page: [http://localhost:3000/submissions](http://localhost:3000/submissions)
- API: `GET /api/submissions?password=YOUR_PASSWORD`

Default password is in `.env.local` (`SUBMISSIONS_PASSWORD`). Change it before sharing the site.

## Resume

`public/Resume-SnehaZalte.pdf` is linked from the navbar.

## Deploy on Vercel

```bash
npx vercel
```

Add environment variable in the Vercel project:

- `SUBMISSIONS_PASSWORD` — password for `/submissions`

> Note: On Vercel’s serverless filesystem, contact messages may not persist across redeploys the same way as on a long-running server. Prefer checking `/submissions` while the deployment is live, or ask to upgrade storage (database / blob) later.
