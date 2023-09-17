import { celsiusToFahrenheit, fahrenheitToCelsius } from '../module/aggregator.js'

const convertBtn = document.querySelector('#convertBtn');
const result = document.querySelector('#result');

convertBtn.addEventListener("click", () => {
    const temperature = parseFloat(document.querySelector("#temperature").value);
    const unitFrom = document.querySelector("#unitFrom").value;
    const unitTo = document.querySelector("#unitTo").value;

    let convertedTemperature;
    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
        convertedTemperature = temperature * 9 / 5 + 32;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
        convertedTemperature = (temperature - 32) * 5 / 9;
    } else {
        convertedTemperature = temperature;
    }

    result.innerHTML = `Resultado: ${convertedTemperature} ${unitTo}`;
});