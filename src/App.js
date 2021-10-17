import "./style/App.css";
import "./style/Button.css";
import "./style/Modal.css";
import data from "./asset.json";
import ScoreBoard from "./components/ScoreBoard";
import CardContainer from "./components/CardContainer";
import ReactModal from "react-modal";
import { useEffect, useState } from "react";

function App() {
	const [selectedPile, setSelectedPile] = useState([]);
	const [randomizedPile, setRandomizedPile] = useState([]);
	const [isGameOver, setIsGameOver] = useState(false);

	function checkForDuplicate(newSelectedCard) {
		if (
			!selectedPile.some(
				(alreadySelectedCard) => newSelectedCard === alreadySelectedCard
			)
		) {
			setSelectedPile([...selectedPile, newSelectedCard]);
		} else {
			setIsGameOver(true);
		}
	}

	function randomizedCardFromAsset() {
		const mainAssetPile = data.asset;
		let tempPile = [];

		while (tempPile.length < 6) {
			let randomizedIndex = Math.floor(Math.random() * mainAssetPile.length);

			if (
				!tempPile.some(
					(tempCard) => tempCard.name === mainAssetPile[randomizedIndex].name
				)
			) {
				tempPile.push(mainAssetPile[randomizedIndex]);
			} else {
				randomizedIndex = Math.floor(Math.random() * mainAssetPile.length);
			}
		}

		setRandomizedPile(tempPile);
	}

	function newGame() {
		setIsGameOver(false);
		setSelectedPile([]);
	}

	useEffect(() => {
		randomizedCardFromAsset();
	}, [selectedPile]);

	return (
		<div className="app">
			<ScoreBoard score={selectedPile.length} />
			<CardContainer pile={randomizedPile} onClick={checkForDuplicate} />
			<ReactModal isOpen={isGameOver} ariaHideApp={false} className="modal">
				<h3>Game over</h3>
				<p>You got {selectedPile.length} score</p>
				<button onClick={() => newGame()} className="new-game-btn">
					Play again
				</button>
			</ReactModal>
		</div>
	);
}

export default App;
