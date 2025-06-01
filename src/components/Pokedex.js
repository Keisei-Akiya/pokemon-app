import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { getAllPokemon, getPokemon } from '@/utils/pokemon';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
export function Pokedex() {
    const initialURL = 'https://pokeapi.co/api/v2/pokemon/';
    const [loading, setLoading] = useState(true);
    const [pokemonData, setPokemonData] = useState([]);
    const [nextURL, setNextURL] = useState(null);
    const [prevURL, setPrevURL] = useState(null);
    useEffect(() => {
        const fetchPokemonData = async () => {
            // すべてのポケモンデータを取得
            let res = await getAllPokemon(initialURL);
            // 各ポケモンの詳細なデータを取得
            loadPokemon(res.results);
            setNextURL(res.next);
            setPrevURL(res.previous);
            setLoading(false);
        };
        fetchPokemonData();
    }, []);
    const loadPokemon = async (data) => {
        let _pokemonData = await Promise.all(data.map((pokemon) => {
            const pokemonRecord = getPokemon(pokemon.url);
            return pokemonRecord;
        }));
        setPokemonData(_pokemonData);
    };
    const handleNextPage = async () => {
        // 次のページのポケモンデータを取得
        setLoading(true);
        let data = await getAllPokemon(nextURL);
        await loadPokemon(data.results);
        setNextURL(data.next);
        setPrevURL(data.previous);
        setLoading(false);
    };
    const handlePrevPage = async () => {
        // 前のページのポケモンデータを取得
        // prevURLがnullの場合は何もしない
        if (!prevURL)
            return;
        setLoading(true);
        let data = await getAllPokemon(prevURL);
        await loadPokemon(data.results);
        setPrevURL(data.previous);
        setLoading(false);
    };
    return (_jsx("div", { className: "\n        min-h-screen flex flex-col justify-center items-center w-full h-h-full\n        bg-gray-950 text-white\n      ", children: loading ? (
        // ローディング中の表示
        _jsxs("div", { className: "flex flex-col items-center justify-center py-10", children: [_jsx("div", { className: "w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" }), _jsx("h1", { className: "text-2xl font-bold text-white", children: "Loading..." })] })) : (
        // ロード完了後のポケモンデータ表示
        _jsxs(_Fragment, { children: [_jsx("div", { className: "w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4", children: pokemonData.map((pokemon, i) => {
                        return _jsx(Card, { pokemon: pokemon }, i);
                    }) }), pokemonData.length > 0 && (_jsxs("div", { className: "flex gap-4 mt-4", children: [_jsx(Button, { text: "\u524D\u3078", onClick: handlePrevPage, disabled: prevURL === null }), _jsx(Button, { text: "\u6B21\u3078", onClick: handleNextPage, disabled: nextURL === null })] }))] })) }));
}
