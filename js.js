const teclas = document.querySelector(".teclas");
const resultado = document.querySelector("input");
let resultado_cal = "";
let sol;

teclas.addEventListener("click", function (e) {
  const tecla = e.target;
  console.log(tecla);

  if (tecla.classList.contains("tecla")) {
    const teclaValor = tecla.textContent;

    if (teclaValor === "=") {
      sol = Number.parseFloat(eval(resultado_cal)).toFixed(2);
      resultado.value = sol;
      resultado_cal = sol;
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
});
