const pokemon = {
    sprites: document.getElementById('pokemon-image'),
    name: document.getElementById('pokemon-name'),
    types: document.getElementById('pokemon-types'),
    abilities: document.getElementById('pokemon-abilities')
}

const GetPokemon = async () =>{
    const url = 'https://pokeapi.co/api/v2/pokemon/infernape';

    const data = await fetch(url);
    const datajson = await data.json();

    const {sprites, name , types, abilities} = datajson;

    //console.log(await types);

    types.forEach(element => {
        const{type} = element;
        console.log(type.name);
        pokemon.types.innerHTML += `<li>${type.name}</li>`;
    });

    abilities.forEach(element => {
        const{ability} = element;
        console.log(ability.name);
        pokemon.abilities.innerHTML += `<li>${ability.name}</li>`;
        //console.log(ability.url);
        //const pokemonAbilitiesInfo = GetAbilityInfo(ability.url);
        GetAbilityInfo(ability.url,   ability.name);

        //console.log(pokemonAbilitiesInfo);
    });

    console.log(await datajson);

    pokemon.sprites.src = await datajson.sprites.front_default;
    pokemon.name.innerHTML = await `Name: ${datajson.name}`;
}

const GetAbilityInfo = async (url, abilityName) => {
    const data = await fetch(url);
    const datajson = await data.json();
    const{effect_entries} = datajson;

    let effectslist = '';

    //effectslist += `<li>${abilityName}</li>`;

    effect_entries.forEach(element => {

        const{effect, language} = element;

        if (lenguage.name === 'en'){
            //console.log(effect);
            effectslist += `<li>${effect}</li>`;
        }
    });

    pokemon.abilities.innerHTML += 
    `<li>
          ${abilityName}
          <div>effects</div>
          <ul>
            ${effectslist}
          </ul>
    </li>`;
    //console.log(await effect_entries);
}

GetPokemon();