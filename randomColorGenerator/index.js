const hexBtn = document.querySelector(".hex-btn"); 
const hexValue = document.querySelector(".hex-value"); 
const hexColorContainer = document.querySelector(".hex-color-container");

//create random hex color. 

hexBtn.addEventListener('click', () => {
    let charSet = '0123456789ABCDEF';
    let hexColorOutput = ""; 
    for(let i=0, setLenth = charSet.length; i<6; ++i) {
        hexColorOutput += charSet.charAt(Math.floor(Math.random()*setLenth))
    }
    console.log(hexColorOutput);
    hexValue.textContent = `#${hexColorOutput}`
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`
})

// create RGB color generator. 

const rgbBtn = document.querySelector('.rgb-btn'); 
const getRedVal = document.querySelector('#red'); 
const getGreenVal = document.querySelector('#green'); 
const getBlueVal = document.querySelector('#blue'); 
const rgbContainer = document.querySelector('.rgb-color-container');
const rgbVal = document.querySelector('.rgb-value'); 

rgbBtn.addEventListener('click', () => {
    let redVal = getRedVal.value; 
    let greenVal = getGreenVal.value; 
    let blueVal = getBlueVal.value; 
    rgbVal.textContent = `rgb(${redVal}, ${greenVal}, ${blueVal})`
    rgbContainer.style.backgroundColor = `rgb(${redVal}, ${greenVal}, ${blueVal})`
})