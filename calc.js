var ops = document.querySelector('.op')
var nums = document.querySelector('.number')
var container = document.querySelector('.button-container')
var left
var op
var right
var total


container.addEventListener('click', function(e) {
    var isNumber = e.target.classList.contains('number');
    var val = e.target.textContent

    if (isNumber) {
        display(val)
        if (left === undefined) {
            left = parseInt(val, 10)
        } else {
            right = parseInt(val, 10)
        }
    } else {
        op = val
    }
})

document.querySelector('#equals').addEventListener('click', function(e) {
    display(eval([left, op, right].join('')))
})

function display(x) {
    var panel = document.querySelector('.panel')
    panel.textContent = x
}
