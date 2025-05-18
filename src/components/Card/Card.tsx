import type { PokemonItem } from '../../types/pokemon';

type CardProps = {
  pokemon: PokemonItem;
};

const Card = ({ pokemon }: CardProps) => {
  return (
    <div className="text-left bg-transparent text-slate-50 rounded-xl shadow-lg p-4 flex flex-col hover:scale-105 transition-transform border border-gray-800">
      <h3 className="text-2xl font-extrabold text-center drop-shadow-lg tracking-wide mb-3 uppercase">
        {pokemon.name}
      </h3>
      <div className="flex items-center justify-center mb-4 bg-gray-900 rounded-full">
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
      <div className="cardTypes">
        <div>タイプ</div>
        {pokemon.types.map((type, idx) => {
          return (
            <div key={type.type.name + idx}>
              <span className="typeName">{type.type.name}</span>
            </div>
          );
        })}
      </div>
      <div className="cardInfo">
        <div className="cardData">
          <p className="title">重さ: {pokemon.weight}</p>
        </div>
        <div className="cardData">
          <p className="title">高さ: {pokemon.height}</p>
        </div>
        <div className="cardData">
          <div>アビリティ</div>
          {pokemon.abilities.map((ability, idx) => {
            return (
              <div key={ability.ability.name + idx}>
                <span>{ability.ability.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
