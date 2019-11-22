async function getData() 
        {
            //await the response of the fetch call
           let response = await fetch('https://rickandmortyapi.com/api/character/');
            //proceed once the first promise is resolved.
           let data = await response.json()
            //proceed only when the second promise is resolved
            return data;
        }
//call getData function
getData()
.then(data => console.log(data));//log the data
  //https://rickandmortyapi.com/api/character/ get all char