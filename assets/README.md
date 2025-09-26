# Logo Kit

This package contains optimized logos and favicons for your Quarto website.

## Files

- logo-header-light.png (2000px wide, transparent)
- logo-header-dark.png (2000px wide, transparent)
- logo-header-light.svg
- logo-header-dark.svg

- favicon.ico (multi-resolution: 16px, 32px, 48px)
- favicon-32.png
- favicon-180.png
- favicon-512.png

## Usage in Quarto

In your `_quarto.yml`:

```yaml
website:
  favicon: favicon.ico
  navbar:
    logo: logo-header-light.png   # or logo-header-dark.png depending on your theme
```
