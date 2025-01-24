
function rand(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled);
}


// //01------------------------------------------------------

let insert1 = '';

for (let i = 1; i <= 14; i++) {
  insert1 += `<div class="lightblue font">4</div>`
  insert1 += `<div class="font cool">1</div>`
}

document.querySelector('.task1').innerHTML = insert1;



//02-------------------------------------------------------

let insert_number ='';

for(i = 0; i < 44; i++) {
  const skaicius = rand(14,44);
  if(skaicius % 2 == 0){
    insert_number += `<div class="red">${skaicius}</div>`
  }else{
    insert_number += `<div class="blue">${skaicius}</div>`
  }
}

document.querySelector('.task2').innerHTML = insert_number;


//03---------------------------------------------------------

let circle = '';

for(i = 0; i < 14; i++) {
  circle += `<div class="circle"></div>`
}

document.querySelector('.task3').innerHTML = circle;


//04---------------------------------------------------------

let circles2 = '';

for(i = 0; i < 8; i++){
  if (i % 2 == 0) {
    circles2 += `<div class="circle" style="background: red";></div>`;
} else {
    circles2 += `<div class="circle" style="background: blue;"></div>`;
}
}

document.querySelector('.task4').innerHTML = circles2;

//05---------------------------------------------------------

let multi = '';

for(i = 1; i <= 14; i++){
  let multi2 = (4 * i) ;
  multi +=`<div style="display: flex; gap: 5px;">
  <div>4</div>X<div>${i}</div>=<div>${multi2}</div></div>`;
  document.querySelector('.task5').innerHTML = multi;
}

document.querySelector('.task5').style.display = 'flex';
document.querySelector('.task5').style.flexDirection = 'column';
document.querySelector('.task5').style.gap = '5px';

//06---------------------------------------------------------

let viso = 444;
let max_sk = 44;
let eile = Math.round(viso / max_sk)
let star_row = '*'.repeat(max_sk)

let result = '';

for(i = 0; i < eile; i++){
  result += star_row + '<br>';
}

document.querySelector('.task6').innerHTML = result;

//07---------------------------------------------------------


let color = '';
// Function to generate a random color
const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const kvadratas = function (size, spalva = getRandomColor() ) {
  let html = '<div style="position: relative; height: ' + size + 'px; width: ' + size + 'px; background-color: ' + spalva + '; display: flex; flex-wrap: wrap;">'
  
  for (let i = 0; i < 13; i++) {
    const smallSize = rand(10, 30); 
    const smallColor = getRandomColor(); 
    html += '<div style="height: ' + smallSize + 'px; width: ' + smallSize + 'px; background-color: ' + smallColor + '; margin: 2px;"></div>';
  }

  html += '</div>'; // Close the main square container
  return html;

}




const size = rand(100,200);
html = '';


document.querySelector('.task7').innerHTML = kvadratas(size,)

