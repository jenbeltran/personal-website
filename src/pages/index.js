import React from 'react';

// import Layout from '../components/layout';
import SEO from '../components/seo';

import AboutMe from '../components/AboutMe';

//Section Titles
import SectionTitle from '../components/SectionTitle';

//Events Section
import EventCardOne from '../components/CardImage';
import EventCardTwo from '../components/CardImageTwo';
import Events from '../components/CardImage/data';

//Skills Section
import Skills from '../components/Skills';

//Projects Section
import ProjectCardOne from '../components/CardImageThree';
import ProjectCardTwo from '../components/CardImageFour';
import Projects from '../components/CardImageThree/data';

const IndexPage = () => (
	<div>
		<SEO title="About Me" />
		<AboutMe />
		<SectionTitle pageName="skills" />
		<Skills />
		<SectionTitle pageName="projects" />
		<ProjectCardOne
			eventPhoto={Projects[0].photo}
			eventAlit={Projects[0].alt}
			eventName={Projects[0].eventName}
			eventDescription={Projects[0].eventDescription}
		/>
		<ProjectCardTwo
			eventPhoto={Projects[1].photo}
			eventAlit={Projects[1].alt}
			eventName={Projects[1].eventName}
			eventDescription={Projects[1].eventDescription}
		/>
		<ProjectCardOne
			eventPhoto={Projects[2].photo}
			eventAlit={Projects[2].alt}
			eventName={Projects[2].eventName}
			eventDescription={Projects[2].eventDescription}
		/>
		<SectionTitle pageName="buildingCommunity" />
		<EventCardOne
			eventPhoto={Events[0].photo}
			eventAlit={Events[0].alt}
			eventName={Events[0].eventName}
			eventDescription={Events[0].eventDescription}
		/>
		<EventCardTwo
			eventPhoto={Events[1].photo}
			eventAlit={Events[1].alt}
			eventName={Events[1].eventName}
			eventDescription={Events[1].eventDescription}
		/>
		<EventCardOne
			eventPhoto={Events[2].photo}
			eventAlit={Events[2].alt}
			eventName={Events[2].eventName}
			eventDescription={Events[2].eventDescription}
		/>
		<EventCardTwo
			eventPhoto={Events[3].photo}
			eventAlit={Events[3].alt}
			eventName={Events[3].eventName}
			eventDescription={Events[3].eventDescription}
		/>

		<SectionTitle pageName="hobbies" />
	</div>
);

export default IndexPage;
