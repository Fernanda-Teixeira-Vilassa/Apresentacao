window.addEventListener('load', () => {
    console.log('Bem-vindo ao currículo de Fernanda Vilassa!');
});

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
const age = calculateAge(birthDate);
document.getElementById('age').innerText = `${age} anos`;