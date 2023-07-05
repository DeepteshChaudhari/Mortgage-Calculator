const inputs = document.querySelectorAll(`.inputs`);
const outputs = document.querySelector(`.outputDiv`);
const outputButton = document.querySelector(`.outputBtn`);

outputButton.addEventListener(`click`, calculate);

function getValue(p, r, n) {
  return (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
}

function calculate() {
  const principal = Number(inputs[0].value);
  const interestRate = Number(inputs[1].value) / 100;
  const loanTerm = Number(inputs[2].value) * 12;

  const monthlyPayment = getValue(principal, interestRate / 12, loanTerm);
  outputs.innerText = `Monthly payment of your Mortgage is ${monthlyPayment.toFixed(
    2
  )}`;
}
