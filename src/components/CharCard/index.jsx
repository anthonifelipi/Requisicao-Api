import "./styles.css";

const CharCard = ({ dataApi }) => {
  return (
    <div className="ordenarPersonagens">
      {dataApi.map((item) => {
        return (
          <div
            key={item.id}
            className={
              item.status === "Alive"
                ? "cardPersonagemVivo"
                : "cardPersonagemMorto"
            }
          >
            <p>{item.name}</p> <img src={item.image} />{" "}
          </div>
        );
      })}
    </div>
  );
};
export default CharCard;
