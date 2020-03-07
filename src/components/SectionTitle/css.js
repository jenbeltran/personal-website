import styled from 'styled-components';
import { colors } from '../../theme/colors';

const { indigo } = colors;

const TitleSection = styled.section`
	text-align: center;
	margin: auto;
	padding: 1rem;
	background-color: ${({ pageName }) => (pageName !== 'buildingCommunity' && pageName !== 'skills' ? '' : '#f3f3f3')};
`;

const Headline = styled.p`
	font-family: lato;
	font-size: 2rem;
	font-weight: 500;
	color: ${indigo};
`;

const Description = styled.p`
	font-family: lato;
	font-size: 1.3rem;
`;

export { TitleSection, Headline, Description };
