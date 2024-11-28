function realizarOperacion(num1, num2, operacion) {
    if (operacion == "suma") {
        return num1 + num2;
    } else if (operacion == "resta") {
        return num1 - num2;
    } else if (operacion == "multiplicacion") {
        return num1 * num2;
    } else if (operacion == "division") {
        if (num2 == 0) {
            return "Error: No se puede dividir por cero.";
        } else {
            return num1 / num2;
        }
    } else {
        return "Error: Operación no válida.";
    }
};

while (true) {
    let num1 = parseFloat(prompt("Ingrese el primer número:"));
    let num2 = parseFloat(prompt("Ingrese el segundo número:"));
    let operacion = prompt("Ingrese la operación (suma, resta, multiplicacion, division):").toLowerCase();
    let resultado = realizarOperacion(num1, num2, operacion);

    alert("El resultado de la operación es: " + resultado);

    let continuar = prompt("¿Desea realizar otra operación? (si/no):").toLowerCase();
    if (continuar !== "si" && continuar !== "sí"){
        alert("¡Gracias por usar la calculadora! Hasta luego.");
        break;
    };
};