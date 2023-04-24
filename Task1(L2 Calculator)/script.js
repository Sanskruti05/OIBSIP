let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
let screenValue = ' ';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('button text is ', buttonText);

        if (buttonText == 'X') {
            buttonText = '*';
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'AC') {
            screenValue = ' ';
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}

function sin() {
    screenValue = Math.sin(screenValue);
    screen.value = screenValue;
}
function cos() {
    screenValue = Math.cos(screenValue);
    screen.value = screenValue;
}
function tan() {
    screenValue = Math.tan(screenValue);
    screen.value = screenValue;
}
function pow() {
    screenValue = Math.pow(screenValue, 2);
    screen.value = screenValue;
}
function sqrt() {
    screenValue = Math.sqrt(screenValue, 2);
    screen.value = screenValue;
}
function factorial() {
    var i, num, f;
    f = 1
    num = screenValue;
    for (i = 1; i <= num; i++) {
        f = f * i;
    }

    i = i - 1;

    screenValue = f;
    screen.value = screenValue;
}
function backspace() {
    screenValue = screenValue.substring(0, screenValue.length - 1);
    screen.value = screenValue;
}