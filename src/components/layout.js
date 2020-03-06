import React from 'react';
import styled from 'styled-components';

import { HighlightsTitle, SkillsTitle, HobbiesTitle } from '../components/SectionTitle';
import { string } from 'prop-types';

const Content = styled.div`flex: 1 0 auto;`;
function Layout({ children }) {
	return (
		<Content>
			<header />
			<main>{children}</main>
		</Content>
	);
}

Layout.propTypes = {
	pageName : string.isRequired
};

export default Layout;
