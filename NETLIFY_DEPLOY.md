
# Deployment Guide for Club Chabab Houara

This project is now optimized for professional deployment on **Netlify** and **GitHub Pages**.

## 1. Deploying to Netlify (Recommended)
Netlify will automatically detect the settings from `package.json`.

1. Push your code to a GitHub repository.
2. In Netlify, select **"Import from Git"**.
3. Choose your repository.
4. **Build settings** (should be auto-detected):
   - **Build Command:** `npm run build`
   - **Publish directory:** `dist`
5. **Environment Variables:**
   - Go to **Site Settings > Environment Variables**.
   - Add `API_KEY` with your Google Gemini API key.

## 2. Deploying to GitHub Pages
1. Install the `gh-pages` package if you prefer automated deploys: `npm install gh-pages --save-dev`.
2. Update `vite.config.ts` if your site is not on a custom domain (e.g., change `base: './'` to `base: '/repo-name/'`).
3. Run `npm run build`.
4. Upload the contents of the `dist` folder to your `gh-pages` branch.

## 3. Local Development
To run the site on your computer:
1. `npm install`
2. `npm run dev`
