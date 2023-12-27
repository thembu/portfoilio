let scl = 20;
let s;
let score;
let food;
let scene;
let currentScene;

function setup() {
  createCanvas(400, 400);
  frameRate(10);
  currentScene = 0;
  s = new Snake();
  scene = new scene1();
  pickLocation();
}

let pickLocation  = () => {

  let cols = floor(width / scl);
  let rows = floor(height / scl);

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
  
}

function draw() {
  background(255);

  if (currentScene == 0) {
    scene.display();
  }

  if (currentScene == 1) {
    s.death();
    s.update();
    s.show();
    s.points();
     
    
    fill(220, 22, 27);
    rect(food.x, food.y, scl, scl);
  
  }

  if(s.end === true) s.Lost();
  if (s.eat(food)) {
    pickLocation();
  }
}


function scene1(params) {

  this.display =  () => {

    background(0);
    fill(255);
    text("welcome to the snake game press enter to play", 50, 200);
  };

}



function keyPressed() {
  if (keyCode === 13) {

 currentScene = 1
  }

  if(keyCode === 16) {
  }
  
}  
  if (keyCode === 38 && keyIsPressed) {
    //UP
    s.dir(0, -1);
  } else if (keyCode === 40 && keyIsPressed) {
    //DOWN
    s.dir(0, 1);
  } else if (keyCode === 37&& keyIsPressed) {
    //LEFT
    s.dir(-1, 0);
  } else if (keyCode === 39 && keyIsPressed) {
    //RIGHT
    s.dir(1, 0);
  }


