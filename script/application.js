const button = document.querySelector('#show-hint');
const caixas = document.querySelectorAll('td');
const timer = document.querySelector('#timer');
const youLose = document.querySelector('#youLose');
let intervalId = null;
let segundos = 0;

const showHint = () => {
  const hint = document.querySelector('.hint');
  hint.classList.toggle('active');
  startTime();
}
const startTime = () => {
  intervalId = setInterval(() => {
    segundos += 1;
    if (segundos < 6) {
      timer.innerText = segundos;
    } else {
      youLose.innerText = "YOU LOSE!!!";
    }
  }, 1000)
}

button.addEventListener('click', showHint);

const Eventos = (event) => {
  const caixaClicada = event.currentTarget;
  const vazio = document.querySelector('.empty');

  const indexCell = caixaClicada.cellIndex
  const indexRow = caixaClicada.parentElement.rowIndex
  const emptyIndexCell = vazio.cellIndex
  const emptyIndexRow = vazio.parentElement.rowIndex

  const sameRow = emptyIndexRow === indexRow;
  const adjRow = emptyIndexRow === indexRow - 1 || emptyIndexRow === indexRow + 1;
  const sameCol = emptyIndexCell === indexCell;
  const adjCol = emptyIndexCell === indexCell - 1 || emptyIndexCell === indexCell + 1;

  if (sameRow && adjCol || sameCol && adjRow){
    vazio.classList.remove('empty');
    vazio.innerHTML = caixaClicada.innerHTML;
    caixaClicada.classList.add('empty');
    caixaClicada.innerHTML = '';
  }

}

caixas.forEach((caixa) => {
  caixa.addEventListener('click', Eventos)
})

