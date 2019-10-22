import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('Hey, I am JavaScript on your page!')

console.log('films')

let mainArea = document.querySelector('#main')

films.forEach(function(film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    filmTitle.textContent = films.title
    filmCrawl.innerText = film.opening_crawl

    mainArea.appendChild(filmDiv)
})

people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('h3')
    let pic = document.createElement('img')
    
    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = gender.name
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    mainArea.appendChild(personDiv)
})

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end -2, end)
    if(charID.indexOf('/') !== -1 ) {
        return charID.slice(1,2)
    } else {
        return charID
    }
    }

const maleCharacters = people.filter(person => person.gender === 'male')
console.log(maleCharacters)
const femaleCharacters = people.filter(person => person.gender === 'female')
console.log(femaleCharacters)