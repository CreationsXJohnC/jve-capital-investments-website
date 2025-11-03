# jve-capital-investments-website
JVE Capital Investments LLC, specializing in commercial & residential contracting projects. From general contracting & construction, to project design and management.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

Follow these steps to deploy this site on Vercel:

- Link the GitHub repo
  - Go to https://vercel.com/new and import `CreationsXJohnC/jve-capital-investments-website`.
  - Framework will auto-detect as `Next.js`. No extra build config needed.

- Set environment variables (Production and Preview)
  - `RESEND_API_KEY`: Resend API key for the contact form.
  - `NEXT_PUBLIC_YT_CHANNEL_ID`: YouTube channel ID (optional; enables Latest Videos).
  - Use `.env.example` as a reference.

- Email sending
  - For testing, the API uses `onboarding@resend.dev` and will work without domain verification.
  - For production, verify your domain in Resend and update the `from` address in `src/app/api/contact/route.ts`.

- Build and deploy
  - Push to `main` (or your chosen branch); Vercel will build and deploy automatically.
  - A successful local build (`npm run build`) indicates Vercel will build cleanly.

- Post-deploy checks
  - Visit your deployment URL and test the Contact form.
  - Confirm YouTube thumbnails load (we whitelist `i.ytimg.com` in `next.config.ts`).
  - After changing env vars, trigger a redeploy.

Learn more: [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying) and [Vercel docs](https://vercel.com/docs).

## Email Setup (Contact Form)

The contact form submits to `/api/contact` and uses [Resend](https://resend.com) to send emails to `jve.capital@gmail.com`.

- Create a Resend account and generate an API key.
- Add the key to `.env.local` as `RESEND_API_KEY=...`.
- For testing, the sender is `onboarding@resend.dev`. For production, verify your domain and update the `from` address in `src/app/api/contact/route.ts`.
- Restart the dev server after changing `.env.local`.

If you deploy to Vercel:
- Set `RESEND_API_KEY` in Vercel Project Settings → Environment Variables.
- Optionally set `NEXT_PUBLIC_YT_CHANNEL_ID` to enable Latest Videos.
- Redeploy for changes to take effect.

## YouTube Channel Videos

The homepage includes a "Featured Video" and a "Latest Videos" grid sourced from your channel.

- Set your channel ID in `.env.local`:

```
NEXT_PUBLIC_YT_CHANNEL_ID=UCxxxxxxxxxxxxxxxx
```

How to find your channel ID:
- If your channel URL looks like `https://www.youtube.com/channel/UC...`, copy the `UC...` part.
- If your channel URL uses a handle like `https://www.youtube.com/@yourhandle`, open your channel page, view page source, and search for `"channelId"` — it will be the `UC...` value.

Notes:
- After updating `.env.local`, restart the dev server (`npm run dev`).
- In production (e.g., Vercel), set `NEXT_PUBLIC_YT_CHANNEL_ID` in Project Settings → Environment Variables.
- Thumbnails are loaded from `i.ytimg.com` and are whitelisted in `next.config.ts`.
