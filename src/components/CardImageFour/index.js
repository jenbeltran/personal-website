import React from 'react';
import { CardSection, CardPhotoMin, CardPhotoMax, Wrapper } from './css.js';
import { ParagraphTitle, ParagraphDescription, Anchor, Button } from '../../theme/typography';

const CardImage = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription, website } = props;
	return (
		<CardSection>
			<CardPhotoMin src={eventPhoto} alt={eventAlt} />
			<Wrapper>
				<ParagraphTitle>{eventName}</ParagraphTitle>
				<ParagraphDescription>{eventDescription}</ParagraphDescription>
				<Anchor href={website} target="_blank" rel="noopener noreferrer">
					<Button>See More</Button>
				</Anchor>
			</Wrapper>
			<CardPhotoMax src={eventPhoto} alt={eventAlt} />
		</CardSection>
	);
};

export default CardImage;
