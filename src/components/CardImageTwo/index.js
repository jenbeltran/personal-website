import React from 'react';
import { CardSection, CardPhoto, Wrapper, EventName, Description } from './css.js';

const CardImageTwo = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription } = props;
	return (
		<CardSection>
			<Wrapper>
				<EventName>{eventName}</EventName>
				<Description>{eventDescription}</Description>
			</Wrapper>
			<CardPhoto src={eventPhoto} alt={eventAlt} />
		</CardSection>
	);
};

export default CardImageTwo;
