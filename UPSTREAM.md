# Upstream and review

- Source: https://github.com/DefinitelyTyped/DefinitelyTyped/tree/fbc33dd3590c31aa653079082d22500c9a191e65/types/is-empty
- Published baseline: `@types/is-empty@1.2.3` (2023-11-07T08:01:26.622Z).
- Upstream tarball integrity: `sha512-4J1l5d79hoIvsrKh5VUKVRA1aIdsOb10Hu5j3J2VfP/msDnfTdGPmNp2E1Wg+vs97Bktzo+MZePFFXSGoykYJw==`.
- `index.d.ts` was compared byte-for-byte with that commit and matched before maintenance changes.
- This standalone snapshot repository preserves original source content, contributors and license, but does **not** claim to preserve the DefinitelyTyped monorepo Git history.
- Only original-parent direct dependencies are in scope; dependencies of this declaration package are not recursively forked.

## Issue review

GitHub search on 2026-09-29 used `repo:DefinitelyTyped/DefinitelyTyped is:issue is:open "is-empty"` and the corresponding closed query. Counts: open: 4 results (collected 4), closed: 73 results (collected 73). Search results can contain unrelated packages; they are not evidence that every result is a defect here. Archived search responses and baseline comparisons are retained in the release research evidence. No issue was posted or modified.

Search matches were unrelated declarations such as cookie-session, nightwatch, yup, and missing packages; no is-empty-specific defect was identified.

## Validation

Real declaration usage and negative type assertions are compiled with TypeScript 4.5.5 and 5.9.3, with `strict: true` and `skipLibCheck: false`, from source and isolated direct/alias tarball installs. CI also checks the complete dependency audit, CodeQL, package contents and exact CI archive identity before GitHub-only publication. Registry verification compiles direct and aliased installs rather than importing these type-only packages as JavaScript.
