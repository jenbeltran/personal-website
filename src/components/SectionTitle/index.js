import React from 'react';
import { TitleSection, Headline, Description } from './css.js';
import Title from './data';

const SectionTitle = (props) => {
	const matchPageName = (Title) => Title.pageName === props.pageName;
	const titleData = Title.find(matchPageName);

	const { pageName, title, sentence } = titleData;

	return (
		<TitleSection pageName={pageName} id={pageName}>
			<Headline>{title}</Headline>
			<Description>{sentence}</Description>
		</TitleSection>
	);
};

export default SectionTitle;
