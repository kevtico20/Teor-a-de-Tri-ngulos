function esTrianguloValido(a, b, c) {
    return a + b > c && a + c > b && b + c > a;
}

function clasificarPorLados(a, b, c) {
    if (a === b && b === c) {
        return "Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Isósceles";
    } else {
        return "Escaleno";
    }
}

function clasificarPorAngulos(anguloA, anguloB, anguloC) {
    if (anguloA === 90 || anguloB === 90 || anguloC === 90) {
        return "Rectángulo";
    } else if (anguloA > 90 || anguloB > 90 || anguloC > 90) {
        return "Obtusángulo";
    } else {
        return "Acutángulo";
    }
}

function calcularArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

function calcularPerimetro(a, b, c) {
    return a + b + c;
}