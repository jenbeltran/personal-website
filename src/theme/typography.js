import styled from 'styled-components';
import { colors } from './colors';

const { indigo } = colors;

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
