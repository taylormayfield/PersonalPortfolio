async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}

const theData = getAPIData('https://rickandmortyapi.com/api/character/')
.then(data => {
    for (const rickandmorty of data.results) {
        getAPIData(rickandmorty.url).then(rickdata => {
            populateDOM(rickdata)
        })
    }
})

let mainArea = document.querySelector('main')

function populateDOM(single_char) {
    let rickScene = document.createElement('div')
    let charCard = document.createElement('div')
    let cardFront = document.createElement('div')
    let cardBack = document.createElement('div')

    fillCardFront(cardFront, single_char)
    fillCardBack(cardBack, single_char)

    rickScene.setAttribute('class', 'scene')
    charCard.setAttribute('class', 'card')
    charCard.appendChild(cardFront)
    charCard.appendChild(cardBack)
    rickScene.appendChild(charCard)

    mainArea.appendChild(rickScene)

    charCard.addEventListener('click', function () {
        charCard.classList.toggle('is-flipped')
       
    })
}

function fillCardFront(charFront, data) {
    charFront.setAttribute('class', 'card__face card__face--front')
    let name = document.createElement('p')
    let pic = document.createElement('img')
    pic.setAttribute('class', 'picDivs')
    let charNum = getPokeNumber(data.id)
    charFront.appendChild(name)
    //pic.src = `../images/${pokeNum}.png`
    pic.src = `https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/images/${pokeNum}.png`

    charFront.appendChild(pic)
    charFront.appendChild(name)
}

function fillCardBack(charBack, data) {
    charBack.setAttribute('class', 'card__face card__face--back')
    let charOrder = document.createElement('p')
    charOrder.textContent = `#${data.id} ${data.name[0].toUpperCase()}${data.name.slice(1)}`
    charBack.appendChild(charOrder)
}







/*async function getData() 
        {
           let response = await fetch('https://rickandmortyapi.com/api/character/');
           let data = await response.json()
            return data;
        }*/

/*getData()
.then(data => console.log(data));*/





  //images "https://rickandmortyapi.com/api/character/avatar/.jpeg"