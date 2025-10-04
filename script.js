const adviceId = document.getElementById('advice-id');
const adviceText = document.getElementById('advice-text');
const diceBtn = document.getElementById('dice-btn');

async function getAdvice() {
  const res = await fetch('https://api.adviceslip.com/advice');
  const data = await res.json();
  adviceId.textContent = data.slip.id;
  adviceText.textContent = `“${data.slip.advice}”`;
}

diceBtn.addEventListener('click', getAdvice);

// Opcional: cargar un consejo al iniciar
window.addEventListener('DOMContentLoaded', getAdvice);