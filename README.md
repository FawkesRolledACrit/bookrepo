# Monuments website

A static author and book website for *Monuments* by M. Fawkes.

## Site structure

- `index.html` — themed landing page and reader-copy signup form
- `the-book.html` — synopsis, genre positioning, reader fit, content notes, and release status
- `about.html` — author biography and contact information
- `press.html` — press kit, cover download, book copy, and media contact
- `sample.html` — the complete first chapter, styled with the embedded MyUnderwood book font
- `privacy.html` — form privacy information
- `sitemap.xml` and `robots.txt` — search-engine discovery files

## Current status

The site is static and can be hosted free with GitHub Pages. The signup form is connected to Formspree and should be tested before launch.

## Cover and author identity

The final cover is installed at `assets/monuments-cover.jpg` and displayed with descriptive alt text. The book-style MyUnderwood font is embedded at `assets/MyUnderwood.ttf` for the first-chapter reading page. The public author name is **M. Fawkes**. Keep that name consistent across the website, retailer metadata, social profiles, and future promotional material.

## Configure the signup form

The form currently points to:

```text
https://formspree.io/f/mqpaqbje
```

Test the form on desktop and mobile before launch. Collect only what is needed: email, optional name, format preference, and the review acknowledgment.

A free copy should be delivered as an EPUB or through a clearly explained retailer promotion. Do not promise an individualized Amazon download unless the delivery method actually supports it.

The review language is intentionally non-binding: a free copy may be offered, but readers must be free to leave an honest review or no review at all. Never require a positive rating.

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose the configured GitHub Actions workflow.
3. Wait for the deployment workflow to complete.
4. The included `CNAME` file configures `monumentsbook.win`.
5. Enable HTTPS after DNS resolves.

## DNS

At the domain registrar, add the GitHub Pages records shown in the repository's Pages settings. GitHub commonly uses four A records for the apex domain and a CNAME for `www`, but use GitHub's current official values rather than copying stale instructions.

## SEO checklist

- Verify `https://monumentsbook.win/` in Google Search Console.
- Submit `https://monumentsbook.win/sitemap.xml`.
- Verify the domain in Bing Webmaster Tools and submit the same sitemap.
- Replace the final-review status and add the retailer link when the book is live.
- Update the structured book metadata if the release date, ISBN, or retailer URL becomes available.

## Local preview

From this directory, serve the files with any static server. For example, if Python is installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Before launch

- Test the Formspree submission and notification email.
- Test every navigation link on desktop and mobile.
- Test keyboard navigation and visible focus states.
- Check the site with JavaScript disabled; the form should still submit normally to Formspree.
- Confirm domain HTTPS is active.
- Add the final Amazon link and release date to `the-book.html` and `index.html`.
