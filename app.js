// Selectors
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelectorAll("input[type='range']");
const currentHexes = document.querySelectorAll(".color h2");
let initialColors;
//Functions
//color Generator
function generaeHex() {
  //   const letters = "0123456789ABCDEF";
  //   let hash = "#";
  //   for (let i = 0; i < 6; i++) {
  //     hash += letters[Math.floor(Math.random() * 16)];
  //   }
  //   return hash;
  const hexColor = chroma.random();
  return hexColor;
}

function randomColors() {
  colorDivs.forEach((div, index) => {
    const hexText = div.children[0];
    console.log("🚀 ~ colorDivs.forEach ~ hexText:", hexText);
    const randomColor = generaeHex();

    //add the bsckground Color
    div.style.backgroundColor = randomColor;
    hexText.innerText = randomColor;
    checkTextContract(randomColor, hexText);
  });
}

function checkTextContract(color, text) {
  const luminance = chroma(color).luminance();
  if (luminance > 0.5) {
    text.style.color = "black";
  } else {
    text.style.color = "white";
  }
}

randomColors();
