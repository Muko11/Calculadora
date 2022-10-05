function pintarOperador(operador) {
    document.getElementById('operador').innerHTML = operador;
}

function rellenarNumeros(numero1, numero2) {
    if (document.getElementById('operador').innerHTML == "") {
        document.getElementById('numero1').innerHTML += numero1;
    } else {
        document.getElementById('numero2').innerHTML += numero2;
    }
}

function limpiar() {
    document.getElementById('numero1').innerHTML = "";
    document.getElementById('numero2').innerHTML = "";
    document.getElementById('operador').innerHTML = "";
    if (document.getElementById('resultado').innerHTML = "Aquí aparece el resultado") {
        document.getElementById('resultado').innerHTML = "Aquí aparece el resultado";
    } else {
        document.getElementById('resultado').innerHTML = "";
    }

}

function calcularOperacion() {
    if (document.getElementById('numero1').innerHTML == "") {
        document.getElementById('resultado').innerHTML = "Introduzca el primer valor numérico";
    } else if (document.getElementById('operador').innerHTML == "") {
        document.getElementById('resultado').innerHTML = "Introduzca el operador";
    } else if (document.getElementById('numero2').innerHTML == "") {
        document.getElementById('resultado').innerHTML = "Introduzca el segundo valor numérico";
    } else {
        if (document.getElementById('operador').innerHTML == "+") {
            sumar();
        } else if (document.getElementById('operador').innerHTML == "-") {
            restar();
        } else if (document.getElementById('operador').innerHTML == "x") {
            multiplicar();
        } else {
            dividir();
        }
    }
}

function sumar() {
    suma = parseFloat(document.getElementById('numero1').innerHTML) + parseFloat(document.getElementById('numero2').innerHTML);
    document.getElementById('resultado').innerHTML = suma;

}

function restar() {
    resta = parseFloat(document.getElementById('numero1').innerHTML) - parseFloat(document.getElementById('numero2').innerHTML);
    document.getElementById('resultado').innerHTML = resta;

}

function multiplicar() {
    multiplicacion = parseFloat(document.getElementById('numero1').innerHTML) * parseFloat(document.getElementById('numero2').innerHTML);
    document.getElementById('resultado').innerHTML = multiplicacion;

}

function dividir() {
    division = parseFloat(document.getElementById('numero1').innerHTML) / parseFloat(document.getElementById('numero2').innerHTML);
    document.getElementById('resultado').innerHTML = division;

}