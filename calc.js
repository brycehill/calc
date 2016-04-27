var container = document.querySelector('.button-container')
var leftExp = (a) => a  // identity
var total

container.addEventListener('click', (e) => {
    var isNumber = e.target.classList.contains('number');
    var isOp = e.target.classList.contains('op');
    var val = e.target.textContent

    if (isOp) {
        leftExp = ops[val](total)
        return
    }

    total = leftExp(parseInt(val, 10))
    display(total)
})

function display(x) {
    var panel = document.querySelector('.panel')
    panel.textContent = x
}

var ops = {
    '+': (a) => (b) => a + b,
    '-': (a) => (b) => a - b,
    '*': (a) => (b) => a * b,
    '/': (a) => (b) => a / b
}
