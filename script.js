// Simple helpers for the site
document.addEventListener('DOMContentLoaded', function () {
  // set copyright year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // booking form placeholder button handler if present
  const bookingBtn = document.getElementById('booking-form-btn');
  if (bookingBtn) bookingBtn.addEventListener('click', function (e) {
    e.preventDefault();
    alert('Booking form is being set up. For now please use WhatsApp: +233 599 966 149');
  });
});
