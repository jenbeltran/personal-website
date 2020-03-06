import styled from 'styled-components';

const SkillsSection = styled.section`
	margin-top: auto;
	position: relative;
	display: flex;
	text-align: center;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 0rem 3rem 3rem 3rem;
`;

const Wrapper = styled.div`
	@media (min-width: 850px) {
		padding: 1rem 3rem 0rem 3rem;
	}
	@media (max-width: 849px) {
		padding: 1rem;
	}
`;

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

export { SkillsSection, Wrapper, CodingLogo, CodingLanguage };
