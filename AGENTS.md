# Architecture rules

- Derive sitemap URLs from TanStack route metadata using the versioned helper; every route must declare its sitemap inclusion so new public pages are discoverable without maintaining a separate URL list.
- Keep bilingual page metadata in the browser-safe page-metadata module and synchronize existing head tags through the language provider; this keeps titles consistent with the selected language while preserving Portuguese SSR defaults and public URLs.