
function celsuisToFahrenheit(celsius){
  return (celsius * 9/5) + 32; 
}

function fahrenheitToCelsius(fahrenheit){
  return (fahrenheit - 32) * 5/9;
}

function lbsToKilo(lbs){
  return lbs/2.205;
}

function kiloToLbs(kilo){
  return kilo * 2.205;
}

module.exports.celsuisToFahrenheit = celsuisToFahrenheit;
module.exports.fahrenheitToCelsius = fahrenheitToCelsius;
module.exports.lbsToKilo = lbsToKilo;
module.exports.kiloToLbs = kiloToLbs;