const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const SPRITE_WIDTH = 575
const SPRITE_HEIGTH = 523

let frameX = 1;
let frameY = 5;
let gameFrame = 0;
const staggerFrames = 7;

const playerImage = new Image();
playerImage.src = "Assets/shadow_dog.png";

function animationLoop() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    ctx.drawImage(playerImage, frameX * SPRITE_WIDTH, frameY * SPRITE_HEIGTH, SPRITE_WIDTH, SPRITE_HEIGTH,
        0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    if (gameFrame % staggerFrames == 0) {
        frameX = (frameX + 1) % 6
    }

    gameFrame++;
    requestAnimationFrame(animationLoop);
};
animationLoop();
