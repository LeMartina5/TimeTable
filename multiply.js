const input = document.querySelector("#numInput");
const btn = document.querySelector("#calcBtn");
const table = document.querySelector('#table');

btn.addEventListener('click', printTable);

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        btn.click();
    }
})

function printTable() {
    if (input.value === "") {
        alert("Please choose a number");
    } else {
        clear();
        let num = input.value;
        for (let i = 1; i <= 10; i++) {
            const result = num * i;
            let newLine = document.createElement('li');
            newLine.innerHTML = `${num} x ${i} = ${result}`;
            table.appendChild(newLine);
        }
        input.value = "";
    }
}

function clear() {
    const allLi = document.querySelectorAll('li');
    for (line of allLi) {
        line.remove();
    }
}