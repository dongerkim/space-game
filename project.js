var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);

// Load the background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
  // show the background image
  bgReady = true;
};
bgImage.src = "images/spacebackground.png";

// Load the hero image
var heroReady = false;
var heroImage = new Image();
heroImage.onload = function () {
  // show the background hero
  heroReady = true;
};
heroImage.src = "images/hero.png";

//load met
var met1Ready = false;
met1Image = new Image();
met1Image.onload = function () {
  // show the meteor image
  met1Ready = true;
};
met1Image.src = "images/met1.png";

let met1Y = -25;
let met1X = Math.floor(Math.random() * (canvas.width - 50));

//load met 2
var met2Ready = false;
met2Image = new Image();
met2Image.onload = function () {
  // show the meteor image
  met2Ready = true;
};
met2Image.src = "images/met2.png";

let met2Y = -40;
let met2X = Math.floor(Math.random() * (canvas.width - 50));

//load met3
var met3Ready = false;
met3Image = new Image();
met3Image.onload = function () {
  // show the meteor image
  met3Ready = true;
};
met3Image.src = "images/met3.png";

let met3Y = -75;
let met3X = Math.floor(Math.random() * (canvas.width - 50));

//load fire1
var fire1Ready = false;
fire1Image = new Image();
fire1Image.onload = function () {
  // show the fire1 image
  fire1Ready = true;
};
fire1Image.src = "images/fire1.png";

let fire1Y = -150;
let fire1X = Math.floor(Math.random() * (canvas.width - 50));

//load fire2
var fire2Ready = false;
fire2Image = new Image();
fire2Image.onload = function () {
  // show the fire1 image
  fire2Ready = true;
};
fire2Image.src = "images/fire2.png";

let fire2Y = -175;
let fire2X = Math.floor(Math.random() * (canvas.width - 50));

//load fire3
var fire3Ready = false;
fire3Image = new Image();
fire3Image.onload = function () {
  // show the fire1 image
  fire3Ready = true;
};
fire3Image.src = "images/fire3.png";

let fire3Y = -45;
let fire3X = Math.floor(Math.random() * (canvas.width - 50));

//load fire4
var fire4Ready = false;
fire4Image = new Image();
fire4Image.onload = function () {
  // show the fire4 image
  fire4Ready = true;
};
fire4Image.src = "images/fire4.png";

let fire4Y = -90;
let fire4X = Math.floor(Math.random() * (canvas.width - 50));

// Create the game objects
var hero = {
  speed: 128, // movement speed of hero in pixels per second
};

// Handle keyboard controls
var keysDown = {};

// Check for keys pressed where key represents the keycode captured
addEventListener(
  "keydown",
  function (e) {
    keysDown[e.key] = true;
    console.log(keysDown);
  },
  false
);

addEventListener(
  "keyup",
  function (e) {
    keysDown[e.key] = false;
    console.log(keysDown);
  },
  false
);

// Reset the player and monster positions when player catches a monster
var reset = function () {
  // Reset player's position to centre of canvas
  hero.x = canvas.width / 2;
  hero.y = canvas.height / 2;
};

// Update game objects - change player position based on key pressed
var update = function (modifier) {
  if (keysDown["ArrowUp"]) {
    if (hero.y > 0) {
      hero.y = hero.y - 4;
    }
  }
  if (keysDown["ArrowDown"]) {
    if (hero.y < 425) {
      hero.y = hero.y + 4;
    }
  }
  if (keysDown["ArrowLeft"]) {
    if (hero.x > 0) {
      hero.x = hero.x - 4;
    }
  }
  if (keysDown["ArrowRight"]) {
    if (hero.x < 450) hero.x = hero.x + 3;
  }
  //speed of met
  met1Y = met1Y + 3.25;
  met2Y = met2Y + 3.35;
  met3Y = met3Y + 3.45;
  fire1Y = fire1Y + 5.5;
  fire2Y = fire2Y + 5;
  fire3Y = fire3Y + 5.75;
  fire4Y = fire4Y + 5;

  if (met1Y > canvas.height) {
    met1X = Math.floor(Math.random() * (canvas.width - 50));
    met1Y = -50;
  }

  if (met3Y > canvas.height) {
    met3X = Math.floor(Math.random() * (canvas.width - 50));
    met3Y = -75;
  }
  if (met2Y > canvas.height) {
    met2X = Math.floor(Math.random() * (canvas.width - 50));
    met2Y = -25;
  }
  if (fire1Y > canvas.height) {
    fire1X = Math.floor(Math.random() * (canvas.width - 50));
    fire1Y = -130;
  }
  if (fire2Y > canvas.height) {
    fire2X = Math.floor(Math.random() * (canvas.width - 50));
    fire2Y = -145;
  }
  if (fire3Y > canvas.height) {
    fire3X = Math.floor(Math.random() * (canvas.width - 50));
    fire3Y = -140;
  }
  if (fire4Y > canvas.height) {
    fire4X = Math.floor(Math.random() * (canvas.width - 50));
    fire4Y = -80;
  }
};

// Draw everything on the canvas
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }

  if (heroReady) {
    ctx.drawImage(heroImage, hero.x, hero.y);
  }
  if (met1Ready) {
    ctx.drawImage(met1Image, met1X, met1Y);
  }
  if (met2Ready) {
    ctx.drawImage(met2Image, met2X, met2Y);
  }
  if (met3Ready) {
    ctx.drawImage(met3Image, met3X, met3Y);
  }
  if (fire1Ready) {
    ctx.drawImage(fire1Image, fire1X, fire1Y);
  }
  if (fire2Ready) {
    ctx.drawImage(fire2Image, fire2X, fire2Y);
  }
  if (fire3Ready) {
    ctx.drawImage(fire3Image, fire3X, fire3Y);
  }
  if (fire4Ready) {
    ctx.drawImage(fire4Image, fire4X, fire4Y);
  }

  // Display score and time
  ctx.fillStyle = "rgb(250, 250, 250)";
  ctx.font = "24px Helvetica";
  ctx.textAlign = "left";
  ctx.textBaseline = "top";
  // ctx.fillText("Monsters caught: " + monstersCaught, 20, 20);
  ctx.fillText("Seconds Survived: " + count, 20, 50);
  // Display game over message when timer finished
  if (finished == true) {
    ctx.fillText("Game over!", 200, 220);
  }
};

var count = 0; // how many seconds the game lasts for - default 30
var finished = false;
var counter = function () {
  count = count + 1;
  if (count <= 0) {
    // stop the timer
    clearInterval(counter);
    // set game to finished
    finished = true;
    count = 0;
    heroReady = false;
  }
};

// timer interval is every second (1000ms)
setInterval(counter, 1000);

// The main game loop
var main = function () {
  if (
    hero.x - 50 < met1X &&
    met1X < hero.x + 50 &&
    hero.y - 50 < met1Y &&
    met1Y < hero.y + 50
  ) {
    alert("Gameover");
    return;
  }
  if (
    hero.x - 50 < met2X &&
    met2X < hero.x + 50 &&
    hero.y - 50 < met2Y &&
    met2Y < hero.y + 50
  ) {
    alert("Gameover");
    return;
  }
  if (
    hero.x - 50 < met3X &&
    met3X < hero.x + 50 &&
    hero.y - 50 < met3Y &&
    met3Y < hero.y + 50
  ) {
    alert("Gameover");
    return;
  }
  if (
    hero.x - 32 < fire1X &&
    fire1X < hero.x + 50 &&
    hero.y - 64 < fire1Y &&
    fire1Y < hero.y + 50
  ) {
    alert("Gameover");
    return;
  }
  if (
    hero.x - 32 < fire2X &&
    fire2X < hero.x + 50 &&
    hero.y - 64 < fire2Y &&
    fire2Y < hero.y + 50
  ) {
    alert("Gameover");
    return;
  }
  if (
    hero.x - 32 < fire3X &&
    fire3X < hero.x + 50 &&
    hero.y - 64 < fire3Y &&
    fire3Y < hero.y + 50
  ) {
    alert("Gameover");
    return;
  }

  if (
    hero.x - 64 < fire4X &&
    fire4X < hero.x + 50 &&
    hero.y - 128 < fire4Y &&
    fire4Y < hero.y + 50
  ) {
    alert("Gameover");
    return;
  }

  // run the update function
  update(1); // do not change
  // run the render function
  render();
  // Request to do this again ASAP
  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame =
  w.requestAnimationFrame ||
  w.webkitRequestAnimationFrame ||
  w.msRequestAnimationFrame ||
  w.mozRequestAnimationFrame;

// Let's play this game!
reset();
main();
