async function getAPIData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data
    } catch (error) {
        console.error(error)
    }
}
let allSenators = []
const theData = getAPIData('senators.json').then(data => {
    allSenators = data.results[0].members
})

const republicans = allSenators.filter(senator => senator.party === 'R')
const democrates = allSenators.filter(senator => senator.party === 'D')

const container = document.querySelector('.container')

function populateDOM(senatorArray) {
    
}