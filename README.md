# Shelf-162965

A quiet reading site for public domain books. Shelf presents classic
literature without adverts, pagination, accounts, or tracking, with
typography chosen for sustained on-screen reading.

**Live site:** https://is-project-2026.github.io/shelf-162965/

---

## What it does

- **Catalogue** of six public domain works, filterable by genre
- **Book detail pages** with synopsis and publication metadata
- **Reader view** set at a measure of roughly sixty-five characters
- **Font size stepper** with bounded increments for reading comfort
- **Light and dark themes**, switched through the design token layer
- **Keyboard accessible** throughout, with skip links and visible focus states

## Technologies

| Technology | Purpose |
|---|---|
| HTML5 | Semantic document structure and landmarks |
| CSS3 | Custom properties, Grid, Flexbox, container queries |
| JavaScript (ES6) | Genre filtering and reader controls, no dependencies |
| Git and GitHub | Version control, issue tracking, pull request workflow |
| GitHub Pages | Static hosting, deployed from `main` |

No frameworks, no build step, no package manager. Every file served is a
file in this repository.

## Project structure
index.html Landing page
catalogue.html Filterable book grid
book.html Book detail page
reader.html Reader view with controls
about.html About the project
css/
variables.css Design tokens, light and dark
reset.css Normalisation and base typography
layout.css Containers, grid, and spacing utilities
components.css Header, footer, cards, buttons, reader
js/
filter.js Genre filtering
reader.js Font sizing and theme toggle
evidence/ Merge conflict documentation
submission.md Written assessment
