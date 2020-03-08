import React from 'react';
import { CardSection, CardPhoto, Wrapper } from './css.js';
import { SectionWrapper, ParagraphTitle, ParagraphDescription, Anchor, Button } from '../../theme/typography';

const CardImage = (props) => {
	const { eventPhoto, eventAlt, eventName, eventDescription, website } = props;
	return (
		<CardSection>
			<SectionWrapper>
				<CardPhoto src={eventPhoto} alt={eventAlt} />
				<Wrapper>
					<ParagraphTitle>{eventName}</ParagraphTitle>
					<ParagraphDescription>{eventDescription}</ParagraphDescription>
					<Anchor href={website} target="_blank" rel="noopener noreferrer">
						<Button>See More</Button>
					</Anchor>
				</Wrapper>
			</SectionWrapper>
		</CardSection>
	);
};

export default CardImage;
