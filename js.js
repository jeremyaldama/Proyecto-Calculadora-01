const teclas = document.querySelector(".teclas");
const resultado = document.querySelector("input");
const historial = document.querySelector(".historial");
const historialList = document.querySelector("ul");

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
  resultado_cal += `${teclaValor}`;
  resultado.value = resultado_cal;
  if (teclaValor === "C") {
    resultado.value = "";
    resultado_cal = "";
  }
};

const showResult = function () {
  try {
    sol = Number.parseFloat(eval(resultado_cal)).toFixed(2);
    if (!isFinite(sol)) {
      throw new Error("Operación inválida");
    }

    if (sol.slice(-2) === "00") {
      sol = sol.slice(0, -3);
    }

    let html = `<li>${resultado_cal + " = " + sol}</li>
                <hr>`;
    historialList.insertAdjacentHTML("afterBegin", html);
    resultado.value = sol;
    resultado_cal = sol;
  } catch (error) {
    resultado.value = "Error";
  }
};

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
  if (
    tecla.classList.contains("history-btn") ||
    tecla.tagName == "svg" ||
    tecla.tagName == "path"
  ) {
    historial.classList.toggle("hidden");
  }
  else if (tecla.classList.contains("tecla")) {
    calc(e);
  };
  console.dir(tecla);
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
