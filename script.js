const yearNode = document.getElementById('year');
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const quoteForm = document.getElementById('quoteForm');
const formStatus = document.getElementById('formStatus');

if (quoteForm) {
  quoteForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const details = document.getElementById('details').value.trim();

    if (!name || !email || !service) {
      formStatus.textContent = 'Please complete your name, email and service before sending.';
      formStatus.style.color = '#b84d2a';
      return;
    }

    const subject = encodeURIComponent(`Quote request - ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nService: ${service}\n\nProject brief:\n${details || 'No additional details provided.'}`
    );

    window.location.href = `mailto:anudroneservices@gmail.com?subject=${subject}&body=${body}`;

    formStatus.textContent = 'Your email client is opening with the request details.';
    formStatus.style.color = '#1d6b4f';
    quoteForm.reset();
  });
}
