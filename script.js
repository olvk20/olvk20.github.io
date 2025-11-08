const text1 = "Hey, I'm Aleksander";
const text2 = "14-year-old developer from Poland 🇵🇱";
const element1 = document.getElementById("typewriter");
const element2 = document.getElementById("typewriter-sub");
let index1 = 0;
let index2 = 0;

function typeWriter1() {
    if (index1 < text1.length) {
        element1.innerHTML = text1.substring(0, index1 + 1) + '<span style="border-right: 3px solid #90EE90; animation: blink 0.75s step-end infinite;">|</span>';
        index1++;
        setTimeout(typeWriter1, 100);
    } else {
        element1.innerHTML = text1;
        setTimeout(typeWriter2, 500);
    }
}

function typeWriter2() {
    if (index2 < text2.length) {
        element2.innerHTML = text2.substring(0, index2 + 1) + '<span style="border-right: 3px solid #b0b0b0; animation: blink 0.75s step-end infinite;">|</span>';
        index2++;
        setTimeout(typeWriter2, 80);
    } else {
        element2.innerHTML = text2 + '<span style="border-right: 3px solid #b0b0b0; animation: blink 0.75s step-end infinite;">|</span>';
    }
}

window.addEventListener('load', function() {
    setTimeout(typeWriter1, 500);
});

const style = document.createElement('style');
style.textContent = `
    @keyframes blink {
        0%, 50% { opacity: 1; }
        51%, 100% { opacity: 0; }
    }
`;
document.head.appendChild(style);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});