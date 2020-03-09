import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { colors } from '../../theme/colors';

const { tablet, laptop, desktop, largeDesktop } = breakpoints;

const { pink } = colors;

const AboutMeSection = styled.section`
	@media (min-width: ${largeDesktop}px) {
		position: relative;
		display: flex;
		margin: auto;
		padding: 7rem 15% 7rem 15%;
	}
	@media (min-width: ${laptop}px) and (max-width: ${desktop}px) {
		position: relative;
		display: flex;
		margin: auto;
		padding: 7rem;
	}
	@media (max-width: ${tablet}px) {
		margin: auto;
		padding-bottom: 10rem;
	}
`;

const Wrapper = styled.div`
	@media (min-width: ${laptop}px) {
		padding-left: 2rem;
		border-left: 5px solid ${pink};
	}

	@media (max-width: ${tablet}px) {
		padding: 2rem 2rem 6rem 2rem;
	}
`;

const Headline = styled.p`
	@media (min-width: ${laptop}px) {
		font-family: lato;
		font-size: 2rem;
		font-weight: 500;
	}

	@media (max-width: ${tablet}px) {
		font-family: lato;
		font-size: 2rem;
		font-weight: 500;
		color: ${pink};
	}
`;

const Description = styled.p`
	font-family: lato;
	font-size: 1.3rem;
`;

const AboutMePhoto = styled.img`
	@media (min-width: ${largeDesktop}px) {
		height: 500px;
		transform: rotate(90deg);
		box-shadow: 10px -10px ${pink};
		border-radius: 5%;
	}
	@media (min-width: ${laptop}px) and (max-width: ${desktop}px) {
		height: 400px;
		transform: rotate(90deg);
		box-shadow: 10px -10px ${pink};
		border-radius: 5%;
	}
	@media (max-width: ${tablet}px) {
		width: 100%;
		height: auto;
		transform: rotate(90deg);
		box-shadow: 10px -10px ${pink};
		border-radius: 5%;
	}
`;

export { AboutMeSection, Wrapper, Headline, Description, AboutMePhoto };
