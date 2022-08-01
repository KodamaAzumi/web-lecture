const clockwidth = 50;

function setup(){
    createCanvas(720, 400);

    console.log(new Date());
    console.log(new Date().getTime())
    console.log((Date.parse(`${year()}/9/18`)-new Date().getTime())/(1000*60*60*24)+1);
    console.log((Date.parse(`${year()}/12/31`)-new Date().getTime())/(1000*60*60*24)+1);
};

function draw(){
    background(230);
    SC();
    MC();
    HC();
    lavel();
};


//時計の見た目
    //白地
    const whiteBg = (x, y, w, h) =>{
        noStroke();
        fill('white');
        rect(x, y, w, h)
    };

    //残りの量
    const RA = (x, y, w, h, color) =>{
        noStroke();
        fill(color);
        rect(x, y, w, h);
    };

    //外枠
    const OF = (x, y, w, h, color, sw) =>{
        stroke(color);
        strokeWeight(sw);
        noFill();
        rect(x, y, w, h);
    };

    //text
    const clockText = (size, color, clockText, x, y) =>{
        textSize(size);
        noStroke();
        fill(color);
        text(clockText, x, y);
    };

const SC= () =>{
    const x = 80;
    const y = 350;

    whiteBg(x, y, clockwidth, -60*3);
    RA(x, y, clockwidth, -(60-second())*3, 'red');
    OF(x, y, clockwidth, -60*3, 0, 2);
    clockText(25, 0, 's', 98, 380);
};

const MC = () =>{
    const x = 180;
    const y = 350;

    whiteBg(x, y, clockwidth, -60*3);
    RA(x, y, clockwidth, -(60-minute())*3, 'blue');
    OF(x, y, clockwidth, -60*3, 0, 2);
    clockText(25, 0, 'm', 193, 380);
};

const HC = () =>{
    const x =280;
    const y =350;

    whiteBg(x, y, clockwidth, -24*3);
    RA(x, y, clockwidth, -(24-hour())*3, 'green');
    OF(x, y, clockwidth, -24*3, 0, 2);
    clockText(25, 0, 'h', 298, 380);
};

const lavel = () =>{
    textSize(25);
    noStroke();
    fill(0);
    text(`${year()}年${month()}月${day()}日の残り時間`, 20, 50);
};


