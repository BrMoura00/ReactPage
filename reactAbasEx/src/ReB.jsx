import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchPokemon.css';
import Menu from './components/Menu';

function SearchPokemon() {
  const [query, setQuery] = useState('');
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchAllPokemons = async () => {
      const limit = 20; 
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
      
      const pokemonDetails = await Promise.all(
        response.data.results.map(async (pokemon) => {
          const pokemonData = await axios.get(pokemon.url);
          return {
            name: pokemonData.data.name,
            imageUrl: pokemonData.data.sprites.front_default,
          };
        })
      );

      setPokemons(pokemonDetails);
    };

    fetchAllPokemons();
  }, []);

  const filteredPokemons = query === '' ? pokemons : pokemons.filter(pokemon =>
    pokemon.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <><Menu />
    <div className="search-pokemon-container">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Digite o nome do Pokémon" />
      <div className="pokemon-list">
        {filteredPokemons.map((pokemon, index) => (
          <div key={index} className="pokemon-item">
            <img src={pokemon.imageUrl} alt={pokemon.name} />
            <div>{pokemon.name.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div></>
  );
}

export default SearchPokemon;
