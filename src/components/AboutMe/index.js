import React from 'react';
import { AboutMeData } from './data';
import { AboutMeSection, Wrapper, Headline, Description, AboutMePhoto } from './css.js';

const AboutMe = () => {
	const { photo, alt, headline, pointOne, pointTwo, pointThree, pointFour } = AboutMeData;
	return (
		<AboutMeSection>
			<Wrapper>
				<Headline>{headline}</Headline>
				<Description>{pointOne}</Description>
				<Description>{pointTwo}</Description>
				<Description>{pointThree}</Description>
				<Description>{pointFour}</Description>
			</Wrapper>
			<AboutMePhoto src={photo} alt={alt} />
		</AboutMeSection>
	);
};

export default AboutMe;
