function toggleText(element) {
    const servicioTexto = element.nextElementSibling;
    servicioTexto.style.display = servicioTexto.style.display === 'none' ? 'block' : 'none';
  }


  const btnsLeerMas = document.querySelectorAll('.btn-primary');
  btnsLeerMas.forEach(btn => {
    btn.addEventListener('click', () => {
      const cardBody = btn.parentNode;
      const cardParagraph = cardBody.querySelector('.card-paragraph');
      cardParagraph.style.display = 'block';
    });
  });