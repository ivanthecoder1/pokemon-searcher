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
        .then(function (pokemon) { // out put JSON data onto site

            // select Main Container from HTML
            let mainContainer = document.querySelector('.container');

            // Create second container to hold image and information
            let subContainer = document.createElement('div');
            subContainer.className = 'subContainer';

        // image section 
            let imageContainer1 = document.createElement('div');
            imageContainer1.className = 'pokemonImage';

            let imageContainer2 = document.createElement('div');
            imageContainer2.className = 'pokemonImage2';

            // extract image from API and append
            let front_sprite = document.createElement('img');
            front_sprite.src = pokemon.sprites.front_default;

            let back_sprite = document.createElement('img');
            back_sprite.src = pokemon.sprites.back_default;

            imageContainer1.append(front_sprite)
            imageContainer2.append(back_sprite);

        
        // Info section
            let infoContainer = document.createElement('div');
            infoContainer.className = 'pokemonInfo';

            // Extract pokemon's name
            let pokeName = document.createElement('li');
            pokeName.innerText = "Pokemon's Name: " + pokemon.species.name;
            infoContainer.append(pokeName);
           
            // Extract type information
            let typeInfo = document.createElement('li');
            typeInfo.innerText = "Type: " + pokemon.types[0].type.name;
            infoContainer.append(typeInfo);
                //Future fix: Account if a pokemon has two types
            

            // Extract ability information
            let abilityInfo = document.createElement('li');
            abilityInfo.innerText = "Abilities: " + pokemon.abilities[0].ability.name;
            infoContainer.append(abilityInfo);


            // Loop through all six stats, and extract stat information, append info
            for (let i = 0; i < 6; i++) {
                    let stats = document.createElement('li');
                    stat_name = pokemon.stats[i].stat.name
                    stats.innerText = stat_name +  " stat: " + pokemon.stats[i].base_stat
                    infoContainer.append(stats)
            }

            // Add all info to containers and back to main containers
            subContainer.append(imageContainer1);
            subContainer.append(imageContainer2);
            subContainer.append(infoContainer);
            mainContainer.appendChild(subContainer);
         
        })
        // error 
        .catch(error => {
            console.log('API failure');
        });
}

// clear button
function onClick2 () {
    newImg.src = '';
    newP.innerText = '';
}

// connects to the html form
submit.addEventListener('click', onClick);
clear.addEventListener('click', onClick2);



