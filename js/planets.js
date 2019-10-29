import { planets } from '../assets/planets.js'

starships.forEach(planet => {
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