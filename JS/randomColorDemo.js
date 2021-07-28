const button = document.querySelector("button")
const text = document.querySelector("h2")
button.addEventListener('click', function () {
    const red = Math.floor(Math.random() * 255)
    const green = Math.floor(Math.random() * 255)
    const blue = Math.floor(Math.random() * 255)
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
    text.textContent = `${red}, ${green}, ${blue}`
})