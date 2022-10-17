import "./pokemones.css";
import { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import './cfather.css';

const Cfather = () => {
  const [Pokemones, setPokemones] = useState([]);
  const [Pokemon, setPokemon] = useState([]);

  const getApi = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.results);
    setPokemones(data.results);
  };

  useEffect(() => {
    getApi();
  }, []);

  const getPokemons = (a) => {
    setPokemon(a.target.value);
  };
  const navigate = useNavigate();
  const goToPokemon = () => {
    navigate(`/detailpokemon/${Pokemon}`);
  };
  return (
    <div className="cContainer">
      <h1>Selecciona un pokemón</h1>
      <select name="" className="select" id="" onChange={(e) => getPokemons(e)}>
        <option value="0">Pokemones</option>
        {Pokemones.map((p, i) => {
          return (
            <option key={i} value={p.name}>
              {p.name}
            </option>
          );
        })}
      </select>
      <button className="btn" onClick={goToPokemon}>Ver Detalle</button>
      <Outlet />
    </div>
  );
};

export default Cfather;
