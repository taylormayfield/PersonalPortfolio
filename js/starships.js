import { starships } from '../assets/starships.js'

let contentArea = document.querySelector('.content')

starships.forEach(ship => {
    let shipDiv = document.createElement('div')
    let shipName = document.createElement('h3')
    let shipPic = document.createElement('img')

    shipDiv.appendChild(shipName)
    shipDiv.appendChild(shipPic)
    contentArea.appendChild(shipDiv)

    let shipNum = getShipNumber(ship.url)

    shipName.textContent = ship.name
    shipPic.src = 'https://starwars-visualguide.com/assets/img/starships/${shipNum}.jpg`

    mainArea.appendChild(shipDiv)
})

function getShipNumber(charURL) {
    let end = shipURL.lastIndexOf('/')
    let shipID = shipURL.substring(end - 2, end)
    if (shipID.indexOf('/') !== -1) {
        return shipID.slice(1, 2)
    } else {
        return shipID
    }
} 