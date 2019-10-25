import { starships } from '../assets/starships.js'

let contentArea = document.querySelector('.content')

starships.forEach(ship => {
    let shipDiv = document.createElement('div')
    let shipName = document.createElement('h3')
    let shipPic = document.createElement('img')

    shipDiv.appendChild(shipName)
    shipDiv.appendChild(shipPic)
    contentArea.appendChild(shipDiv)

    let shipNum = getCharNumber(ship.url)

    shipName.textContent = ship.name
    shipPic.src = `https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`

    
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
} 