import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './detailPokemon.css';

const DetailPokemon = () => {
  const { pokemon } = useParams();
  const [Pokemon, setPokemon] = useState([]);

  const getApi2 = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    setPokemon(data);
  };

  useEffect(() => {
    getApi2();
  }, [Pokemon]);

  return (
    <div className="dContainer">
      <div className="card_left">
        <img
          src={Pokemon.sprites?.other["official-artwork"].front_default}
          alt=""
        />
      </div>
      <div className="card_right">
        <h2>{Pokemon.name}</h2>
        <h4>Tipo: {Pokemon.types?.map((t) => t.type.name).join(" / ")}</h4>
        <ul>
          {Pokemon.stats?.map((s, i) => {
            return (
              <li key={i}>
                {s.stat.name}: {s.base_stat}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default DetailPokemon;
