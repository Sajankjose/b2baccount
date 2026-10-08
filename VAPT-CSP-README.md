# VAPT remediation — Union Bank landing page

Source: Sajankjose/b2baccount. These changes are for the static Union Bank page only.

## Changes
- Moved inline CSS to `styles.css`.
- Moved inline JavaScript to `app.js` (deferred).
- Removed the remaining inline style attribute.
- Removed the ability for visitors to override the account-opening URL via `?openAccountUrl=`, to avoid a user-controlled redirect.
- Added `web.config` with a page-local IIS CSP that does not contain `'unsafe-inline'` or `'unsafe-eval'`.

## Deployment
1. Back up the current `/b2b/unionbank/` directory.
2. Upload `index.html`, `styles.css`, `app.js`, and the existing `assets/` directory together. Ensure `styles.css` and `app.js` receive the correct MIME types.
3. **Before using web.config:** ask IIS/InfoSec whether the CSP originates from IIS, a parent web.config, a load balancer, or a WAF. Apply the policy at the responsible layer and avoid duplicate CSP headers. If IIS controls this directory's headers, install the supplied `web.config` inside that application/directory after testing inheritance.
4. Review permitted origins against any globally injected analytics or tag management scripts. Do **not** simply re-enable `unsafe-inline`.
5. Inspect the actual HTTP response using `curl -I https://www.geojit.com/b2b/unionbank`, including after redirects. Confirm the enforced `Content-Security-Policy` omits `unsafe-inline` and `unsafe-eval`. Inspect *all* CSP headers: multiple policies are enforced together.
6. Verify desktop/mobile layout, feature tabs, logos, images, CTA links and browser console. Re-run the VAPT scan. This patch has not been tested on the production IIS environment.

## Important note
The public page and repository version may differ. This patch is based on the repository source, not on a production export. Compare against the actual production source before replacing deployed files.
