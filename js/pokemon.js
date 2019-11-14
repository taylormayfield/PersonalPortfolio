class Pokemon {
    constructor(id, name, stats) {
        this.id = id
        this.name = name
        this.stats = stats
    }
}

const Thoremon = new Pokemon(900, 'Thoremon', 130)

populateDOM(Thoremon)

async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/')
    .then(data => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url).then(pokedata => {
                populateDOM(pokedata)
            })
        }
    })

console.log(theData)



let mainArea = document.querySelector('main')

function populateDOM(single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')

    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeCard.setAttribute(pokeFront)
    pokeCard.setAttribute(pokeBack)
    pokeScene.setAttribute(pokeCard)

    let pokeNum = getPokeNumber(single_pokemon.id)
    pokeFront.appendChild(name)
    name.texContent = `${single_pokemon.name} height: ${single_pokemon.height}`

    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)

    pokeCard.addEventListener('click', function () {
        pokeCard.classList.toggle('is-flipped');
    });
}

function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card_face card_face--front')
    let name = document.createElement('p')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    pokeFront.appendChild(name)
    pic.src = `../images/${pokeNum}.png`

    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)
}

function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute('class', 'card_face card_face--back')
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('h5')
    pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()} ${data.name.slice(1)}`
    pokeHP.textContent = data.stats[0].base_stat
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
}


function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}

