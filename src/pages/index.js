import React from 'react';

// import Layout from '../components/layout';
import SEO from '../components/seo';

import AboutMe from '../components/AboutMe';

//Section Titles
import SectionTitle from '../components/SectionTitle';
import { HighlightsTitle, SkillsTitle, HobbiesTitle } from '../components/SectionTitle/data';

//Highlights Section
import HighlightOne from '../components/CardImage';
import HighlightTwo from '../components/CardImageTwo';
import HighlightThree from '../components/CardImage';
import HighlightFour from '../components/CardImageTwo';
import Events from '../components/CardImage/data';

//Skills Section
import Skills from '../components/Skills';

const IndexPage = () => (
	<div>
		<SEO title="About Me" />
		<AboutMe />
		<SectionTitle title={HighlightsTitle.title} sentence={HighlightsTitle.sentence} />
		<HighlightOne
			eventPhoto={Events[0].photo}
			eventAlit={Events[0].alt}
			eventName={Events[0].eventName}
			eventDescription={Events[0].eventDescription}
		/>
		<HighlightTwo
			eventPhoto={Events[1].photo}
			eventAlit={Events[1].alt}
			eventName={Events[1].eventName}
			eventDescription={Events[1].eventDescription}
		/>
		<HighlightThree
			eventPhoto={Events[2].photo}
			eventAlit={Events[2].alt}
			eventName={Events[2].eventName}
			eventDescription={Events[2].eventDescription}
		/>
		<HighlightFour
			eventPhoto={Events[3].photo}
			eventAlit={Events[3].alt}
			eventName={Events[3].eventName}
			eventDescription={Events[3].eventDescription}
		/>
		<SectionTitle title={SkillsTitle.title} sentence={SkillsTitle.sentence} />
		<Skills />
		<SectionTitle title={HobbiesTitle.title} sentence={HobbiesTitle.sentence} />
	</div>
);

export default IndexPage;
