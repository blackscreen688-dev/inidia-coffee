// Toggle nav (mobile)
document.getElementById('nav-toggle').addEventListener('click', ()=> {
  const nav = document.getElementById('nav');
  nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
});

// Set year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Simple fake submit (ganti endpoint dengan Formspree atau backend)
document.getElementById('contact-form').addEventListener('submit', async (e)=>{
  e.preventDefault();
  alert('Form dikirim (contoh). Ganti ini dengan fetch ke endpoint server/Formspree.');
});