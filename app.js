// https://www.omnicalculator.com/finance/carried-interest

// calculators not finished

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const carrydistributionRadio = document.getElementById('carrydistributionRadio');
const initialfundvalueRadio = document.getElementById('initialfundvalueRadio');
const finalfundvalueRadio = document.getElementById('finalfundvalueRadio');
const hurdlerateRadio = document.getElementById('hurdlerateRadio');
const carriedinterestRadio = document.getElementById('carriedinterestRadio');

let carrydistribution;
let initialfundvalue = v1;
let finalfundvalue = v2;
let hurdlerate = v3;
let carriedinterest = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

carrydistributionRadio.addEventListener('click', function() {
  variable1.textContent = 'Initial fund value';
  variable2.textContent = 'Final fund value';
  variable3.textContent = 'Hurdle rate';
  variable4.textContent = 'Carried interest';
  initialfundvalue = v1;
  finalfundvalue = v2;
  hurdlerate = v3;
  carriedinterest = v4;
  result.textContent = '';
});

initialfundvalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Carry distribution';
  variable2.textContent = 'Final fund value';
  variable3.textContent = 'Hurdle rate';
  variable4.textContent = 'Carried interest';
  carrydistribution = v1;
  finalfundvalue = v2;
  hurdlerate = v3;
  carriedinterest = v4;
  result.textContent = '';
});

finalfundvalueRadio.addEventListener('click', function() {
  variable1.textContent = 'Carry distribution';
  variable2.textContent = 'Initial fund value';
  variable3.textContent = 'Hurdle rate';
  variable4.textContent = 'Carried interest';
  carrydistribution = v1;
  initialfundvalue = v2;
  hurdlerate = v3;
  carriedinterest = v4;
  result.textContent = '';
});

hurdlerateRadio.addEventListener('click', function() {
  variable1.textContent = 'Carry distribution';
  variable2.textContent = 'Initial fund value';
  variable3.textContent = 'Final fund value';
  variable4.textContent = 'Carried interest';
  carrydistribution = v1;
  initialfundvalue = v2;
  finalfundvalue = v3;
  carriedinterest = v4;
  result.textContent = '';
});

carriedinterestRadio.addEventListener('click', function() {
  variable1.textContent = 'Carry distribution';
  variable2.textContent = 'Initial fund value';
  variable3.textContent = 'Final fund value';
  variable4.textContent = 'Hurdle rate';
  carrydistribution = v1;
  initialfundvalue = v2;
  finalfundvalue = v3;
  hurdlerate = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(carrydistributionRadio.checked)
    result.textContent = `Carry distribution = ${computecarrydistribution() >= 0 ? computecarrydistribution().toFixed(2) : '-'}`;

  else if(initialfundvalueRadio.checked)
    result.textContent = `Initial fund value = ${computeinitialfundvalue().toFixed(2)}`;

  else if(finalfundvalueRadio.checked)
    result.textContent = `Final fund value = ${computefinalfundvalue().toFixed(2)}`;

  else if(hurdlerateRadio.checked)
    result.textContent = `Hurdle rate = ${computehurdlerate().toFixed(2)}`;

  else if(carriedinterestRadio.checked)
    result.textContent = `Carried interest = ${computecarriedinterest().toFixed(2)}`;
})

// calculation

function computecarrydistribution() {
  return (Number(finalfundvalue.value) - Number(initialfundvalue.value) * (1 + (Number(hurdlerate.value) / 100))) * (Number(carriedinterest.value) / 100);
}

function computeinitialfundvalue() {
  return Number(finalfundvalue.value) - ((Number(carrydistribution.value) / (Number(carriedinterest.value) / 100)) / (1 + (Number(hurdlerate.value) / 100)));
}

function computefinalfundvalue() {
  return ((Number(carrydistribution.value) / (Number(carriedinterest.value) / 100)) / (1 + (Number(hurdlerate.value) / 100))) + Number(initialfundvalue.value);
}

function computehurdlerate() {
  return (((Number(finalfundvalue.value) - (Number(carrydistribution.value) / (Number(carriedinterest.value) / 100))) / Number(initialfundvalue.value)) + 1) * 100;
}

function computecarriedinterest() {
  return (Number(carrydistribution.value) / (Number(finalfundvalue.value) - Number(initialfundvalue.value) * (1 + (Number(hurdlerate.value) / 100)))) * 100;
}