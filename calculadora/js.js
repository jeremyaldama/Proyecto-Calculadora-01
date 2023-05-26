const teclas = document.querySelector(".teclas");
const resultado = document.querySelector("input");
const toOperationsRecordSectionButton = document.getElementById('history-button');
let resultado_cal = "";
let sol;
function chMode() {
    mode.className == 'fa-solid fa-sun'?
    mode.className = 'fa-solid fa-moon':
    mode.className = 'fa-solid fa-sun';

    let body = document.querySelector('body');
    mode.classList.contains('fa-sun') ?
    body.setAttribute('data-theme', 'dark') :
    body.setAttribute('data-theme', 'light') ;
}

teclas.addEventListener("click", function (e) {
  const tecla = e.target;
  console.log(tecla);

  if (tecla.classList.contains("tecla")) {
    const teclaValor = tecla.textContent;

    if (teclaValor === "=") {
        try {
          sol = Number.parseFloat(eval(resultado_cal)).toFixed(2);
          if (isNaN(sol)) {
            throw new Error("Operación inválida");
          }
          resultado.value = sol;
          resultado_cal = sol;
        } catch (error) {
          console.error(error);
          resultado.value = "Error";
        }
      } else {
        console.log(teclaValor);
        resultado_cal += teclaValor;
        resultado.value = resultado_cal;
        console.log("cal: ", resultado_cal);
        if (teclaValor === "C") {
          resultado.value = "";
          resultado_cal = "";
        }
      }
  }
}
);
