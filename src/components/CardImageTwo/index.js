import React from 'react';
import { CardSection, CardPhotoMin, CardPhotoMax, Wrapper } from './css.js';
import { SectionWrapper, ParagraphTitle, ParagraphDescription } from '../../theme/typography';

const CardImageTwo = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription } = props;
	return (
		<CardSection>
			<SectionWrapper>
				<CardPhotoMin src={eventPhoto} alt={eventAlt} />
				<Wrapper>
					<ParagraphTitle>{eventName}</ParagraphTitle>
					<ParagraphDescription>{eventDescription}</ParagraphDescription>
				</Wrapper>
				<CardPhotoMax src={eventPhoto} alt={eventAlt} />
			</SectionWrapper>
		</CardSection>
	);
};

export default CardImageTwo;
