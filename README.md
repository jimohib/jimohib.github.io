# Welcome to my website

**URL**: https://jimohib.github.io

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How to deploy this project?

### 1. Clone this repository to your local machine
```sh
git clone https://github.com/<your-username>/<repository-name>.git
cd <repository-name>
```

### 2. Install all dependencies and build locally
Make sure you have all packages installed locally:
```sh
npm install
```
(Ensure your Node.js version is updated. If your version is below 14.18, you should update Node.js)

Build locally for production:
```sh
npm run build
```
- This command generates a `dist` folder containing optimized, static files (HTML, CSS, JS) suitable for deployment.

### 3. Test build locally

To ensure the build is working:
```sh
npm install -g serve
serve -s dist
```
- Open the local URL (as provided) in your browser
- If everything works correctly, you're ready to deploy

### 4. Deploy to GitHub pages via `docs/` folder

Create a `docs` folder at the root of your repository and copy files from `dist` into `docs`:
```sh
cp -r dist/* docs/
```
Commit and Push:
```sh
git add docs
git commit -m "Add production build to docs folder"
git push
```
Configure GitHub pages:

- Go to settings in your repository on GitHub.
- Scroll down to Pages.
- Select the main branch (or whichever your default branch is) under the Branch dropdown, then select the /docs folder.
- Click save.
- GitHub will now build and host your site from the `docs` folder. It may take a few minutes for the changes to effect.
