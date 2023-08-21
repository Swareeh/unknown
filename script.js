const button = document.getElementById('button')
const input = document.getElementById('input')
const file = document.getElementById('file')
const msg = document.getElementById('msg')

button.addEventListener("click", function () {
    const input_value = document.getElementById('input').value
    if (input_value == 'password') {
        file.style.display = 'block'
        msg.style.display = 'block'
    } else {
        alert('Incorrect Code')
    }
})