import "../style/Card.css";

function Card({ name, avatar, onClick }) {
	return (
		<div className="card" onClick={() => onClick(name)}>
			<img src={avatar} alt="Avatar" />
			<p>{name}</p>
		</div>
	);
}

export default Card;
