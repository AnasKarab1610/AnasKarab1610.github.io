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
