import React from 'react';

import linkedin from '../../images/linkedin.png';
import twitter from '../../images/twitter.png';
import instagram from '../../images/instagram.png';

import { FooterSection, Headline, ContactInfo, SocialIconList, SocialIcon } from './.css.js';

const Footer = () => {
	return (
		<FooterSection id="contact">
			<div>
				<Headline>Contact Information</Headline>
				<ContactInfo>FrancescaJenBeltran@gmail.com</ContactInfo>
			</div>
			<ContactInfo>Coded by Jen Beltran - Copyright 2020</ContactInfo>
			<SocialIconList>
				<a href="https://www.linkedin.com/in/jenfbeltran/" target="_blank" rel="noopener noreferrer">
					<SocialIcon src={linkedin} />
				</a>

				<a href="https://www.instagram.com/everythingjenb/" target="_blank" rel="noopener noreferrer">
					<SocialIcon src={instagram} />
				</a>
				<a href="https://twitter.com/everythingjenb" target="_blank" rel="noopener noreferrer">
					<SocialIcon src={twitter} />
				</a>
			</SocialIconList>
		</FooterSection>
	);
};

export default Footer;
