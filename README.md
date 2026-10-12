# tamaralynne.github.io

Portfolio site for Tamara Lynne: theatre, visual art, and presentations.
Built with Jekyll and hosted free on GitHub Pages at https://tamaralynne.github.io

## Where things live

| What | Where |
|---|---|
| Menu | `_data/navigation.yml` |
| Home, About, Presentations, Contact | `index.md`, `about.md`, `presentations.md`, `contact.md` |
| Each theatre or visual art piece | one file in `_projects/` (its `section` field picks the page) |
| Images | `assets/images/projects/`, `assets/images/visual-art/`, `assets/images/site/` |
| Styles | `assets/css/site.css` |
| Gallery slideshow | `_includes/gallery.html` + `assets/js/gallery.js` |
| Editor (Pages CMS) setup | `.pages.yml` |

## Adding a piece of work

Copy a file in `_projects/`, rename it (lowercase-with-hyphens.md), and edit
the fields at the top. Images go in the matching `assets/images/` folder.
Or use Pages CMS at https://app.pagescms.org for a form-based editor.

## Images

Resize originals to about 2000px on the long side before uploading.
Keep each file under a few MB.
