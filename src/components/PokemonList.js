import React from "react";
import Pokemon from "./Pokemon";

const PokemonList = (props) => {
    return (
        <>
            {props.chars.map((char) => (
                <Pokemon
                    key={char.id}
                    title={char.house}
                    image={char.image}
                    fullName={char.name}
                />
            ))}
        </>
    );
};

export default PokemonList;