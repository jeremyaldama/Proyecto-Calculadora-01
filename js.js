const teclas = document.querySelector('.teclas');
const resultado = document.querySelector('input');
let resultado_cal = '';
let sol;

teclas.addEventListener('click', function(e) {
    const tecla = e.target;
    console.log(tecla);
    const teclaValor = tecla.textContent;

    if (teclaValor === '=') {
        sol = eval(resultado_cal);
        resultado.value = sol;    
    }
    console.log(teclaValor);
    resultado_cal += teclaValor;
    console.log("cal: ", resultado_cal);
    if (teclaValor === 'C') {
        resultado.value = '';
        resultado_cal = '';
    }
});