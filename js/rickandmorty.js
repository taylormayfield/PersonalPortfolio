async function getData() 
        {
           let response = await fetch('https://rickandmortyapi.com/api/character/');
           let data = await response.json()
            return data;
        }

getData()
.then(data => console.log(data));


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
      pic.src = `"https://rickandmortyapi.com/api/character/avatar/${charNum}.jpeg"`

      console.log(charNum)
  
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

  //images "https://rickandmortyapi.com/api/character/avatar/.jpeg"