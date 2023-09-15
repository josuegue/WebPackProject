import { dividir, multiplicar, restar, sumar} from "../module/calculos.js";
function calcular(event) {
    event.preventDefault();

    const numero1 = parseFloat(document.getElementById('numero1').value);
    const numero2 = parseFloat(document.getElementById('numero2').value);
    const operacion = document.getElementById('operacion').value;
    let resultado;

    switch (operacion) {
        case 'suma':
            resultado = sumar(numero1, numero2);
            break;
        case 'resta':
            resultado = restar(numero1, numero2);
            break;
        case 'multiplicacion':
            resultado = multiplicar(numero1, numero2);
            break;
        case 'division':
            resultado = dividir(numero1, numero2);
            break;
        default:
            resultado = 'Operación no válida';
            break;
    }

    document.getElementById('result').textContent = `Resultado: ${resultado}`;
}

// Asignar el evento submit al formulario
document.getElementById('calcForm').addEventListener('submit', calcular);