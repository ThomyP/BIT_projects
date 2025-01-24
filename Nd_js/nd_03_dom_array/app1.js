
const C = [
  'Višta',
  'Gaidys',
  'Šernas',
  'Lapė',
  'Vilkas',
  'Šuo dingo',
  'Barsukas',
  'Voverė',
  'Šuo',
  'Naminis katinas',
  'Laukinis katinas',
  'Šuo atsirado',
  'Bebras',
  'Ožys'
];


function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}

function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padEnd(6, '0');
}

let zodis = '';

for (let i = 0; i < C.length; i++) {

  for (let k = 0; k < 10; k++) {

    const randomX = rand(0, 100); // Random X position (percentage)
    const randomY = rand(0, 100); // Random Y position (percentage)
    const randomRotation = rand(-45, 45); // Random rotation for the word

    
    for (let j = 0; j < C[i].length; j++){

      const char = C[i][j]; 
      const color = randomColor();
      const font_dydis = rand(10,100)
 
      zodis += `<span style=" position: absolute;top: ${randomY}%;
  left: ${randomX}%;
  transform: translate(-50%, -50%) rotate(${randomRotation}deg); color: ${color}; font-size: ${font_dydis}px">${char}</span>`
      
    }
  }
}

document.querySelector('body').innerHTML = zodis;

// if(C[j] < 1)


