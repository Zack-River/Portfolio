I approve the recommended architecture:

**Remove Service Worker + implement build-time static HTML generation.**

However, implement it carefully according to the following constraints.

## 1. Service Worker removal

Remove `vite-plugin-pwa` completely:

* Remove the dependency from `package.json`.
* Remove `VitePWA` from `vite.config.ts`.
* Remove the application's normal SW registration/integration.
* Ensure the new build no longer produces `sw.js` or Workbox precache assets.

### Existing users

Because previous deployments may already have the old service worker installed, add a small one-time cleanup mechanism that:

* detects existing registrations for this site's origin
* unregisters them
* does not introduce a new service worker
* does not interfere with normal browser HTTP caching
* does not run unnecessary work after the old registration is gone

Do NOT clear unrelated browser storage.

Do NOT add localStorage/sessionStorage just to track cleanup unless there is a compelling reason.

## 2. Static project HTML generation

Implement the approved custom build-time generation approach.

The desired output is:

```text
dist/
  index.html
  about/
    index.html
  services/
    index.html
  projects/
    index.html
    streamflow/
      index.html
    ding/
      index.html
    ...
```

At minimum, generate physical HTML for every valid project route.

Do NOT generate HTML for nonexistent projects.

## 3. Source of truth

Before implementing the generator, inspect how project data is exported.

Do NOT parse TypeScript using fragile regex if it can be avoided.

Prefer importing/reusing the existing project data safely.

If importing `constants.ts` directly from Node is not practical because of TypeScript/React/browser-only dependencies, stop and report the issue rather than introducing a fragile parser.

Do NOT duplicate project metadata manually in two unrelated files unless absolutely necessary.

The project data should ideally have one source of truth.

## 4. Metadata

For each generated project HTML file, inject the project's actual metadata into the raw `<head>`:

* `<title>`
* `<meta name="description">`
* `<link rel="canonical">`
* `og:title`
* `og:description`
* `og:url`
* `og:type`
* `og:image` when a valid image exists

Use:

```text
https://www.zackriver.com/projects/${project.id}
```

for the canonical and `og:url`.

Do NOT invent descriptions, images, or project facts.

## 5. Preserve React functionality

The generated HTML must remain compatible with the existing React application.

Do NOT:

* rewrite the application architecture
* duplicate the entire React page into static HTML
* remove React Router
* remove Helmet
* remove existing client-side metadata handling
* break animations
* break GSAP/Three.js/WebGL
* change the visual design

React should still hydrate/render the project normally after the initial HTML is delivered.

## 6. Avoid metadata duplication problems

The generated raw HTML will contain project metadata.

The existing React Helmet will also execute client-side.

Make sure this does NOT result in persistent duplicate `<title>`, canonical, or OG tags after React loads.

If Helmet already replaces the generated tags correctly, keep the existing implementation.

Do not create a second competing metadata system.

## 7. Vercel routing verification

This is critical.

After generation, verify that:

```text
/projects/streamflow
```

actually resolves to:

```text
/projects/streamflow/index.html
```

before falling through to:

```text
/(.*) -> /index.html
```

Do not assume this behavior.

Test the actual production deployment if possible.

Verify the raw HTTP response with something equivalent to:

```bash
curl -s https://www.zackriver.com/projects/streamflow
```

and confirm the response contains Streamflow-specific:

* title
* description
* canonical
* og:title
* og:description
* og:url
* og:image

Also test at least one other project.

## 8. SPA fallback

Ensure the SPA still works for:

* `/`
* `/about`
* `/services`
* `/projects`
* `/projects/streamflow`
* another valid project
* `/projects/does-not-exist`

Do not remove the SPA fallback because static project HTML now exists.

## 9. 404 behavior

Do NOT attempt to solve the HTTP 404 architecture in this task.

Keep the existing client-side "Project Not Found" + `noindex` behavior.

Document that the SPA fallback still produces HTTP 200 for nonexistent routes if that remains true.

## 10. Cache strategy

Do NOT modify `vercel.json` cache headers unless testing proves a problem.

Desired behavior:

* hashed JS/CSS/assets → long-lived immutable caching
* HTML → fresh/revalidated
* sitemap → fresh/revalidated
* robots.txt → fresh/revalidated
* Google verification HTML → directly accessible
* images → safe normal caching

Do not introduce aggressive HTML caching.

## 11. Google Search Console verification

Make absolutely sure the existing Google verification file remains directly accessible.

The SPA rewrite must NOT swallow it.

Test:

```text
https://www.zackriver.com/googleaaf8fa4ec4c7a91c.html
```

and confirm it returns the actual verification file rather than `index.html`.

Do not rename or remove it.

## 12. Build

Update the build process only as necessary.

Run:

```bash
npm run build
```

Confirm:

* build succeeds
* generated project HTML exists
* no unexpected service worker files exist
* no broken imports
* no TypeScript/build errors

## 13. Search the final build

Inspect `dist/` and confirm:

* project HTML files exist for every valid project
* each generated project HTML has the correct metadata
* no project HTML accidentally contains another project's metadata
* no `sw.js` remains
* no Workbox precache manifest remains

## 14. Important scope restrictions

Do NOT:

* migrate to Next.js
* add SSR
* add Vercel middleware
* add a database
* add localStorage
* add IndexedDB
* add API caching
* add a PWA
* start Phase 3
* add blog pages
* perform keyword research
* invent project content
* redesign the UI
* refactor unrelated code

## 15. Final verification report

After implementation, report:

### Service Worker

* removed?
* old-client cleanup implemented?
* generated SW files gone?

### Static generation

* generator location
* number of project pages generated
* source of project data

### Metadata

For at least 2 projects, show the generated raw values for:

* title
* description
* canonical
* OG title
* OG description
* OG URL
* OG image

### Routing

* direct project URL test
* SPA navigation test
* nonexistent project test

### Google

* verification file test
* sitemap test
* robots.txt test

### Build

* `npm run build` result

### Caching

* confirm no unnecessary cache-header changes were introduced

If anything unexpected occurs, STOP and report it instead of improvising a workaround.

Do not begin Phase 3.
