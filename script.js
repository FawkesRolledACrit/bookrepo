const form = document.querySelector('#copy-form');
const success = document.querySelector('#form-success');
const error = document.querySelector('#form-error');

if (form) {
  form.addEventListener('submit', async (event) => {
    // Keep this handler quiet until the Formspree endpoint is replaced.
    if (form.action.includes('YOUR_FORM_ID')) return;
    event.preventDefault();
    success.hidden = true;
    error.hidden = true;
    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' }
      });
      if (!response.ok) throw new Error('Request failed');
      form.reset();
      success.hidden = false;
    } catch (requestError) {
      error.hidden = false;
    }
  });
}
