let cw = 40;

function setup(){
    createCanvas(720, 400);
};

function draw(){
    background(230);
    sl();
    ml();
    hl();
    dl();
};

//時計の見た目
let sl = () =>{
    //残りの量
    noStroke();
    fill('red');
    rect(80, 250, cw, -(60-second()));

    //外枠
    stroke(0);
    strokeWeight(2);
    noFill();
    rect(80, 250, cw, -60);

    //text
    textSize(25);
    noStroke();
    fill(0);
    text('s', 95, 280);
};

let ml = () =>{
    noStroke();
    fill('blue');
    rect(180, 250, cw, -(60-minute()));

    stroke(0);
    strokeWeight(2);
    noFill();
    rect(180, 250, cw, -60);

    textSize(25);
    noStroke();
    fill(0);
    text('m', 190, 280);
};

let hl = () =>{
    noStroke();
    fill('green');
    rect(280, 250, cw, -(24-hour()));

    stroke(0);
    strokeWeight(2);
    noFill();
    rect(280, 250, cw, -24);

    textSize(25);
    noStroke();
    fill(0);
    text('h', 295, 280);
};

let dl = () =>{
    textSize(25);
    noStroke();
    fill(0);
    text(`${year()}年${month()}月${day()}日の残り時間`, 20, 50);
};

