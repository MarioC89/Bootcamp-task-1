import { useCallback } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(true);

  const listPokemonData = useCallback(async () => {
    const response = await axios.get(url);
    const pokemonData = await response.data;

    setLoading(false);
    setData(pokemonData);
  }, [url]);

  useEffect(() => {
    listPokemonData();
  }, [listPokemonData]);

  return { loading, data };
};