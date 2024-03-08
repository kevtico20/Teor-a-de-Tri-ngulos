const ladoAA = document.getElementById('txtSideA');
const ladoBB = document.getElementById('txtSideB');
const ladoCC = document.getElementById('txtSideC');
const anguloAA = document.getElementById('anguloA');
const anguloBB = document.getElementById('anguloB');
const anguloCC = document.getElementById('anguloC');

ladoAA.addEventListener('input', mostrarResultado);
ladoBB.addEventListener('input', mostrarResultado);
ladoCC.addEventListener('input', mostrarResultado);
anguloAA.addEventListener('input', mostrarResultado);
anguloBB.addEventListener('input', mostrarResultado);
anguloCC.addEventListener('input', mostrarResultado);


function mostrarResultado() {
    const ladoA = parseFloat(document.getElementById('txtSideA').value);
    const ladoB = parseFloat(document.getElementById('txtSideB').value);
    const ladoC = parseFloat(document.getElementById('txtSideC').value);
    const anguloA = parseFloat(document.getElementById('anguloA').value);
    const anguloB = parseFloat(document.getElementById('anguloB').value);
    const anguloC = parseFloat(document.getElementById('anguloC').value);


    if (!isNaN(ladoA) && !isNaN(ladoB) && !isNaN(ladoC) && !isNaN(anguloA) && !isNaN(anguloB) && !isNaN(anguloC)) {

        const clasificacionLados = clasificarPorLados(ladoA, ladoB, ladoC);
        const clasificacionAngulos = clasificarPorAngulos(anguloA, anguloB, anguloC);

        const area = calcularArea(ladoA, ladoB, ladoC);
        const perimetro = calcularPerimetro(ladoA, ladoB, ladoC);

        document.getElementById('resultado-lados').textContent = clasificacionLados;
        document.getElementById('resultado-angulos').textContent = clasificacionAngulos;
        document.getElementById('resultado-area').textContent = area.toFixed(2);
        document.getElementById('resultado-perimetro').textContent = perimetro.toFixed(2);

    }
}

document.getElementById('calcular-btn').addEventListener('click', function () {

    document.getElementById('resultado-lados').textContent = "";
    document.getElementById('resultado-angulos').textContent = "";
    document.getElementById('resultado-area').textContent = "";
    document.getElementById('resultado-perimetro').textContent = "";


})






