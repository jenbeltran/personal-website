import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { colors } from '../../theme/colors';

const { tablet, overTablet } = breakpoints;
const { grey } = colors;

const SkillsSection = styled.section`
	margin-top: auto;
	position: relative;
	display: flex;
	text-align: center;
	justify-content: space-around;
	flex-wrap: wrap;
	padding: 0rem 3rem 3rem 3rem;
	background-color: ${grey};
`;

const Wrapper = styled.div`
	@media (min-width: ${overTablet}px) {
		padding: 1rem 3rem 0rem 3rem;
	}
	@media (max-width: ${tablet}px) {
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
