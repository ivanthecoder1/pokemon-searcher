// Add your code here!


let submit = document.getElementById('submit');

let clear = document.getElementById('clear');

// submit pokemon name, and get data back
function onClick(event) {
    event.preventDefault();
    let name = document.getElementById('pokemon_input').value;
    let url = 'https://pokeapi.co/api/v2/pokemon/' + name

    fetch(url) // make request to api url  above
        .then(function (response) { // extra JSON data 
            return response.json();

        })
        .then(function (myJson) { // out put JSON data onto site

            // select Main Container from HTML
            let mainContainer = document.querySelector('.container');

            // Create second container to hold image and information
            let subContainer = document.createElement('div');
            subContainer.className = 'subContainer';

        // image section 
            let imageContainer = document.createElement('div');
            imageContainer.className = 'pokemonImage';

            // extract image from API and append
            let newImg = document.createElement('img');
            newImg.src = myJson.sprites.front_default;
            imageContainer.append(newImg);

        // Info section
            let infoContainer = document.createElement('div');
            infoContainer.className = 'pokemonInfo';

            // Extract pokemon's name
            let pokeName = document.createElement('li');
            pokeName.innerText = "Pokemon's Name: " + myJson.species.name;
            infoContainer.append(pokeName);
           
            // Extract type information
            let typeInfo = document.createElement('li');
            typeInfo.innerText = "Type: " + myJson.types[0].type.name;
            infoContainer.append(typeInfo);
                //Future fix: Account if a pokemon has two types
            

            // Extract ability information
            let abilityInfo = document.createElement('li');
            abilityInfo.innerText = "Abilities: " + myJson.abilities[0].ability.name;
            infoContainer.append(abilityInfo);


            // Loop through all six stats, and extract stat information, append info
            for (let i = 0; i < 6; i++) {
                    let stats = document.createElement('li');
                    stat_name = myJson.stats[i].stat.name
                    stats.innerText = stat_name +  " stat: " + myJson.stats[i].base_stat
                    infoContainer.append(stats)
            }

            // Add all info to containers and back to main containers
            subContainer.append(imageContainer);
            subContainer.append(infoContainer);
            mainContainer.appendChild(subContainer);
         
        })
}

// clear button
function onClick2 () {
    newImg.src = '';
    newP.innerText = '';
}

// Future tip: return error message if user incorrectly inputs pokemon name

submit.addEventListener('click', onClick);
clear.addEventListener('click', onClick2);


