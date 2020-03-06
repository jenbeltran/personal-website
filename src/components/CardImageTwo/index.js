import React from 'react';
import { CardSection, CardPhotoMin, CardPhotoMax, Wrapper, EventName, Description } from './css.js';

const CardImageTwo = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription } = props;
	return (
		<CardSection>
			<CardPhotoMin src={eventPhoto} alt={eventAlt} />
			<Wrapper>
				<EventName>{eventName}</EventName>
				<Description>{eventDescription}</Description>
			</Wrapper>
			<CardPhotoMax src={eventPhoto} alt={eventAlt} />
		</CardSection>
	);
};

export default CardImageTwo;
