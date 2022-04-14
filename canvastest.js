const canvas = document.querySelector("#canvas1");
const ctx = canvas.getContext('2d');
canvas.width = 900;
canvas.height = 600;
const numberOfPArticles = 200;
let particlesArray= [];

class Particle {
    constructor() {
        this.x = Math.random * canvas.width;
        this.y=
    }
}