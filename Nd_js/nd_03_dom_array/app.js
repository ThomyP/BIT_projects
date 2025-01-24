// https://docs.google.com/document/d/1uqPJDbociTDSZejc9TCIhrN-Fktz_JwJ43958epJrdE/edit?tab=t.0

const A = [
  'Bebras',
  'Zebras',
  'Vilkas',
  'Lapė',
  'Barsukas',
  'Voverė',
  'Laukinis katinas',
  'Šuo',
  'Naminis katinas',
];

const B = [
  'Kalakutas',
  'Višta',
  'Antis',
  'Žąsis',
  'Ančiasnapis'
];

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



//01--------------------------------------------------------------------

let insert = '';

for(i = 0; i < A.length; i++) {

insert += `<li>${A[i]}</li>`

}

document.querySelectorAll('ul')[0].innerHTML = insert;

//02--------------------------------------------------------------------
let insert2 = '';

// A.sort();
A.sort((a, b) => a.localeCompare(b, 'lt')); //Lietuvių

for(i = 0; i < A.length; i++) {
  
insert2 += `<li>${A[i]}</li>`

}

document.querySelectorAll('ul')[1].innerHTML = insert2;

//03--------------------------------------------------------------------

let insert3 = '';

// let bendras = A.concat(B); RECCOMENDED apjungimas

for (let i = 0; i < B.length; i++) {
  A.push(B[i]); 
}

// A.sort() // english
A.sort((a, b) => a.localeCompare(b, 'lt')); //Lietuvių

for (let i = 0; i < A.length; i++) {
  insert3 += `<li>${A[i]}</li>`;
}

document.querySelectorAll('ul')[2].innerHTML = insert3;

//04--------------------------------------------------------------------

insert4 = '';

for (i = 0; i < A.length; i++) {
  insert4 += `<div class="circle_blue"
    style="display: flex; 
    justify-content: center; 
    align-items: center;
    text-align: center;">
    ${A[i]}
    </div>`;}
document.querySelectorAll('div')[0].innerHTML = insert4;

//05--------------------------------------------------------------------

// let insert5 = '';



// for(i = 0; i < B.length; i++){
  
// }
insert5 = '';

for(i = 0; i < B.length; i++){

  let zodzio_ilgis =  B[i].length;

  insert5 += `<div 
    class="circle_blue flex_row red">${B[i]} ${zodzio_ilgis}</div>`;
  
  console.log(zodzio_ilgis);
}

document.querySelector('span').innerHTML = insert5;

//06--------------------------------------------------------------------

insert6 = '';

for(i = 0; i <A.length; i++){
  
    if (A[i].length < 10) {
      insert6 += `<div class="circle_blue flex_row green">${A[i]}</div>`;
  }
}
document.querySelector('.task6').innerHTML = insert6;

//07--------------------------------------------------------------------

let insert7 = '';
let word = '';
let letter = '';

for(i = 0; i < B.length; i++){
  word = B[i];
  for(j = 0; j < word.length; j++){
    let letter =  word[j];
    insert7 += `<span class="circle_blue flex_row yellow">${word[j]}</span>`;
  }
}

document.querySelector('.task7').innerHTML = insert7;

//08--------------------------------------------------------------------

let cgyv = [];
let cgyv_short = [];

for(i = 0; i < C.length; i++){
  if(C[i].length <= 6){
    cgyv = cgyv + `<li>${C[i]}</li>`
    document.querySelector('.c6').innerHTML = cgyv;
  }
  cgyv_short += `<li>${C[i]}</li>`
  document.querySelector('.c62').innerHTML = cgyv_short;
}

//09--------------------------------------------------------------------

let no_dog_in_here = [];


for(let i = 0; i < C.length; i++) {
  if(C[i] == 'Šuo'){
    C.shift()
  }
  no_dog_in_here +=  `<li>${C[i]}</li>`
}

document.querySelector('.ul9').innerHTML = no_dog_in_here;


//09--------------------------------------------------------------------









