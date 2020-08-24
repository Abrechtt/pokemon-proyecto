const pokemon = {
    sprites: document.getElementById('pokemon-image'),
    name: document.getElementById('pokemon-name'),
}

const GetPokemon = async () =>{
    const url = 'https://pokeapi.co/api/v2/pokemon/infernape';

    const data = await fetch(url);
    const datajson = await data.json();

    console.log(await datajason);

    pokemon.sprites.src = await datajson.sprites.front_default;
    pokemon.name.innerHTML = await `Name: ${datajson.name}`;
}

GetPokemon();