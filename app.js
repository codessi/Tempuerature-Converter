const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector("#fahrenheit > input");
const kelvinInput = document.querySelector("#kelvin  > input");

console.log(celciusInput);

function roundNum(num) {
    return Math.round(num * 100) / 100;
}



function celciusToFahrenheitAndKelvin() {
    var cTemp = parseFloat(celciusInput.value);
    const fTemp = (cTemp * (9 / 5) + 32);
    const kTemp = cTemp + 273.15;
    fahrenheitInput.value = roundNum(fTemp);
    kelvinInput.value = roundNum(kTemp);
}

function fahrenheitToCelciusAndKelvin() {
    const fTemp = parseFloat(fahrenheitInput.value);
    const cTemp = (fTemp - 32) * (5 / 9);
    const kTemp = (fTemp - 32) * (5 / 9) + 273.15;
    celciusInput.value = roundNum(cTemp);
    kelvinInput.value = roundNum(kTemp);
}

function kelvinToCelciusAndFahrenheit() {
    const kTemp = parseFloat(kelvinInput.value);
    const cTemp = kTemp - 273.15;
    const fTemp = (kTemp - 273.15) * (9 / 5) + 32;
    celciusInput.value = roundNum(cTemp);
    fahrenheitInput.value = roundNum(fTemp);

}




celciusInput.addEventListener('input', celciusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener("input", fahrenheitToCelciusAndKelvin);
kelvinInput.addEventListener("input", kelvinToCelciusAndFahrenheit);


//  when celcius is input  then take that value then
// multipl.   (x celcus * 9/5) +32 = y fahrenheit
// hen insert in to fahrenheitInput.innerHtml?