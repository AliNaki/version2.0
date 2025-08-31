# Wakalatnama — LegalConnect (Starter)

This is a starter React + Vite + TypeScript project scaffold for **Wakalatnama** (LegalConnect). It includes a simple UI with:

- Homepage, Lawyers directory (placeholder), Lawyer profile placeholder
- Quiz placeholder page
- Blog listing and post placeholders
- Tailwind CSS for styling

## How to run locally

1. Install dependencies:
   ```bash
   npm install
   # or
   # pnpm install
   # yarn
   ```

2. Start dev server:
   ```bash
   npm run dev
   ```

3. Open `http://localhost:5173` in your browser.

## Deploy to Vercel

1. Push this repository to GitHub.
2. In Vercel, click "New Project" → Import from Git.
3. Select the repository, ensure Build Command is `npm run build` and Output Directory is `dist`.
4. Add Environment Variables if required, then deploy.

## Next steps I can do for you

- Replace placeholders with the full UI components (lawyer cards, detailed profiles, quiz engine, blog ToC).
- Integrate a backend (Supabase / Firebase / Node + Postgres) for lawyers, bookings, and comments.
- Add authentication and payments (Razorpay / Stripe for India).
