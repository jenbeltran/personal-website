import React from 'react';
import { CardSection, CardPhotoMin, CardPhotoMax, Wrapper } from './css.js';
import { ParagraphTitle, ParagraphDescription } from '../../theme/typography';

const CardImage = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription } = props;
	return (
		<CardSection>
			<CardPhotoMin src={eventPhoto} alt={eventAlt} />
			<Wrapper>
				<ParagraphTitle>{eventName}</ParagraphTitle>
				<ParagraphDescription>{eventDescription}</ParagraphDescription>
			</Wrapper>
			<CardPhotoMax src={eventPhoto} alt={eventAlt} />
		</CardSection>
	);
};

export default CardImage;
