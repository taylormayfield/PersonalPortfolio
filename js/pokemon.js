
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
            getAPIData(pokemon.url)
                .then(pokedata => {
                    console.log(pokedata)
                })
        }
    })

console.log(theData)



let mainArea = document.querySelector('main')

function populateDOM(pokeArray) {
    pokeArray.forEach(pokemon => {
        console.log(pokemon)
        let pokeDiv = document.createElement('div')
        let name = document.createElement('h3')
        let pic = document.createElement('img')

        pokeDiv.setAttribute('class', 'charDivs')
        pic.setAttribute('class', 'picDiv')
    })
}