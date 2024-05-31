/// PRÁCTICA DE CONVERSIONES DE TEMPERATURAS

function solicitarTemperatura() {
    let temperaturaCelsius;
    while (true) {
        let celsius = prompt("Ingrese la temperatura en grados Celsius:");
        temperaturaCelsius = parseFloat(celsius);
        if (!isNaN(temperaturaCelsius)) {
            break;
        } else {
            alert("Por favor, introduce un número válido.");
        }
    }
    return temperaturaCelsius;
}

function temperaturaKelvin (temperaturaCelsius) {
    let kelvin = temperaturaCelsius + 273.15;
    return kelvin;
}

function temperaturaFahrenheit (temperaturaCelsius) {
    let fahrenheit = (temperaturaCelsius * (9/5)) + 32;
    return fahrenheit;
}

let temperaturaCelsius = solicitarTemperatura();
let resultadoKelvin = temperaturaKelvin(temperaturaCelsius);
let resultadoFahrenheit = temperaturaFahrenheit(temperaturaCelsius);

console.log(`Grados Kelvin: ${resultadoKelvin}`);
console.log(`Grados Fahrenheit: ${resultadoFahrenheit}`);