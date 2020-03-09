import styled from 'styled-components';
import { breakpoints } from './breakpoints';
import { colors } from './colors';

const { desktop } = breakpoints;
const { pink, indigo, white } = colors;

export const SectionWrapper = styled.div`
	@media (min-width: ${desktop}px) {
		position: relative;
		display: flex;
		margin: auto 15% auto 15%;
		padding: 2rem 5rem 3rem 5rem;
	}
`;

export const ParagraphTitle = styled.p`
	font-family: lato;
	font-size: 1.5rem;
	font-weight: 500;
	color: ${indigo};
`;

export const ParagraphDescription = styled.p`
	font-family: lato;
	font-size: 1.2rem;
	line-height: 30px;
`;

export const Anchor = styled.a`text-decoration: none;`;

export const Button = styled.button`
	background: ${white};
	color: ${pink};
	border: 2px solid ${pink};
`;
