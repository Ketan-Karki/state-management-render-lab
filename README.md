# State management render lab

A single-page React app that visualizes **component trees** as nested blocks, each showing a live **render count (`R`)** and a short **flash on every render**. Use it to compare **colocated `useState`**, **Context vs prop drilling**, and **Redux + `useSelector`** in isolation and see how render cost differs.

Stack: **Vite**, **React**, **TypeScript**, **Redux Toolkit**, **react-redux**.

## Scenarios (tabs)

1. **Local state** — Counter `useState` in the left branch vs **lifted** to `Parent`. Toggle colocated / lifted and watch which nodes’ `R` move when you increment.
2. **Context vs props** — Same shape: **Ctx** (provider + memo middle + consuming leaf) vs **Prop** (value threaded as props). Bump the shared value and compare **Mid**’s render count between modes.
3. **Store** — **Fine** selectors (`lab3.a` / `lab3.b`) vs **Wide** (whole `lab3` object). Dispatch **A** / **B** and see which leaves re-render; **Reset** clears the slice.

## Render counts

- **`R`** increments once per **render function execution** for that component (see `useRenderCounter`).
- **`React.StrictMode` is off** in `src/main.tsx` so development counts stay easy to interpret.
- Keep **decorative UI state out of the same components that display `R`** — extra `useState` there would inflate counts and break the experiment.

## Scripts

| Command        | Description              |
| -------------- | ------------------------ |
| `npm run dev`  | Dev server with HMR      |
| `npm run build`| Typecheck + production build to `dist/` |
| `npm run preview` | Serve `dist` locally  |
| `npm run lint` | ESLint                   |

## GitHub Pages

The repo includes [`.github/workflows/deploy-github-pages.yml`](.github/workflows/deploy-github-pages.yml): on push to `main` or `master` it runs `npm ci` and `npm run build`, then deploys **`dist/`** via GitHub Pages.

1. **Settings → Pages → Build and deployment**: source **GitHub Actions** (not “Deploy from a branch” pointing at `/` or `/docs` unless you intend that).
2. First run may need **Settings → Actions → General**: allow workflows read/write for Pages.

If the site is served from a **repository subpath** (e.g. `https://user.github.io/state-management/`), set the Vite [`base`](https://vite.dev/config/shared-options.html#base) in `vite.config.ts` (e.g. `base: '/state-management/'`) so asset URLs resolve.

## Project layout

```
src/
  App.tsx                 # Tab shell
  scenarios/              # One demo per tab
  ui/NodeBlock.tsx        # Nested blocks + R + pulse
  render/useRenderCounter.ts
  store/                  # Redux slice for the store tab only
```

## License

Private / learning use unless you add a license.
