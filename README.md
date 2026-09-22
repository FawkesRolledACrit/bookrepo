# Monuments website

A static landing page for *Monuments* by Morgan Fawkes.

## Current status

The site is intentionally static and can be hosted free with GitHub Pages. The signup form is connected to Formspree and should be tested before launch.

## Add the real cover

The final cover is installed at `assets/monuments-cover.jpg` and displayed with descriptive alt text. Keep the image optimized if a smaller web-specific version is created later.

## Configure the signup form

The form currently points to:

```text
https://formspree.io/f/YOUR_FORM_ID
```

Create a form with a reputable provider such as Formspree, replace `YOUR_FORM_ID` in `index.html`, and test it before publishing. Collect only what is needed: email, optional name, format preference, and the review acknowledgment.

A free copy should be delivered as an EPUB or through a clearly explained retailer promotion. Do not promise an individualized Amazon download unless the delivery method actually supports it.

The review language is intentionally non-binding: a free copy may be offered, but readers must be free to leave an honest review or no review at all. Never require a positive rating.

## Deploy with GitHub Pages

1. Push the repository to GitHub.
2. In **Settings → Pages**, choose **Deploy from a branch**.
3. Select the default branch and `/ (root)`.
4. Save and wait for the Pages URL to become active.
5. The included `CNAME` file configures `monumentsbook.win`.

## DNS

At the domain registrar, add the GitHub Pages records shown in the repository's Pages settings. GitHub commonly uses four A records for the apex domain and a CNAME for `www`, but use GitHub's current official values rather than copying stale instructions.

Enable HTTPS in Pages after DNS resolves.

## Local preview

From this directory, serve the files with any static server. For example, if Python is installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Before launch

- Replace the form endpoint.
- Add the final cover and alt text.
- Add a privacy page or clear privacy notice.
- Add the final Amazon link when the book is live.
- Test the form on mobile and desktop.
- Test keyboard navigation and visible focus states.
- Check the site with JavaScript disabled; the form should still submit normally to the provider.
- Confirm domain HTTPS is active.
