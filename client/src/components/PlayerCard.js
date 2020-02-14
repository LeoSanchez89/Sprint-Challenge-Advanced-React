import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";
import styled from "styled-components";

const PlayerCard = props => {
	return (
		<StyledSection>
			<Card body color="warning">
				<CardTitle>
					<h2>{props.player.name}</h2>
				</CardTitle>
				<CardText>
					<p>Country: {props.player.country}</p>
					<p># of Google Searches: {props.player.searches}</p>
				</CardText>
			</Card>
		</StyledSection>
	);
};

export default PlayerCard;

const StyledSection = styled(Card)`
	width: 35%;
	margin: 1%;
`;
