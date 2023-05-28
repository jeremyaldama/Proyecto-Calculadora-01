const teclas = document.querySelector(".teclas");
const resultado = document.querySelector("input");
const toOperationsRecordSectionButton =
  document.getElementById("history-button");

let resultado_cal = "";
let sol;

function chMode() {
  mode.className == "fa-solid fa-sun"
    ? (mode.className = "fa-solid fa-moon")
    : (mode.className = "fa-solid fa-sun");

  let body = document.querySelector("body");
  mode.classList.contains("fa-sun")
    ? body.setAttribute("data-theme", "dark")
    : body.setAttribute("data-theme", "light");
}

const updateDisplay = function (teclaValor) {
  resultado_cal += teclaValor;
  resultado.value = resultado_cal;
  if (teclaValor === "C") {
    resultado.value = "";
    resultado_cal = "";
  }
};

const showResult = function () {
  try {
    sol = Number.parseFloat(eval(resultado_cal)).toFixed(2);
    if (isNaN(sol)) {
      throw new Error("Operación inválida");
    }
    resultado.value = sol;
    resultado_cal = sol;
  } catch (error) {
    resultado.value = "Error";
  }
}

const calc = function (e) {
  const tecla = e.target;
  const teclaValor = tecla.textContent;

  if (teclaValor === "=") {
    showResult();
  } else {
    updateDisplay(teclaValor);
  }
};

teclas.addEventListener("click", function (e) {
  const tecla = e.target;
  if (tecla.classList.contains("tecla")) {
    calc(e);
  }
});

document.addEventListener("keypress", function (e) {
  console.log(e);
  if (
    (e.key >= 0 && e.key <= 9) ||
    e.key === "*" ||
    e.key === "/" ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "."
  ) {
    updateDisplay(e.key);
  }
  if (e.key === "Enter") {
    showResult();
  }
});
