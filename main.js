
import 'tailwindcss/tailwind.css';


function particles (body) {
    for (let i = 0; i < 100; i++) {
        let particulas = document.createElement('div');
        particulas.classList.add('particle');
        document.querySelector(body).append(particulas);
    };
    
};

function mode () {
    const btn = document.querySelector('.btn');

    if (!btn) {
        console.error('El elemento con la clase "btn" no se encontró en el documento.');
        return;
    }

    btn.addEventListener('click', () => {
        if (btn.textContent === '🌚') {
            btn.textContent = '🌞';
            document.documentElement.classList.add('dark')
        } else {
            btn.textContent = '🌚';
            document.documentElement.classList.remove('dark')
        }
    })

};

function descarga () {
    
    const dowloadInstance = document.createElement('a');
    dowloadInstance.href = './cv.pdf';
    dowloadInstance.target = '_blank';

    document.body.appendChild(dowloadInstance);

    dowloadInstance.click();

    document.body.removeChild(dowloadInstance);
    
};

const btn = document.querySelector('#dowload');

document.addEventListener('DOMContentLoaded', () => {
    particles('section');
    mode();
});

btn.addEventListener('click', descarga);

