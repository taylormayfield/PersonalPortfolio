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







/*async function getData() 
        {
           let response = await fetch('https://rickandmortyapi.com/api/character/');
           let data = await response.json()
            return data;
        }*/

/*getData()
.then(data => console.log(data));*/





  //images "https://rickandmortyapi.com/api/character/avatar/.jpeg"