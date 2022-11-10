let arrayOfPeople = [];

// async function fetchPeople(){
//     const result = await fetch("https://swapi.dev/api/people/");
//     const resultJson = await result.json();
//     console.log(resultJson);
// }



async function fetchPeople(){
    let next = true;
    let page= 1;
    while(next) {
        const result = await fetch(`https://swapi.dev/api/people/?page=${page}`);
        const resultJson = await result.json();
  
        arrayOfPeople = [...arrayOfPeople, ...resultJson.results];
        //this spread operator above (...) puts inside something else.

        // if the above is confusing, you can also use a for loop to get the job done of continuously adding data to ONE array in this specific situation.
        // We cannot just use push because you get an array of multiplt arrays which is not ideal.
        // for(let i=0; i < resultJson.results.length; i++){
            // arrayOfPeople.push(resultJson.results[i]);
        // }
        next = resultJson.next;
        page++
    }
   renderNames(arrayOfPeople);
}



function renderNames(arrayOfResults) {
    const nameHtmlArray = arrayOfResults.map(function(result){
        return `
        <p>${result.name}</p>
        `
    })
    const nameHtml = nameHtmlArray.join('');
    const nameDiv =document.getElementById("people");
    nameDiv.innerHTML = nameHtml;
}

fetchPeople();