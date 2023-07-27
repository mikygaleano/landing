
import 'tailwindcss/tailwind.css';


function particles (body) {
    for (let i = 0; i < 100; i++) {
        let particulas = document.createElement('div');
        particulas.classList.add('particle');
        document.querySelector(body).append(particulas);
    };
    
};

document.addEventListener('DOMContentLoaded', () => {
    particles('section')
})