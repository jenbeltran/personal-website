import React from 'react';
import { CardSection, CardPhoto, Wrapper } from './css.js';
import { SectionWrapper, ParagraphTitle, ParagraphDescription } from '../../theme/typography';

const CardImage = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription } = props;
	return (
		<CardSection>
			<SectionWrapper>
				<CardPhoto src={eventPhoto} alt={eventAlt} />
				<Wrapper>
					<ParagraphTitle>{eventName}</ParagraphTitle>
					<ParagraphDescription>{eventDescription}</ParagraphDescription>
				</Wrapper>
			</SectionWrapper>
		</CardSection>
	);
};

export default CardImage;
