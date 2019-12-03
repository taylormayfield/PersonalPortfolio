
class Pokemon {
    constructor(id, name, forms, abilities, types) {
        this.id = id;
        this.name = name;
        this.forms = forms;
        this.abilities = abilities;
        this.types = types;
    }
}

//prompt to create new pokemon card 
document.querySelector('#pokeButton').addEventListener('click', () => {
    let pokeId = prompt("Provide the Pokemon ID you want to add:")
    let pokeIdNum = parseInt(pokeId, 10)
    if (pokeIdNum > 807) {
        alert('That Pokemon ID does not exist! There are only 807 Pokemon.')
        return
    } else {
        getAPIData(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
            .then(result => {
                populateDOM(result)
            })
            .catch(error => console.log(error))
    }
})

//fetch data from url
async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}


//returned async
const theData = getAPIData('https://pokeapi.co/api/v2/pokemon/?limit=25')
    .then(data => {
        for (const pokemon of data.results) {
            getAPIData(pokemon.url).then(pokedata => {
                populateDOM(pokedata)
            })
        }
    })

//To capitalize the first letter in passed value
const capitalize = s => {
    if (typeof s !== "string") return ""
    return s[0].toUpperCase() + s.slice(1);
}

//get correct pic for cards
function getPokeNumber(id) {
    if (id < 10) return `00${id}`
    if (id > 9 && id < 100) {
        return `0${id}`
    } else return id
}

let mainArea = document.querySelector('main')

//get card elements into main
function populateDOM(single_pokemon) {
    let pokeScene = document.createElement('div')
    let pokeCard = document.createElement('div')
    let pokeFront = document.createElement('div')
    let pokeBack = document.createElement('div')

    fillCardFront(pokeFront, single_pokemon)
    fillCardBack(pokeBack, single_pokemon)

    pokeScene.setAttribute('class', 'scene')
    pokeCard.setAttribute('class', 'card')
    pokeCard.appendChild(pokeFront)
    pokeCard.appendChild(pokeBack)
    pokeScene.appendChild(pokeCard)

    mainArea.appendChild(pokeScene)

    //card flip
    pokeCard.addEventListener('click', function () {
        pokeCard.classList.toggle('is-flipped')
    })
}

function fillCardFront(pokeFront, data) {
    pokeFront.setAttribute('class', 'card__face card__face--front')
    let name = document.createElement('p')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let pokeNum = getPokeNumber(data.id)
    pokeFront.appendChild(name)
    //pic.src = `../images/${pokeNum}.png`
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

    pokeFront.appendChild(pic)
    pokeFront.appendChild(name)
}

function fillCardBack(pokeBack, data) {
    pokeBack.setAttribute('class', 'card__face card__face--back')
    let pokeOrder = document.createElement('p')
    let pokeHP = document.createElement('h5')
    let pokeAb = document.createElement("h5")
    let pokeAbilities = document.createElement("ul")
    pokeOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
    pokeBack.appendChild(pokeOrder)
    pokeBack.appendChild(pokeHP)
    pokeBack.appendChild(pokeAb)
    pokeBack.appendChild(pokeAbilities)

    //target types
    pokeOrder.textContent = `Type: ${data.types
        .map(t => t.type.name)}`

    pokeHP.textContent = `HP: ${data.stats[5].base_stat}`
    pokeAb.textContent = "Abilities:"

    //Abilities
    pokeAbilities.innerHTML = data.abilities
        .map(a => a.ability.name)
        .reduce(
            (accumulator, currentValue) =>
                (accumulator += `<li class="pokeability">${currentValue}</li>`),
            "")
}


