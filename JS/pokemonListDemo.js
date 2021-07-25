

let container = document.getElementById('container')

for (let i = 1; i < 400; i++) {
    const pokemonEntry = document.createElement('div')
    pokemonEntry.classList.add('pokemon')
    const label = document.createElement('span')
    label.innerText = `#${i}`
    const newImage = document.createElement("img")
    newImage.src = `http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
    pokemonEntry.appendChild(newImage)
    pokemonEntry.appendChild(label)
    container.appendChild(pokemonEntry)
}