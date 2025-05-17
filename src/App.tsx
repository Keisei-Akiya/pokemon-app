import { useEffect, useState } from 'react';
import './App.css';
import { getAllPokemon } from './utils/pokemon';

function App() {
  const initialURL: string = 'https://pokeapi.co/api/v2/pokemon/';
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPokemonData = async (): Promise<void> => {
      // すべてのポケモンデータを取得
      const res: Promise<unknown> = await getAllPokemon(initialURL);
      // 各ポケモンの詳細なデータを取得
      console.log(res);
      setLoading(false);
    };
    fetchPokemonData();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>ポケモンデータを取得しました</h1>
        </>
      )}
    </div>
  );
}

export default App;
