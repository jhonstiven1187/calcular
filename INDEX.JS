// Función para sumar dos números
function sumar(num1, num2) {
    return num1 + num2;
  }
  
  // Función para restar dos números
function restar(a, b) {
  return a - b;
}

// Función para multiplicar dos números
function multiplicar(a, b) {
  return a * b;
}

// Función para dividir dos números
function dividir(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Error: No se puede dividir por cero";
  }
}

// Función para calcular el factorial de un número
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}


// Función para calcular el exponente de un número
function exponente(base, exponenteNum) {
  return Math.pow(base, exponenteNum);
}

// Función para calcular la raíz cuadrada de un número
function raizCuadrada(num) {
  if (num >= 0) {
    return Math.sqrt(num);
  } else {
    return "Error: No se puede calcular la raíz cuadrada de un número negativo";
  }
}

  // Función principal del programa
  function calculadora() {
    var opcion = prompt(
      "Elija una opción:\n1. Suma\n2. Resta\n3. Multiplicación\n4. División\n5. Factorial\n6. Exponente\n7. Raíz cuadrada"
    );
    var num1 = parseFloat(prompt("Ingrese el primer número:"));
    var num2, resultado;
  
    if (opcion !== "5" && opcion !== "7") {
      num2 = parseFloat(prompt("Ingrese el segundo número:"));
    }
  
    switch (opcion) {
      case "1":
        resultado = sumar(num1, num2);
        break;
      case "2":
        resultado = restar(num1, num2);
        break;
      case "3":
        resultado = multiplicar(num1, num2);
        break;
      case "4":
        resultado = dividir(num1, num2);
        break;
      case "5":
        resultado = factorial(num1);
        break;
      case "6":
        var exponenteNum = parseFloat(prompt("Ingrese el exponente:"));
        resultado = exponente(num1, exponenteNum);
        break;
      case "7":
        resultado = raizCuadrada(num1);
        break;
      default:
        resultado = "Opción no válida";
        break;
    }
  
    alert("El resultado es: " + resultado);
  }
  
  // Llamar a la función principal
  calculadora();