import { Col, Container, Row } from "react-bootstrap";
import useGame from "../hooks/useGame";

function ListCards() {
  const { playerOne, playerTwo } = useGame();
  return (
    <Container>
      <Row>
        <div className="align-items-center my-2">
          <h4>Jugador {playerOne.name}</h4>
          <p>Cartas obtenidas</p>
          {playerOne.cards.map((card, index) => (
            <img
              className="col-sm-1 col-lg-1 mx-2 my-2"
              key={index}
              src={card?.image}
              alt={card?.value}
            />
          ))}
        </div>
      </Row>
      <Row>
        <div className="align-items-center my-2">
          <h4>Jugador {playerTwo.name}</h4>
          <p>Cartas obtenidas</p>
          {playerTwo.cards.map((card, index) => (
            <img
              className="col-sm-1 col-lg-1 mx-2 my-2"
              key={index}
              src={card?.image}
              alt={card?.value}
            />
          ))}
        </div>
      </Row>
    </Container>
  );
}

export default ListCards;
