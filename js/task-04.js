const result = document.querySelector('#value');
const dec = document.querySelector('button[data-action="decrement"]');
// console.log(dec)
const inc = document.querySelector('button[data-action="increment"]');
// console.log(inc)

dec.addEventListener('click', onDecBtnClick);
inc.addEventListener('click', onIncBtnClick);

let counterValue = 0;

function onDecBtnClick(event) {
    counterValue -= 1;
    result.textContent = counterValue;
}

function onIncBtnClick(event) {
    counterValue += 1;
    result.textContent = counterValue;
}

