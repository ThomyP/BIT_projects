
// function rand(min, max) {
//   const minCeiled = Math.ceil(min);
//   const maxFloored = Math.floor(max);
//   return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
// }


//01

const h1 = document.querySelector('h1');
h1.innerText = '1';
h1.style.color ='red'
const h2 = document.querySelector('h2');
h2.innerText = '2';
const h3 = document.querySelector('h3');
h3.innerText = '3';
const h4 = document.querySelector('h4');
h4.innerText = '4';

//02-----------------------------------------------------------------

const Divkv = document.querySelector('div');
Divkv.style.width = '100px'; 
Divkv.style.height = '100px'; 
Divkv.style.backgroundColor = 'blue'; 

const divaps = document.querySelector('div:nth-of-type(2)');
divaps.style.width = '100px'; 
divaps.style.height = '100px'; 
divaps.style.backgroundColor = 'red'; 
divaps.style.borderRadius = '50%';

//03-----------------------------------------------------------------
{
function rand() {
      return Math.floor(Math.random() * 3)+1;
    }

let kint1 = rand() ;
let kint2 = rand();

if (kint1 > kint2) {
  higher = kint1;
  lower = kint2;
} else {
  higher = kint2;
  lower = kint1;
}



let result = higher / lower;

const spans = document.querySelectorAll("#go3 span");
spans[0].textContent = higher;
spans[1].textContent = lower;
spans[2].textContent = result;

}

//04-----------------------------------------------------------------

{
  function rand() {
    return Math.floor(Math.random() * (200 - 50 + 1)) + 50;
  }
  // return Math.floor(Math.random() * (max - min + 1)) + min;

  const var1 = rand();
  const var2 = rand();
  const var3 = rand();

  const values = [var1, var2, var3].sort((a, b) => a - b);

  const divs = document.querySelectorAll("#go4 div");

  divs.forEach((div, index) => {
    const value = values[index];
    const parent = document.querySelector("#go4");
    parent.style.display = "flex";
    parent.style.justifyContent = "center";
    parent.style.alignItems = "center";

   
    const circle = document.createElement("div");
    circle.style.width = `${value}px`;
    circle.style.height = `${value}px`;
    circle.style.borderRadius = "50%";
    circle.style.backgroundColor = "lightblue";

    
    div.appendChild(circle);
  });
}

  


//05-----------------------------------------------------------------
{
function rand() {
  return Math.floor(Math.random() * (10 - -10 + 1)) + -10;
}
// return Math.floor(Math.random() * (max - min + 1)) + min;

const var1 = rand();
const var2 = rand();
const var3 = rand();

console.log(var1)
console.log(var2)
console.log(var3)

const spans = document.querySelectorAll("#go5 span");

function setColor(span, value) {
  if (value > 0) {
    span.style.color = 'blue';  // Dideli skaičiai mėlyni
  } else if (value === 0) {
    span.style.color = 'green'; // Nulis žalias
  } else {
    span.style.color = 'red';   // Maži skaičiai raudoni
  }
  span.style.fontSize = `${Math.abs(value) + 40}px`; // Absolute value for font size
}

spans[0].textContent = var1;
setColor(spans[0], var1);

spans[1].textContent = var2;
setColor(spans[1], var2);

spans[2].textContent = var3;
setColor(spans[2], var3);

}
//06-----------------------------------------------------------------
{

 // return Math.floor(Math.random() * (max - min + 1)) + min;
let zvakes = (Math.floor(Math.random() * (3000 - 5 + 1))+5);
console.log(zvakes);

document.querySelector('#go6 p[data-amount] span').innerHTML = zvakes;

// document.querySelector('#go6 p[data-subtotal] span').innerHTML = kaina;
//[] tikslesnis kreipimasis į id veiks ir pakeitus vieta 
// nes orentuojamasis i id o nei pozicija

const kaina = zvakes * 1;
document.querySelector('#go6  :nth-child(3) span').innerHTML = kaina;

const nuolaida3 = 0.03;
const nuolaida4 = 0.04;

if (zvakes >= 2000){
  document.querySelector('#go6  :nth-child(4) span').innerHTML = '4';
  galkaina = kaina - (kaina * nuolaida4);
  document.querySelector('#go6  :nth-child(5) span').innerHTML = galkaina;

} else if (zvakes>=1000) {
  document.querySelector('#go6  :nth-child(4) span').innerHTML = '3';
  galkaina = kaina - (kaina * nuolaida3);
  document.querySelector('#go6  :nth-child(5) span').innerHTML = galkaina;
} else{
  document.querySelector('#go6  :nth-child(4) span').innerHTML = '0'
  document.querySelector('#go6  :nth-child(5) span').innerHTML = kaina;
}

}
 //07 -----------------------------------------------------------------

{


 let random = (Math.floor(Math.random() * 3)+1);
 console.log(random)

 if(random == 1){
  const trik = document.querySelector('#go7 div')
  trik.style.height = "0";
  trik.style.width = "0";
  trik.style.borderLeft = "50px solid transparent"; // Left side of the triangle
  trik.style.borderRight = "50px solid transparent"; // Right side of the triangle
  trik.style.borderBottom = "100px solid green"; 
 } else if(random == 2){
  const circle = document.querySelector('#go7 div')
  circle.style.height = "100px";
  circle.style.width = "100px";
  circle.style.borderRadius ="50px";
  circle.style.backgroundColor = "yellow";
 }else {
   const kvad = document.querySelector('#go7 div')
  kvad.style.height = "100px";
  kvad.style.width = "100px";
  kvad.style.backgroundColor = "red";
  }


}

//08 -----------------------------------------------------------------

{
  let green = 0;
  let blue = 0;
  let red = 0;

  const divs = document.querySelectorAll("#go8 div");
  
  for (i = 0; i < 6; i++ ){

    if(divs[i].style.backgroundColor === 'green'){
      green++;
    } else if(divs[i].style.backgroundColor === 'blue'){
      blue++
    } else {
      red++
    }

  }

  document.querySelector('#go8 p[data-green] span').innerHTML = green
  document.querySelector('#go8 p[data-red] span').innerHTML = red
  document.querySelector('#go8 p[data-blue] span').innerHTML = blue
}



//10---------------------------------------------------------
{
content = document.querySelectorAll('#go10 div')
// console.log(content)

for (let i = 0; i < content.length; i++) {

  const current_content_div = content[i];
  
  const width1 = parseInt(current_content_div.style.width); 
  const height1 = parseInt(current_content_div.style.height);
  
  const area = width1 * height1;
  
  if (area > 10000) {
    current_content_div.style.backgroundColor = 'red';
}

}

}
  
//09 -----------------------------------------------------------------
// {
// const div1 = document.querySelector('#go9 div[data-row-1]')

// const first_nr = div1.querySelector('span:nth-child(1)');
// const second_nr = div1.querySelector('span:nth-child(2)');
// const lule = div1.querySelector('span:nth-child(3)');


// const nr1 = parseInt(first_nr.textContent, 10);
// const nr2 = parseInt(second_nr.textContent, 10);

// const result1 = nr1 * nr2;

// document.querySelector('#go9 div[data-row-1] span:nth-child(3)').innerHTML = result1
// console.log(result1)

//----------------------------------------
const divs9 = document.querySelectorAll("#go9 div");

for (let i = 0; divs9.length; i++ ) {
  
  const current_div = divs9[i];
  
  const first_nr = current_div.querySelector('span:nth-of-type(1)');
  const second_nr = current_div.querySelector('span:nth-of-type(2)');
  const result_span = current_div.querySelector('span:nth-of-type(3)');

  const nr1 = parseInt(first_nr.textContent, 10);
  const nr2 = parseInt(second_nr.textContent, 10);

  const result1 = nr1 * nr2;

  result_span.textContent = result1;
}




















