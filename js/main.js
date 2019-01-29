// moduled querySelector
function qs(selectEl){
    return document.querySelector(selectEl);
}

// select RGB inputs
let red = qs('#red'), green = qs('#green'), blue = qs('#blue') , opacity = qs('#opacity'); 
// selet num inputs
let redNumVal = qs('#redNum'), greenNumVal = qs('#greenNum'), blueNumVal = qs('#blueNum') , opacityNumVal = qs('#opacityNum');
// select Color Display
let colorDisplay = qs('#color-display');

let hexDisplay = qs('#hex-color')
let rgbDisplay = qs('#rgb-color');
// select labels
let redLbl = qs('label[for=red]'), greenLbl = qs('label[for=green]'), blueLbl = qs('label[for=blue]'), opacityLbl = qs('label[for=opacity]');

// init display Colors
displayColors();
// init Color Vals
colorNumrVals();
// init ColorSliderVals
initSliderColors();
// init Change Range Val
changeRangeNumVal();
// init Colors controls
colorSliders();

//Color converter
function colorToHex(color) {
    if (color.substr(0, 1) === '#') {
        return color;
    }
    var digits = /(.*?)rgb\((\d+), (\d+), (\d+)\)/.exec(color);
    
    var red = parseInt(digits[2]);
    var green = parseInt(digits[3]);
    var blue = parseInt(digits[4]);
    
    var rgb = blue | (green << 8) | (red << 16);
    return digits[1] + '#' + rgb.toString(16).padStart(6, '0');
};

// display colors
function displayColors(){
    rgbDisplay.value = (`rgba(${red.value}, ${green.value}, ${blue.value} , ${opacity.value})`);

    hexDisplay.value = colorToHex(`rgb(${red.value}, ${green.value}, ${blue.value})`);
    
    colorDisplay.style.backgroundColor = `rgba(${red.value}, ${green.value}, ${blue.value} , ${opacity.value})`;    
}

// initial color val numbers when DOM is loaded 
function colorNumrVals(){
    redNumVal.value = red.value;
    greenNumVal.value = green.value;
    blueNumVal.value = blue.value;
    opacityNumVal.value = opacity.value;
}

// initial colors when DOM is loaded
function initSliderColors(){
    // label bg colors
    redLbl.style.background = `rgba(${red.value},0,0,1)`;
    greenLbl.style.background = `rgba(0,${green.value},0,1)`;
    blueLbl.style.background = `rgba(0,0,${blue.value},1)`;
    opacityLbl.style.background = `rgba(0,0,0,${opacity.value})`;

    // slider bg colors
    red.style.background = `rgba(${red.value},0,0,1)`;
    green.style.background = `rgba(0,${green.value},0,1)`;
    blue.style.background = `rgba(0,0,${blue.value},1)`;
    opacity.style.background = `rgba(0,0,0,${opacity.value})`;
}

// change range values by number input
function changeRangeNumVal(){
    redNumVal.addEventListener('change', ()=>{
        // make sure numbers are entered between 0 to 255
        if(redNumVal.value > 255){
            alert('cannot enter numbers greater than 255');
            redNumVal.value = red.value;
        } else if(redNumVal.value < 0) {
            alert('cannot enter numbers less than 0');  
            redNumVal.value = red.value;            
        } else {
            red.value = redNumVal.value;
            initSliderColors();
            displayColors();
        }
    });
    greenNumVal.addEventListener('change', ()=>{
        // make sure numbers are entered between 0 to 255
        if(greenNumVal.value > 255){
            alert('cannot enter numbers greater than 255');
            greenNumVal.value = green.value;
        } else if(greenNumVal.value < 0) {
            alert('cannot enter numbers less than 0');  
            greenNumVal.value = green.value;            
        } else {
            green.value = greenNumVal.value;
            initSliderColors();
            displayColors();
        }
    });

    blueNumVal.addEventListener('change', ()=>{
        // make sure numbers are entered between 0 to 255
        if (blueNumVal.value > 255) {
            alert('cannot enter numbers greater than 255');
            blueNumVal.value = blue.value;
        } else if (blueNumVal.value < 0) {
            alert('cannot enter numbers less than 0');
            blueNumVal.value = blue.value;
        } else {
            blue.value = blueNumVal.value;
            initSliderColors();
            displayColors();
        }
    });

    opacityNumVal.addEventListener('change', ()=>{
        // make sure numbers are entered between 0 to 255
        if (opacityNumVal.value > 1) {
            alert('cannot enter numbers greater than 1');
            opacityNumVal.value = opacity.value;
        } else if (opacity.value < 0) {
            alert('cannot enter numbers less than 0');
            opacityNumVal.value = opacity.value;
        } else {
            opacity.value = opacityNumVal.value;
            initSliderColors();
            displayColors();
        }
    });
}

// Color Sliders controls
function colorSliders(){
    red.addEventListener('input', () => {
        displayColors();
        initSliderColors();
        changeRangeNumVal();
        colorNumrVals();
    });

    green.addEventListener('input', () => {
        displayColors();
        initSliderColors();
        changeRangeNumVal();
        colorNumrVals();
    });

    blue.addEventListener('input', () => {
        displayColors();
        initSliderColors();
        changeRangeNumVal();
        colorNumrVals();
    });

    opacity.addEventListener('input', () => {
        displayColors();
        initSliderColors();
        changeRangeNumVal();
        colorNumrVals();
    });
}
