/*searchinput
searchbtn*/


const dictionary = (word) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '46a4a28999msh22c31ac061eecafp1e52ccjsn7b02e3687819',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };

    fetch('https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary?word=' + word, options)
        .then(response => response.json())
        .then((response) => {

            console.log(response)
            wordheading.innerHTML = "Here is the meaning of " + response.word;
            definition.innerHTML = response.definition.replace("2.", "<br>2.").replace("3.", "<br>3.").replace("4.", "<br>4.").replace("5.", "<br>5.").replace("6.", "<br>6.").replace("7.", "<br>7.");

        })
        .catch(err => console.error(err));

}

searchbtn.addEventListener("click", (e) => {
    e.preventDefault();
    dictionary(searchinput.value)

})