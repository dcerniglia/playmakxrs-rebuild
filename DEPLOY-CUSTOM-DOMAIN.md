# Deploying to GitHub Pages with a Custom GoDaddy Domain

The project already has a GitHub Pages deployment workflow (`.github/workflows/deploy.yml`) that auto-deploys on push to `main`. The steps below configure it to use a custom domain.

## Step 1: Get the Custom Domain

Get the exact domain from the client (e.g., `playmakxrs.com`).

## Step 2: Update Astro Config

In `astro.config.mjs`, update `site` and `base`:

```js
site: 'https://yourcustomdomain.com',
base: '/',
```

Remove the production conditional for `base` — with a custom domain, no subdirectory is needed.

## Step 3: Add a CNAME File

Create `public/CNAME` with just the domain:

```
yourcustomdomain.com
```

Astro copies `public/` contents to the build output, so GitHub Pages will pick it up.

## Step 4: Configure DNS at GoDaddy

The client needs to log into GoDaddy and add these DNS records.

**For the apex domain** (e.g., `playmakxrs.com`):

| Type | Name | Value             |
| ---- | ---- | ----------------- |
| A    | @    | `185.199.108.153` |
| A    | @    | `185.199.109.153` |
| A    | @    | `185.199.110.153` |
| A    | @    | `185.199.111.153` |

**For the `www` subdomain** (recommended):

| Type  | Name | Value                    |
| ----- | ---- | ------------------------ |
| CNAME | www  | `dcerniglia.github.io`   |

## Step 5: Enable Custom Domain in GitHub Repo Settings

1. Go to **github.com/dcerniglia/playmakxrs-rebuild** > **Settings** > **Pages**
2. Under **Custom domain**, enter the domain (e.g., `playmakxrs.com`)
3. Click **Save**
4. Check **Enforce HTTPS** (may take a few minutes after DNS propagates)

## Step 6: Push Changes

Push the code changes (Steps 2 & 3) to `main`. The existing GitHub Actions workflow will automatically build and deploy.

## Notes

- DNS propagation from GoDaddy typically takes a few minutes to a few hours, but can take up to 48 hours.
- HTTPS certificate provisioning by GitHub usually follows shortly after DNS resolves.
