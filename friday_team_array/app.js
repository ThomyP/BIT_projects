
// 1. Parašykite f-ją, kuri išvestu masyvo elementus konsolėje

//masyvas skaiciai
const skaiciai =  [1, 2, 3, 4, 5]

function pirma(a){
  for(let i = 0; i < a. length; i ++ ){
  console. log(a[i])
  }
}

pirma(skaiciai)

console.log('02------------------------------')
//2. Sukurkite tuščią masyvą
const A =  [] // tušcias masyvas

//Įdėkite 4 elementus į masyvą
A.push('krokodilas','antis','ziurke','voras') 

// Pridėkite 1 elementą į masyvo galą
A.push('zasis')

console.log(A)


//Ištrinkite vidurinį elementą ir išveskite jį į consolę


function vidurys(n) {
  const middleIndex = Math.floor(n.length / 2);  
  const vidurinis_elementas = n[middleIndex];    

  n.splice(middleIndex, 1);  // išimamas vienas vidurinis elementas 'n

  console.log("Vidurinis elementas:", vidurinis_elementas); 
  console.log("Atnaujintas Masyvas:", n); 
}


vidurys(A);


//Išveskite į consolę masyvą pasirašytos f-jos pagalba.
function zveris(A){
  for(let i = 0; i < A.length; i ++ ){
  console. log(A[i])
  }
}

zveris(A)

//Pakeiskite 2 elementą nauja reikšme
console.log('------------------------------')

A[1] = 'bebras'
zveris(A)
//Pridėkite du naujus elementus į masyvo pradžią

console.log('------------------------------')

A.unshift('lokys','ryklys')
zveris(A)


console.log('03------------------------------')
//Parašykite f-ją kur konvertuotų masyvą į stringą

let sringas = '';

function keitimas(arr) {
  for (let k = 0; k < arr.length; k++) {
    sringas += arr[k];
  }
  return sringas;
}

console.log(keitimas(skaiciai));


console.log('04------------------------------')
//4. Parašykite f-ją kuri apverstų masyvą

function apverst(C) {
  const apverstasMasyvas = [];
  for (let i = C.length - 1; i >= 0; i--) {
      apverstasMasyvas.push(C[i]);
  }
  return apverstasMasyvas;
}

console.log(apverst(A));


console.log('5------------------------------')
//5. Parašykite f-ją kuri gražintų paskutinį masyvo elementą


function paskutinis_elementas(n){
  return n[n.length - 1];
}

console.log(paskutinis_elementas(A))



console.log('6------------------------------')
//6. Parašykite f-ją kuriai būtų perduodamas parametras masyvas iš skaičių.
//  Ir gražinamas masyvas kurio elementai yra padauginti iš 2

{
  let m = [1, 2, 3, 4, 5, 6]
function multipliedArray (m) {
    for (let i = 0; i < m.length; i++) {
        m[i] = m[i] * 2;
    }
    return m;
}
console.log(multipliedArray(m))
 
}

//7. Parašykite f-ją, kuri konvertuotų visus masyvo elementus į stringus
console.log('7------------------------------')
{

  let array1 = [1, 2, "a", "b"];

  function transform(k) {
    let strings = []; 
  
    for (let i = 0; i < k.length; i++) {
      strings.push(String(k[i]));  //STRING pakeičia visus elemntus į string
    }
  
    return strings; 
  }
  
  console.log(transform(array1)); 

}

console.log('8------------------------------')
// 8. Išvesti į consolę visą daugybos lentelę ciklas cikle pagalba

{

  for(let j = 1; j < 11 ; j++){

    for(let i = 0; i < 11; i++){
    console.log(`${j} * ${i}  = ${j * i} `)
      
    }
    
  }

}
















 





