# @stackline/types-is-empty

Maintained TypeScript declaration fork of `@types/is-empty@1.2.3`. This package supplies declarations, not JavaScript runtime code. The original declarations, contributors and MIT license are retained; focused changes are listed in [CHANGELOG.md](CHANGELOG.md).

```sh
npm install --save-dev @stackline/types-is-empty@1.0.0
# Keep existing type imports and automatic @types discovery:
npm install --save-dev @types/is-empty@npm:@stackline/types-is-empty@1.0.0
```

For direct installation, use `@stackline/types-is-empty` in type imports, or in `compilerOptions.types` for Jest globals. Aliasing to `@types/is-empty` preserves the upstream module names. Requires TypeScript 4.5 or newer, subject to the dependencies selected by your lockfile. No library runtime engine requirement is introduced. Development tooling uses Node.js24.

[Source and issue review](UPSTREAM.md) · [Issues](https://github.com/alexandroit/stackline-types-is-empty/issues) · [npm](https://www.npmjs.com/package/@stackline/types-is-empty) · [Stackline](https://alexandro.net/)

## Original package documentation

# Installation
> `npm install --save @types/is-empty`

# Summary
This package contains type definitions for is-empty (https://github.com/ianstormtaylor/is-empty).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/is-empty.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/is-empty/index.d.ts)
````ts
/**
 * Test if a value is empty
 */
declare function isEmpty(value?: any): boolean;

export = isEmpty;

````

### Additional Details
 * Last updated: Tue, 07 Nov 2023 03:09:37 GMT
 * Dependencies: none

# Credits
These definitions were written by [Stanislav Termosa](https://github.com/termosa).
