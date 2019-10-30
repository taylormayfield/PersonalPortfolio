import { planets } from '../assets/planets.js'

let contentArea = document.querySelector('.content')

planets.forEach(planet => {
    let planetDiv = document.createElement('div')
    let planetName = document.createElement('h3')
    let planetPic = document.createElement('img')

    planetDiv.appendChild(planetName)
    planetDiv.appendChild(planetPic)
    contentArea.appendChild(planetDiv)

    let planetNum = getCharNumber(planet.url)

    planetName.textContent = planet.name
    planetPic.src = `https://starwars-visualguide.com/assets/img/planets/${planetNum}.jpg`

    
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