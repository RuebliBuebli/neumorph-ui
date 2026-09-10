# Contributing

Thanks for considering a contribution!

## GitHub flow

All work goes through issues and pull requests:

1. Check the [issues](https://github.com/RuebliBuebli/neumorph-ui/issues) — open one if it doesn't exist yet (feature or bug).
2. Branch from `main` named after the issue: `feat/12-button`, `fix/34-slider-drag`, `docs/…`.
3. Make your change with tests.
4. Open a PR that links the issue (`Closes #N`) and complete the checklist.
5. CI must pass; a maintainer squash-merges.

## Local development

```bash
git clone https://github.com/RuebliBuebli/neumorph-ui.git
cd neumorph-ui
npm install
npm run playground   # visual dev sandbox at localhost:5173
npm test             # vitest
npm run lint         # eslint
npm run lint:css     # stylelint
npm run build        # vite lib build + tsc
```

## Adding a component

1. Create `src/components/<Name>/` with `<Name>.tsx`, `<Name>.css`, `<Name>.test.tsx`, `index.ts` — copy the pattern from an existing component.
2. Re-export from `src/index.ts` and import the CSS there.
3. Add tests (rendering, variants, a11y, keyboard).
4. Add a docs page under `docs/components/<name>.md` and the sidebar entry in `docs/.vitepress/config.ts`.
5. Update `CHANGELOG.md` (Unreleased section).

## Rules of thumb

- **Tokens only** in CSS — no hardcoded colors/shadows/radii.
- Every interactive element: keyboard operable + `:focus-visible` style.
- Respect `prefers-reduced-motion` for all animations.
- Test in **both** light and dark themes.
- Conventional commits: `feat:`, `fix:`, `docs:`, `chore:`, `feat(component):`…