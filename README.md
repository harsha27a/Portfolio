# Harsha Kumari — Portfolio

Personal portfolio site built with Next.js 14, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

If you see errors after pulling changes, clear the cache and restart:

```bash
rm -rf .next
npm run dev
```

On Windows PowerShell:

```powershell
Remove-Item -Recurse -Force .next
npm run dev
```

## Deploy to Vercel (free)

1. Push this folder to a GitHub repository (see below).
2. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
3. Import your repository.
4. Vercel auto-detects Next.js — click **Deploy** (no extra settings needed).
5. Your site will be live at a `*.vercel.app` URL.

## Upload to GitHub

From this folder (`portfolio-nextjs`):

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/harsha27a/YOUR-REPO-NAME.git
git push -u origin main
```

Create an empty repo first on [GitHub](https://github.com/new) (no README), then replace `YOUR-REPO-NAME` with your repo name.

## Project structure

```
app/           pages and layout
components/    UI sections
lib/content.ts editable text and links
public/        images and resume PDF
```

## Edit your info

Update links, skills, projects, and experience in `lib/content.ts`.

Resume PDF lives at `public/Harsha_Kumari_Resume.pdf`.
