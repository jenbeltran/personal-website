import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import { NavSection, Headline, Wrapper, Tab } from './.css.js';

const Nav = () => {
	return (
		<NavSection>
			<Headline>Jen Beltran</Headline>
			<Wrapper>
				<a onClick={() => scrollTo('#skills')}>
					<Tab>Skills</Tab>
				</a>
				<a onClick={() => scrollTo('#projects')}>
					<Tab>Projects</Tab>
				</a>
				<a onClick={() => scrollTo('#buildingCommunity')}>
					<Tab>Building Community</Tab>
				</a>
				<a onClick={() => scrollTo('#hobbies')}>
					<Tab>Hobbies</Tab>
				</a>
				<a onClick={() => scrollTo('#footer')}>
					<Tab>Contact Me</Tab>
				</a>
			</Wrapper>
		</NavSection>
	);
};

export default Nav;
