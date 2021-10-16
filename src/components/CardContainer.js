import Card from "./Card";
import "../style/CardContainer.css";

function CardContainer({ pile, onClick }) {
	const drawPile = pile.map((card) => (
		<Card
			name={card.name}
			avatar={card.avatar}
			key={card.name}
			onClick={onClick}
		/>
	));
	return <div className="card-container">{drawPile}</div>;
}

export default CardContainer;
