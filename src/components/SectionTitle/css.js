import styled from 'styled-components';

const TitleSection = styled.section`
	text-align: center;
	margin: auto;
	padding: 1rem;
	background-color: ${(titleName) => (titleName === 'Skills' ? '' : '#F3F3F3')};
`;

const Headline = styled.p`
	font-family: lato;
	font-size: 2rem;
	font-weight: 500;
	color: #23286b;
`;

const Description = styled.p`
	font-family: lato;
	font-size: 1.3rem;
`;

export { TitleSection, Headline, Description };
