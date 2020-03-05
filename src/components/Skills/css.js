import styled from 'styled-components';

const SkillsSection = styled.section`
	margin-top: auto;
	padding: 2rem;
	position: relative;
`;

const RowWrapper = styled.section`
	display: flex;
	text-align: center;
	justify-content: space-evenly;
`;

const Wrapper = styled.div`padding: 1rem;`;

const CodingLogo = styled.img`
	height: 100px;
	width: 100px;
	position: relative;
	display: flex;
	margin: auto;
`;

const CodingLanguage = styled.p`
	font-family: lato;
	font-size: 1.2rem;
`;

export { SkillsSection, RowWrapper, Wrapper, CodingLogo, CodingLanguage };
