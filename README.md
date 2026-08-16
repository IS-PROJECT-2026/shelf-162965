# Shelf-162965

A quiet reading site for public domain books. Shelf presents classic literature without adverts, pagination, accounts, or tracking, with typography chosen for sustained on-screen reading.

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
| CSS3 | Custom properties, Grid, and Flexbox |
| JavaScript (ES6) | Genre filtering and reader controls, no dependencies |
| Git and GitHub | Version control, issue tracking, pull request workflow |
| GitHub Pages | Static hosting, deployed from `main` |

No frameworks, no build step, no package manager. Every file served is a file in this repository.

## Project structure

    index.html          Landing page
    catalogue.html      Filterable book grid
    book.html           Book detail page
    reader.html         Reader view with controls
    about.html          About the project
    css/
      variables.css     Design tokens, light and dark
      reset.css         Normalisation and base typography
      layout.css        Containers, grid, and spacing utilities
      components.css    Header, footer, cards, buttons, reader
    js/
      filter.js         Genre filtering
      reader.js         Font sizing and theme toggle
    evidence/           Merge conflict documentation
    submission.md       Written assessment

## Running locally

    git clone https://github.com/IS-PROJECT-2026/shelf-162965.git
    cd shelf-162965

Open `index.html` in a browser, or serve it:

    python -m http.server 8000

Then visit `http://localhost:8000`.

## Development workflow

Development followed a feature branch workflow with `main` protected against direct commits. Work was planned as three milestones broken into nineteen issues tracked on a Kanban board. Every change reached `main` through a pull request referencing its issue, using Conventional Commits throughout.

Branch naming follows `feat/`, `fix/`, `docs/`, `style/`, and `chore/` prefixes with the issue number and a short description, for example `feat/11-add-genre-filter-controls`.

## Attribution

All texts are sourced from [Project Gutenberg](https://www.gutenberg.org) and are in the public domain. Book covers are rendered in CSS rather than reproduced from published editions.

## Author

Simplicious Wachira, admission number 162965, Group 4E  
BSc Informatics and Computer Science, Strathmore University
