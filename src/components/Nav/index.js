import React from 'react';

import { NavSection, Headline, Wrapper, Tab } from './.css.js';

const Nav = () => {
	return (
		<NavSection>
			<Headline>Jen Beltran</Headline>
			<Wrapper>
				<Tab>Skills</Tab>
				<Tab>Projects</Tab>
				<Tab>Building Community</Tab>
				<Tab>Hobbies</Tab>
				<Tab>Contact Me</Tab>
			</Wrapper>
		</NavSection>
	);
};

export default Nav;
