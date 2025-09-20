// ===============================
// Mensagem inicial
// ===============================
window.addEventListener('load', () => {
  console.log('Bem-vindo ao currículo de Fernanda Vilassa!');
});

// ===============================
// Cálculo de idade dinâmico
// ===============================
function calculateAge(birthDate) {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
}

const birthDate = '1984-03-12'; // Data de nascimento: 12 de março de 1984
const ageElement = document.getElementById('age');
if (ageElement) {
  ageElement.innerText = `${calculateAge(birthDate)} anos`;
}

// ===============================
// Atualizar ano do rodapé
// ===============================
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ===============================
// Destaque da seção ativa no menu
// ===============================
const navLinks = document.querySelectorAll('.site-nav a');

function highlightSection() {
  let currentSection = '';

  document.querySelectorAll('main section').forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('is-active');
    if (link.getAttribute('href') === `#${currentSection}`) {
      link.classList.add('is-active');
    }
  });
}

window.addEventListener('scroll', highlightSection);

// ===============================
// Acessibilidade: foco visível só com teclado
// ===============================
function handleFirstTab(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('show-focus');
    window.removeEventListener('keydown', handleFirstTab);
  }
}
window.addEventListener('keydown', handleFirstTab);
