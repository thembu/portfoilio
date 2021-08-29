function Snake(params) {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.score = 0;
  this.end = false;

  this.show = function () {
    fill(0, 0, 255);
    for (let i = 0; i < this.tail.length; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }

    rect(this.x, this.y, scl, scl);
  };

  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.eat = function (pos) {
    let d = dist(this.x, this.y, pos.x, pos.y);

    if (d < 1) {
      this.total++;
      this.score++;
      return true;
    } else {
      return false;
    }
  };

  this.update = function () {
    if (this.total === this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }

    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };


  this.Lost = () => {
    background(0,244,33);
    fill(255)
    text(` You lost and your score is : ${this.score}` , 100,200)
    this.x = 0;
    this.y = 0;
    return True
  }



  this.death = function () {
    for (let i = 0; i < this.tail.length; i++) {
      let pos = this.tail[i];
      let d = dist(this.x, this.y, pos.x, pos.y);
      

      if (d < 1) {
        this.total = 0;
        this.tail = [];
        this.end = true;
      }

    }

  };

  let point = document.getElementById("scoreElem");

  this.points = () => {
    this.output = ` score :  ${this.score}`;
    point.innerHTML = this.output;
  };
}
