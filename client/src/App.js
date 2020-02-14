import React from "react";
import axios from "axios";
import "./App.css";
import PlayerCard from "./components/PlayerCard";

class App extends React.Component {
	state = {
		players: []
	};

	componentDidMount() {
		axios
			.get("http://localhost:5000/api/players")
			.then(res => {
				console.log(res.data);
				this.setState({
					players: res.data
				});
			})
			.catch(err => {
				console.log("error", err);
			});
	}

	render() {
		return (
			<div className="App">
				<header>
					<h1>Most Googled Women's World Cup Players</h1>
				</header>
				{this.state.players.map(player => {
					return <PlayerCard player={player} key={player.id} />;
				})}
			</div>
		);
	}
}
export default App;
