import React from "react";
import PokemonList from "./PokemonList";
import { useFetch } from "../utilities/useFetch";

const pokeUrl = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

const PokemonScreen = () => {
  const { loading, data } = useFetch(pokeUrl);
  const checkIfLoading = () => {
    if (loading) {
      return (
        <h1 style={{ color: "red" }}>loading</h1>
      );
    }
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          paddingTop: "20px",
        }}
      >
        <PokemonList chars={data} />
      </div>
    );
  };

  return (
    <>
      <div style={{ backgroundColor: "black", minHeight: "100vh" }}>
        <div
          style={{ display: "flex", justifyContent: "center", paddingTop: 20 }}
        >
          <button style={{ width: "20%", borderRadius: 100 }}>
            List Pokemons
          </button>
        </div>
        {checkIfLoading()}
      </div>
    </>
  );
};
export default PokemonScreen;