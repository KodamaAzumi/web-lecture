let clockwidth = 40;

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
    //白地
    let whiteBg = (x, y, w, h) =>{
        noStroke();
        fill('white');
        rect(x, y, w, h)
    };

    //残りの量
    let RA = (x, y, w, h, color) =>{
        noStroke();
        fill(color);
        rect(x, y, w, h);
    };

    //外枠
    let OF = (x, y, w, h, color, sw) =>{
        stroke(color);
        strokeWeight(sw);
        noFill();
        rect(x, y, w, h);
    };

    //text
    let clockText = (size, color, clockText, x, y) =>{
        textSize(size);
        noStroke();
        fill(color);
        text(clockText, x, y);
    };

let sl = () =>{
    let x = 80;
    let y = 250;

    whiteBg(x, y, clockwidth, -60);
    RA(x, y, clockwidth, -(60-second()), 'red');
    OF(x, y, clockwidth, -60, 0, 2);
    clockText(25, 0, 's', 95, 280);
};

let ml = () =>{
    let x = 180;
    let y = 250;

    whiteBg(x, y, clockwidth, -60);
    RA(x, y, clockwidth, -(60-minute()), 'blue');
    OF(x, y, clockwidth, -60, 0, 2);
    clockText(25, 0, 'm', 190, 280);
};

let hl = () =>{
    let x =280;
    let y =250;

    whiteBg(x, y, clockwidth, -24);
    RA(x, y, clockwidth, -(24-hour()), 'green');
    OF(x, y, clockwidth, -24, 0, 2);
    clockText(25, 0, 'h', 295, 280);
};

let dl = () =>{
    textSize(25);
    noStroke();
    fill(0);
    text(`${year()}年${month()}月${day()}日の残り時間`, 20, 50);
};

