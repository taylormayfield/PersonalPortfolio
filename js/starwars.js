import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('Hey, I am JavaScript on your page!')

console.log('films')

people.forEach(function(person) {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
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
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

let mainHeader = document.querySelector('header')
let mainArea = document.querySelector('main')

const allDivs =Array.from(document.querySelectorAll('div'))

const mainHeader = document.querySelector('header')
let maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'

/*const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')
const allDivs = Array.from(mainArea.querySelectorAll('div'))
console.log(maleCharacters)
console.log(femaleCharacters)

let maleButton = document.createElement('button')
maleButton.textContent = "Male Characters"
maleButton.addEventListener('click', () => {
    maleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
            return element.firstChild.textContent === elt.name
        })
        matchedDiv[0].setAttribute("style", "display: none;")
    })
})

let femaleButton = document.createElement('button')
femaleButton.textContent = "Female Character"
femaleButton.addEventListener('click', event => {
    femaleCharacters.forEach(elt => {
        let matchedDiv = allDivs.filter(element => {
            return element.firstChild.textContent === elt.name
        })
        matchedDiv[0].setAttribute("style", "display: revert;")
    })
})
    mainHeader.appendChild(maleButton)
    mainHeader.appendChild(femaleButton)*/

    /* films.forEach(function (film) {
    let filmDiv = document.createElement('div')
    let filmTitle = document.createElement('h1')
    let filmCrawl = document.createElement('p')

    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    filmTitle.textContent = film.title
    filmCrawl.innerText = film.opening_crawl

    mainArea.appendChild(filmDiv)
}); */