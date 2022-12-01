import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
    return (
        <>
            {props.chars.map((char) => (
                <Pokemon
                    key={char.id}
                    name={char.name}
                    url={char.url}
                />
            ))}
        </>
    );
};

export default PokemonList;