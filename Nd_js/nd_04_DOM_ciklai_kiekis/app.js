// https://docs.google.com/document/d/1-VvW2E7ItJ9I0Hx_UmKitI7jt9eBHofKxGczGzPknQg/edit?tab=t.0


console.log('01------------------------------------')
//Paskaičiuoti klasės “skaiciai” sumą. Rezultatą išvesti į konsolę;

const sudetis = document.querySelectorAll('.skaiciai span')

let suma_sk = 0;

for(let i = 0; i < sudetis.length; i++) {
  suma_sk +=  parseFloat(sudetis[i].textContent)
}

console.log(suma_sk)

console.log('02-------------------------------------')
//Paskaičiuoti klasės “raides” raidžių A ir B bendrą kiekį. Rezultatą išvesti į konsolę;

const raides_section = document.querySelectorAll('.raides span')


let counter_a = 0;
let counter_b = 0;
let counter_c = 0;
let counter_z = 0;

for(let i = 0; i < raides_section.length; i++) {

  let raides = raides_section[i].textContent
  
  if (raides === 'A') {
    counter_a += 1;
  } else if (raides === 'B') {
    counter_b += 1;
  } else if(raides === 'Z') {
    counter_z += 1;
  } else {
    counter_c += 1;
  }
  
}

console.log(`A: ${counter_a}, B: ${counter_b}, C: ${counter_c}, Z: ${counter_z}`)

console.log('03-------------------------------------')
//Paskaičiuoti klasės “vardai” vardų, kurie yra ne Antanas kiekį. Rezultatą išvesti į konsolę;


const vardai_section = document.querySelectorAll('.vardai span')

let counter_vardai = 0;
let i = 0;
let j = vardai_section.length -1;


while(i <= j){
  let vardai_i = vardai_section[i].textContent;
  let vardai_j = vardai_section[j].textContent;

  if(vardai_i != 'Antanas') {
    counter_vardai++;
  }

  if(vardai_j != 'Antanas'){
    counter_vardai++;
  }

  i++;
  j--;
}
console.log(`NE Antanas: ${counter_vardai},`)

console.log('04-------------------------------------')
//Paskaičiuoti klasės “gyvuliai” gyvulių kiekį (ne span tagų kiekį). Rezultatą išvesti į konsolę;

const gyvuliai_section = document.querySelectorAll('.gyvuliai span')

let counter_gyvuliai = 0;


for(let i = 0; i < gyvuliai_section.length; i++){
  let gyvuliai = gyvuliai_section[i].textContent;

  if(gyvuliai != '' ){
    counter_gyvuliai++
  }
}

console.log(`Gyvuliai: ${counter_gyvuliai},`)


console.log('05-------------------------------------')
//Paskaičiuoti klasės “vaisiai” raidžių A (didžiųjų ir mažųjų kartu) kiekį. Rezultatą išvesti į konsolę;  

const vaisiai_section = document.querySelectorAll('.vaisiai span')

let counter_Aa = 0;

for(let i = 0; i < vaisiai_section.length; i++){

  let vaisiai =  vaisiai_section[i].textContent

  for(let j = 0;  j <vaisiai.length; j++){
    if(vaisiai[j] === 'A' || vaisiai[j] === 'a')  {
      counter_Aa++
    }
  }
}

console.log(`Aa sk: ${counter_Aa}`)

console.log('06-------------------------------------')
//Paskaičiuoti klasės “miestai” miestų, kurie prasideda K arba baigiasi i kiekį. Rezultatą išvesti į konsolę;

const miestai_section = document.querySelectorAll('.miestai span')

let starts_in_k = 0;
let ends_in_i = 0;

for(let i = 0; i < miestai_section.length; i++){
  let miestai = miestai_section[i].innerHTML

  if(miestai[0]=== 'K'){
    starts_in_k++;
  }
   
  if(miestai[miestai.length-1] === 'i'){
    ends_in_i++;
  }
     
}
console.log(`Prasideda K: ${starts_in_k}, Baigiasi i: ${ends_in_i}`)


console.log('07-------------------------------------')
//Paskaičiuoti klasės “salys” šalių skaičių, kurių pavadinimai ilgesni nei 7 raidės. Rezultatą išvesti į konsolę;

const salys_section = document.querySelectorAll('.salys span')

let daugiau_7 = 0;

for(let i = 0; i < salys_section.length; i++){
  let salys = salys_section[i].innerHTML

  if(salys.length > 7){
    daugiau_7++
  }
}
console.log(`Vardas ilgesnis nei 7-ios raides: ${daugiau_7}, `)

console.log('08-------------------------------------')
//Paskaičiuoti ko daugiau pliusų ar minusų klasėje “pliusai-minusai”. Rezultatą išvesti į konsolę;

const plius_minus_section = document.querySelectorAll('.pliusai-minusai span')

let plius_counter = 0;
let minus_counter = 0;

for(let i = 0; i < plius_minus_section.length; i++){
  let simbolis = plius_minus_section[i].innerHTML

  if(simbolis === '+'){
    plius_counter++
  } else {
    minus_counter++
  }
  
}

console.log(`+ sk: ${plius_counter}; - sk: ${minus_counter}`)

console.log('09-------------------------------------')
//Paskaičiuoti kiek minusų yra klasėje “keisti-minusai”. Rezultatą išvesti į konsolę;

const keisti_minusai_section = document.querySelectorAll('.keisti-minusai *');

let plius_counter2 = 0;
let minus_counter2 = 0;

for(let i = 0; i < keisti_minusai_section.length; i++){
  let elementas = keisti_minusai_section[i].innerHTML
  if( elementas === '+'){
    plius_counter2++
  } else {
    minus_counter2++
  }
}
console.log(`+ sk: ${plius_counter2}; - sk: ${minus_counter2}`)

console.log('10-------------------------------------')
// Paskaičiuoti kiek klasėje “raudonos-salys” yra raudonų šalių. Rezultatą išvesti į konsolę;

const raudonos_salys_section = document.querySelectorAll('.raudonos-salys span');

let  raudonos_counter = 0;

for(let i = 0; i <raudonos_salys_section.length; i++){

    const salis = raudonos_salys_section[i];
  
    if (salis.style.color === 'crimson') { 
      raudonos_counter++;
    }
}
console.log(`Raudonos salys: ${raudonos_counter};`)