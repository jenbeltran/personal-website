import React from 'react';
import { CardSection, CardPhotoMin, CardPhotoMax, Wrapper } from './css.js';
import { SectionWrapper, ParagraphTitle, ParagraphDescription } from '../../theme/typography';

const CardImageTwo = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription } = props;
	return (
		<CardSection>
			<CardPhotoMin src={eventPhoto} alt={eventAlt} />
			<SectionWrapper>
				<Wrapper>
					<ParagraphTitle>{eventName}</ParagraphTitle>
					<ParagraphDescription>{eventDescription}</ParagraphDescription>
				</Wrapper>
			</SectionWrapper>
			<CardPhotoMax src={eventPhoto} alt={eventAlt} />
		</CardSection>
	);
};

export default CardImageTwo;
