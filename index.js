const displayValorAterior = document.getElementById('valor-anterior');
const displayValorActual = document.getElementById('valor-actual');
const botonesNumero = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador')

const display = new Display(displayValorAterior, displayValorActual);

botonesNumero.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
})


botonesOperadores.forEach(boton => {
    boton.addEventListener('click', ()=> display.computar(boton.valor))
})