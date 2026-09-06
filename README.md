# hesamalizadeh.com

The personal website of Hesam Alizadeh — <https://hesamalizadeh.com>.

A hand-written static site: plain HTML, one CSS file, self-hosted fonts,
and a small script for the light/dark theme. No build step or framework.
It deploys to
GitHub Pages from this repository's `master` branch, and can be moved to
any static host (or a VPS running nginx) by copying the folder as-is.

## Structure

```
index.html            Home
about/index.html      About
projects/index.html   Projects
404.html              Not-found page
assets/css/style.css  The entire design system
assets/fonts/         Newsreader + Inter (variable woff2, latin subset, OFL)
assets/images/        Project images
CNAME                 Custom domain (hesamalizadeh.com)
```

## Running locally

Any static file server from the repo root works:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Notes

- Fonts are self-hosted subsets of [Newsreader](https://fonts.google.com/specimen/Newsreader)
  and [Inter](https://fonts.google.com/specimen/Inter), both under the
  SIL Open Font License.
- Historical versions of this site (including the original 2016 website and
  its research photographs) live in this repository's git history.
