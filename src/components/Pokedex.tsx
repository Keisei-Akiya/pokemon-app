import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from '@/utils/pokemon';
import type { PokemonItem, PokemonResponse } from '@/types/pokemon';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

export function Pokedex() {
  const initialURL: string = 'https://pokeapi.co/api/v2/pokemon/';
  const [loading, setLoading] = useState<boolean>(true);
  const [pokemonData, setPokemonData] = useState<PokemonItem[]>([]);
  const [nextURL, setNextURL] = useState<string | null>(null);
  const [prevURL, setPrevURL] = useState<string | null>(null);

  useEffect(() => {
    const fetchPokemonData = async (): Promise<void> => {
      // すべてのポケモンデータを取得
      let res: PokemonResponse = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      loadPokemon(res.results);
      setNextURL(res.next);
      setPrevURL(res.previous);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  const loadPokemon = async (data: PokemonItem[]) => {
    let _pokemonData: PokemonItem[] = await Promise.all(
      data.map((pokemon) => {
        const pokemonRecord = getPokemon(pokemon.url);
        return pokemonRecord;
      }),
    );
    setPokemonData(_pokemonData);
  };

  const handleNextPage = async () => {
    // 次のページのポケモンデータを取得
    setLoading(true);
    let data: PokemonResponse = await getAllPokemon(nextURL as string);
    await loadPokemon(data.results);
    setNextURL(data.next);
    setPrevURL(data.previous);
    setLoading(false);
  };

  const handlePrevPage = async () => {
    // 前のページのポケモンデータを取得
    // prevURLがnullの場合は何もしない
    if (!prevURL) return;

    setLoading(true);
    let data: PokemonResponse = await getAllPokemon(prevURL as string);
    await loadPokemon(data.results);
    setPrevURL(data.previous);
    setLoading(false);
  };

  return (
    <div
      className="
        min-h-screen flex flex-col justify-center items-center w-full h-h-full
        bg-gray-950 text-white
      "
    >
      {loading ? (
        // ローディング中の表示
        <div className="flex flex-col items-center justify-center py-10">
          {/* ローディングスピナー */}
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <h1 className="text-2xl font-bold text-white">Loading...</h1>
        </div>
      ) : (
        // ロード完了後のポケモンデータ表示
        <>
          <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {pokemonData.map((pokemon: PokemonItem, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
          {/* 左側がTrueなら右が表示される */}
          {pokemonData.length > 0 && (
            <div className="flex gap-4 mt-4">
              <Button
                text="前へ"
                onClick={handlePrevPage}
                disabled={prevURL === null}
              />
              <Button
                text="次へ"
                onClick={handleNextPage}
                disabled={nextURL === null}
              />
            </div>
          )}
        </>
      )}
    </div>
  );
}
