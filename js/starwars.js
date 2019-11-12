import { films } from '../assets/films.js'
import { people } from '../assets/people.js'

console.log('Hey, I am JavaScript on your page!')

console.log('films')

let mainArea = document.querySelector('main')

const justNames =people.map(person => {
    return {name: person.name,  foo: 'bar', config: [{style: 'something'},
    {foo: 'bar'}]}
})


function showCharArray(arrayOfPeople){
arrayOfPeople.forEach(person => {
    let personDiv = document.createElement('div')
    let name = document.createElement('h1')
    let gender = document.createElement('p')
    let pic = document.createElement('img')

    personDiv.setAttribute('class', 'charDivs')
    pic.setAttribute('class', 'picDivs')


    let charNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = `${person.gender}`
    pic.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv)
})
}

function getCharNumber(charURL) {
    let end = charURL.lastIndexOf('/')
    let charID = charURL.substring(end - 2, end)
    if (charID.indexOf('/') !== -1) {
        return charID.slice(1, 2)
    } else {
        return charID
    }
}

const allDivs = Array.from(document.querySelectorAll('div'))

const mainHeader = document.querySelector('header')
let maleButton = document.createElement('button')
maleButton.textContent = 'Male Characters'

maleButton.addEventListener('click', () => {
    while (mainArea.firstChild){
        mainArea.removeChild(mainArea.firstChild)
    }
    showCharArray(maleCharacters)
   /* maleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        if (matchedDiv.getAttribute("style") === "display: none;") {
            console.log(matchedDiv)

            matchedDiv.setAttribute("style", "display: revert;")
        } else {
            matchedDiv.setAttribute("style", "display: none;")
        }
    })*/
})

let femaleButton = document.createElement('button')
femaleButton.textContent = 'Female Characters'
femaleButton.addEventListener('click', () => {
    while (mainArea.firstChild){
        mainArea.removeChild(mainArea.firstChild)
    }
    showCharArray(femaleCharacters)
    /* deleteNodes()
    showCharArray(femaleCharacters)*/
    /*femaleCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        if (matchedDiv.getAttribute("style") === "display: none;") {
            console.log(matchedDiv)
            matchedDiv.setAttribute("style", "display: revert;")
        } else {
            matchedDiv.setAttribute("style", "display: none;")
        }
    }) */
})

let otherButton = document.createElement('button')
otherButton.textContent = 'Other Characters'
otherButton.addEventListener('click', () => {
    while (mainArea.firstChild){
        mainArea.removeChild(mainArea.firstChild)
    }
    showCharArray(otherCharacters)
    /* otherCharacters.forEach(character => {
        let matchedDiv = allDivs.find(oneDiv => {
            return oneDiv.firstChild.textContent === character.name
        })
        if (matchedDiv.getAttribute("style") === "display: none;") {
            console.log(matchedDiv)
            matchedDiv.setAttribute("style", "display: revert;")
        } else {
            matchedDiv.setAttribute("style", "display: none;")
        }
    }) */
})


mainHeader.appendChild(maleButton)
mainHeader.appendChild(femaleButton)
mainHeader.appendChild(otherButton)

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')


console.log(otherCharacters)


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