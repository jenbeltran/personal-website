import React from 'react';
import { CardSection, CardPhoto, Wrapper, EventName, Description } from './css.js';

const CardImage = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription } = props;
	return (
		<CardSection>
			<CardPhoto src={eventPhoto} alt={eventAlt} />
			<Wrapper>
				<EventName>{eventName}</EventName>
				<Description>{eventDescription}</Description>
			</Wrapper>
		</CardSection>
	);
};

export default CardImage;
