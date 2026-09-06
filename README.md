# hesamalizadeh.com

The personal website of Hesam Alizadeh — <https://hesamalizadeh.com>.

A hand-written static site: plain HTML, one CSS file, self-hosted fonts.
No build step, no framework, no client-side JavaScript. It deploys to
GitHub Pages from this repository's `master` branch, and can be moved to
any static host (or a VPS running nginx) by copying the folder as-is.

## Structure

```
index.html            Home
about/index.html      About
projects/index.html   Projects
writing/index.html    Writing
404.html              Not-found page
assets/css/style.css  The entire design system
assets/fonts/         Newsreader + Inter (variable woff2, latin subset, OFL)
assets/images/        Optimized project photographs
CNAME                 Custom domain (hesamalizadeh.com)
```

## Running locally

Any static file server from the repo root works:

```sh
python3 -m http.server 8000
# → http://localhost:8000
```

## Adding a piece of writing

Create a directory under `writing/` with an `index.html` inside
(copy an existing page as the template), give it a unique `<title>`
and canonical URL, and add a link to it from `writing/index.html`.
No rebuild needed — the page is the content.

## Notes

- Fonts are self-hosted subsets of [Newsreader](https://fonts.google.com/specimen/Newsreader)
  and [Inter](https://fonts.google.com/specimen/Inter), both under the
  SIL Open Font License.
- The Persian verse widget on the Writing page is provided by
  [Ganjoor](https://ganjoor.net/) and loads remotely; everything else is local.
- Historical versions of this site (including the original 2016 website and
  its research photographs) live in this repository's git history.
