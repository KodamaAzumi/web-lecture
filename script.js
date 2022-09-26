const clockWidth = 50;
const clockColor = 0;

//その年の日数
const wholeYear = () =>{
    const NYD = Date.parse(`${year()}/1/1`);
    const newYearsEve = Date.parse(`${year()}/12/31`);
    const wholeYear = (newYearsEve - NYD)/(1000*60*60*24)+1
    return wholeYear;
}

//大晦日までの日数
const limitNYE = () =>{
    const today = new Date().getTime();
    const newYearsEve = Date.parse(`${year()}/12/31`);
    const limitNYE = (newYearsEve-today)/(1000*60*60*24)+1;
    return limitNYE;
};

//2022年の夏休みの残り日数
const limitSH = () =>{
    const today = new Date().getTime();
    const summerHoliday = Date.parse(`${year()}/9/18`);
    const limitSH = (summerHoliday - today)/(1000*60*60*24);
    return limitSH;
};

//時計の見た目
    //下地
    const GW = (x, y, w, h) =>{
        noStroke();
        fill('White');
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
        line(x, y+h/2, x + clockWidth, y+h/2);
    };

    //text
    const clockText = (size, color, clockText, x, y) =>{
        textSize(size);
        noStroke();
        fill(color);
        text(clockText, x, y);
    };

//残りの秒数
const SC= () =>{
    const x = 50;
    const y = 350;

    GW(x, y, clockWidth, -60*3);
    RA(x, y, clockWidth, -(60-second())*3, 'red');
    OF(x, y, clockWidth, -60*3, clockColor, 2);
    clockText(25, clockColor, 's', 68, 380);
};

//残りの分数
const MC = () =>{
    const x = 150;
    const y = 350;

    GW(x, y, clockWidth, -60*3);
    RA(x, y, clockWidth, -(60-minute())*3, 'blue');
    OF(x, y, clockWidth, -60*3, clockColor, 2);
    clockText(25, clockColor, 'm', 163, 380);
};

//残りの時間
const HC = () =>{
    const x =250;
    const y =350;

    GW(x, y, clockWidth, -24*3);
    RA(x, y, clockWidth, -(24-hour())*3, 'green');
    OF(x, y, clockWidth, -24*3, clockColor, 2);
    clockText(25, clockColor, 'h', 268, 380);
};

//2022年の夏休みの残り日数
const SHC = () =>{
    const x = 460;
    const y = 350;

    GW(x, y, clockWidth, -(2+31+18)*3);
    RA(x, y, clockWidth, -(limitSH())*3, 'orange');
    OF(x, y, clockWidth, -(2+31+18)*3, clockColor, 2);
    clockText(25, clockColor, `夏休み残り${Math.trunc(limitSH())}日`, 430, 50);
    
};

//大晦日まであと何日
const NYEC = () =>{
    const x = 630;
    const y = 380;

    GW(x, y, clockWidth, -wholeYear());
    RA(x, y, clockWidth, -limitNYE(), 'purple');
    OF(x, y, clockWidth, -wholeYear(), clockColor, 2);
    clockText(25, clockColor, `大晦日まで残り${Math.trunc(limitNYE())}日`, 360, 50);
};

//日付
const lavel = () =>{
    textSize(25);
    noStroke();
    fill(clockColor);
    text(`${year()}年${month()}月${day()}日の残り時間`, 20, 50);
};

function setup(){
    createCanvas(720, 400);

    console.log(new Date());
    const today = new Date().getTime();
    console.log(today);

    const newYearsEve = Date.parse(`${year()}/12/31`);
    console.log(newYearsEve);
    console.log((newYearsEve-today)/(1000*60*60*24)+1);

    const summerHoliday = Date.parse(`${year()}/9/18`);
    const limitSH = (summerHoliday - today)/(1000*60*60*24)+1;
    console.log(limitSH);

    console.log(wholeYear());

};

function draw(){
    background(230);
    SC();
    MC();
    HC();
    if(limitSH() > -1){
        SHC();
    } else{
        NYEC();
    }
    lavel();
};


