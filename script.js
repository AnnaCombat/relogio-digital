const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let todayDate = new Date();
    let hr = todayDate.getHours();
    let min = todayDate.getMinutes();
    let sc = todayDate.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sc < 10) sc = '0' + sc;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = sc;
});