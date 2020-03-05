import React from 'react';
import { TitleSection, Headline, Description } from './css.js';

const SectionTitle = (props) => {
	const { title, sentence } = props;
	return (
		<TitleSection>
			<Headline>{title}</Headline>
			<Description>{sentence}</Description>
		</TitleSection>
	);
};

export default SectionTitle;
