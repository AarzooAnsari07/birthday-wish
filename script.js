let name = prompt("Enter her name ❤️");
let text = `🎂 Happy Birthday ${name} 🎉`;
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// 💖 Heart Generator
const heartContainer = document.querySelector('.hearts');

setInterval(() => {
    const heart = document.createElement('span');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = Math.random() * 20 + 10 + 'px';
    heartContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}, 300);
