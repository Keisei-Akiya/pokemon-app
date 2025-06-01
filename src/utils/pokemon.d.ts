import type { PokemonItem, PokemonResponse } from '@/types/pokemon';
export declare function getAllPokemon(url: string): Promise<PokemonResponse>;
export declare function getPokemon(url: string): Promise<PokemonItem>;
