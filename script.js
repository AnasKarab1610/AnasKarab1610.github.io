
AOS.init({
duration:1000,
});


const cards = document.querySelectorAll(".card");
let current = 0;
function updateCards() {
  cards.forEach((card, i) => {
    card.classList.remove("active", "prev", "next");
    if (i === current) {
      card.classList.add("active");
    } else if (i === (current + 1) % cards.length) {
      card.classList.add("next");
    } else if (i === (current - 1 + cards.length) % cards.length) {
      card.classList.add("prev");
    }
  });
}
setInterval(() => {
  current = (current + 1) % cards.length;
  updateCards();
}, 3000);
updateCards();


document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => {
    if (item.classList.contains('active')) {
      item.classList.remove('active');
      item.classList.add('closing');

      setTimeout(() => {
        item.classList.remove('closing');
      }, 400);
    } else {
      item.classList.add('active');
    }
  });
});


window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 80) {
    navbar.classList.add('shrink');
  } else {
    navbar.classList.remove('shrink');
  }
});


  emailjs.init("mbYmnfOm_TAt-7Oh5");

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    emailjs.sendForm('service_alcn5c3', 'template_3xid6l6', this)
      .then(function() {
        alert('تم إرسال الرسالة بنجاح!');
        form.reset();
      }, function(error) {
        alert('حصل خطأ، حاول مرة أخرى.');
        console.error('Error:', error);
      });
  });