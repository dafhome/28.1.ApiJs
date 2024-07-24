pokemonId = 120;
const pokemon = "https://pokeapi.co/api/v2/pokemon/"+pokemonId;

fetch (pokemon)
.then ( (response) => response. json ())
.then ((data) =>{

    let nombrePokemon = data.species.name.toUpperCase();
    let spriteDefault = data.sprites.front_default;
    let spriteShiny = data.sprites.front_shiny;
    document.getElementById("nombre").innerHTML = nombrePokemon;
    // document.getElementById("frontal").src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+pokemonId+".png";
    document.getElementById("frontal").src=spriteDefault;
    document.getElementById("shiny").src=spriteShiny;
    console.log(data.abilities[1].ability.name);
    let poderPokemon = data.abilities[1].ability.name.toUpperCase();
    document.getElementById("poder").innerHTML = poderPokemon;

})
.catch((err) => console. log(err));