import "./styles.css";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CharCard from "../CharCard";
import Btn from "../Button";

const Card = ({ props }) => {
  const [dataApi, setDataApi] = useState([]);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios
        .get(`https://rickandmortyapi.com/api/character/?page=${pages}`)
        .catch((err) => {
          console.log(`deu ruim, o ${err} nos parou`);
        });
      setDataApi([...dataApi, ...response.data.results]);
    }
    fetchCharacters();
  }, [pages]);

  console.log(dataApi)
  return (
    <div className="divListaPersonagens">
      <header>
        {" "}
        <h2>Meus Personagens</h2>{" "}
      </header>
      <div className="listaPersonagens">
        <CharCard dataApi={dataApi} />
      </div>
      <Btn onClick={() => setPages(pages + 1)}>Next</Btn>
    </div>
  );
};

export default Card;
