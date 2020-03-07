import styled from 'styled-components';
import { colors } from './colors';

const { pink, indigo, white } = colors;

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
