# tryhexbox.com

## Google Drive callback deployment

`public/callback.html` and `public/callback.js` implement the HexBox connection-code
page. Vite copies them to the site root. Serve the HTML directly at the exact
registered redirect URI `https://tryhexbox.com/callback`, without a redirect that
could forward code/state to another URL. The script runs in the head to remove
the query from history immediately, then displays `hexbox-google-v1.` followed
by unpadded Base64URL of UTF-8 JSON containing exactly `{code,state}`.

The page rejects denial, duplicate/missing/malformed parameters, and responses
larger than 16 KiB. It has no analytics, third-party assets, network exchange,
appliance address, or automatic posting. Clipboard denial selects the code for
manual copying. Keep this callback outside the marketing React application and
exclude it from any analytics, script injection, or code-bearing error reporting.

The current workflow deploys to GitHub Pages, which does not support arbitrary
HTTP response headers or configurable access-log query redaction. Before release,
configure the hosting/CDN or reverse proxy to serve `/callback` and `/callback.js`
with these headers (including error responses), and omit callback query strings
from all origin/CDN/proxy/error logs:

```text
Cache-Control: no-store
Referrer-Policy: no-referrer
Content-Security-Policy: default-src 'none'; script-src 'self'; style-src 'unsafe-inline'; img-src 'self'; connect-src 'none'; base-uri 'none'; form-action 'none'; object-src 'none'; frame-ancestors 'none'
X-Content-Type-Options: nosniff
```

HTML meta policies provide partial defense but cannot enforce `no-store`,
`frame-ancestors`, or logging policy. This hosting configuration remains a release
dependency. The hosting origin receives the initial code/state; the PKCE verifier
stays on the appliance. Neither client secrets nor refresh tokens reach this page.

Manual verification after deployment:

1. Open `/callback?code=example&state=example-state`. The address bar should
   immediately lose its query, and the copyable value should begin with
   `hexbox-google-v1.`. Denying clipboard access must allow manual selection.
2. Open `/callback?error=access_denied&state=example-state`, then try missing,
   duplicate and malformed parameters. Each must show a safe start-again message
   with no copyable result or success heading.
3. Check deployed HTTP headers, absence of third-party requests and analytics,
   and redacted hosting logs. Use a real non-production Google account to complete
   the sign-in/code-paste flow on an appliance before release.

## Frontend template notes

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
