import React from 'react';
import scrollTo from 'gatsby-plugin-smoothscroll';

import {
	StyleNav,
	StyledNavBrand,
	StyleNavLinks,
	NavListItem,
	CheckboxInput,
	CheckboxLabel,
	MobileNavIcon,
	NavElement,
	Anchor,
	Headline,
	Tab
} from './css';

const Nav = () => {
	return (
		<div id="navbar">
			<CheckboxLabel htmlFor="mobile-nav-icon">
				<MobileNavIcon />
			</CheckboxLabel>
			<CheckboxInput type="checkbox" id="mobile-nav-icon" name="mobile-nav-icon" />

			<StyleNav id="#nav">
				<StyledNavBrand id="icon">
					<Anchor href="#home" onClick={() => scrollTo('#navbar')}>
						<Headline>Jen Beltran</Headline>
					</Anchor>
				</StyledNavBrand>

				<NavElement>
					<StyleNavLinks>
						<NavListItem>
							<Anchor href="#skills" onClick={() => scrollTo('#skills')}>
								<Tab>Skills</Tab>
							</Anchor>
						</NavListItem>
						<NavListItem>
							<Anchor href="#projects" onClick={() => scrollTo('#projects')}>
								<Tab>Projects</Tab>
							</Anchor>
						</NavListItem>
						<NavListItem>
							<Anchor href="#buildingCommunity" onClick={() => scrollTo('#buildingCommunity')}>
								<Tab>Building Community</Tab>
							</Anchor>
						</NavListItem>
						<NavListItem>
							<Anchor href="#hobbies" onClick={() => scrollTo('#hobbies')}>
								<Tab>Hobbies</Tab>
							</Anchor>
						</NavListItem>
						<NavListItem>
							<Anchor href="#contact" onClick={() => scrollTo('#contact')}>
								<Tab>Contact Me</Tab>
							</Anchor>
						</NavListItem>
					</StyleNavLinks>
				</NavElement>
			</StyleNav>
		</div>
	);
};

export default Nav;
