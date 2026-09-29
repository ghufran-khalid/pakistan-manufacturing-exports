# GitHub Pages setup — manual, not executed

Human authorization is required before repository creation, commits/pushes or Pages activation. Review the candidate, original-code license and citation authors first. Publish only this candidate, never the research workspace. Suggested repository name: `pakistan-manufacturing-exports`; no repository URL is currently assigned.

## Option A: main branch /docs
After approval, copy the candidate dashboard directory into `docs/dashboard/`, preserve a `docs/.nojekyll` file, and select main and /docs in repository Settings → Pages. The dashboard URL ends in /pakistan-manufacturing-exports/dashboard/. This requires a deliberate staging copy; the current dashboard folder cannot itself be selected as a branch publishing folder.

## Option B: dedicated gh-pages branch or Actions
For a branch workflow, place the assessed candidate at the gh-pages branch root, keeping its dashboard/ subdirectory and root .nojekyll. Select gh-pages and /(root) in Pages. This preserves the prepared directory layout and is the recommended simple manual-compatible route. An Actions deployment can instead upload the same static candidate root, but no active workflow is supplied or enabled here.

After authorization and publication, verify the project-subdirectory URL, source links, downloads, relative paths, mobile controls and browser console. Add real repository/research-note URLs only when known; canonical and og:url are deliberately omitted. Do not enable omitted features without a new assessed build.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

Example project URL (replace the placeholder only when known): https://USERNAME.github.io/pakistan-manufacturing-exports/dashboard/
