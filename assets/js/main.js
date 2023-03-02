const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')

/* Se quiser limitar o numero de pokemons que aparece */
/* const maxRecords = 151 */
const limit = 12
let offset = 0;



function loadPokemonItems(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
        
                <div class="details">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
        
                    <img src="${pokemon.picture}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join('')

        pokemonList.innerHTML += newHtml
    })
}

loadPokemonItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit

    /* const qntRecordsWithNexPage = offset + limit */

    /* if (qntRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItems(offset, newLimit)

        loadMoreButton.parentElemnt.removeChild(loadMore)
    } else {
        loadPokemonItems (offset, limit)   
    }*/
    
    loadPokemonItems(offset, limit)
})