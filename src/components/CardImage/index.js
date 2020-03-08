import React from 'react';
import { CardSection, CardPhoto, Wrapper } from './css.js';
import { ParagraphTitle, ParagraphDescription } from '../../theme/typography';

const CardImage = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription } = props;
	return (
		<CardSection>
			<CardPhoto src={eventPhoto} alt={eventAlt} />
			<Wrapper>
				<ParagraphTitle>{eventName}</ParagraphTitle>
				<ParagraphDescription>{eventDescription}</ParagraphDescription>
			</Wrapper>
		</CardSection>
	);
};

export default CardImage;
