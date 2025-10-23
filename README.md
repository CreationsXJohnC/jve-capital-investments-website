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

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Email Setup (Contact Form)

The contact form submits to `/api/contact` and uses [Resend](https://resend.com) to send emails to `jve.capital@gmail.com`.

- Create a Resend account and generate an API key.
- Add the key to `.env.local` as `RESEND_API_KEY=...`.
- For testing, the sender is `onboarding@resend.dev`. For production, verify your domain and update the `from` address in `src/app/api/contact/route.ts`.
- Restart the dev server after changing `.env.local`.

If you deploy to Vercel:
- Set `RESEND_API_KEY` in Vercel Project Settings → Environment Variables.
- Redeploy for changes to take effect.
