const attributes = {
    fontSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
}

attributes.fontSizeControl.addEventListener('input', changeFontSize);

function changeFontSize(event) {
    attributes.text.style.fontSize = `${event.currentTarget.value}px`;
}