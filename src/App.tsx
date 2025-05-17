import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from './utils/pokemon';
import type { PokemonItem, PokemonResponse } from './types/pokemon';
import Card from './components/Card/Card';

function App() {
  const initialURL: string = 'https://pokeapi.co/api/v2/pokemon/';
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<PokemonItem[]>([]);

  useEffect(() => {
    const fetchPokemonData = async (): Promise<void> => {
      // すべてのポケモンデータを取得
      const res: PokemonResponse = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: PokemonItem[]) => {
    const _pokemonData: PokemonItem[] = await Promise.all(
      data.map(pokemon => {
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };

  console.log(pokemonData);

  return (
    <div
      className="
        min-h-screen flex flex-col justify-center items-center w-full h-h-full
        bg-gray-950 text-white
      "
    >
      {loading ? (
        // ローディング中の表示
        <h1 className="text-2xl font-bold text-white">Loading...</h1>
      ) : (
        // ロード完了後のポケモンデータ表示
        <>
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {pokemonData.map((pokemon: PokemonItem, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
