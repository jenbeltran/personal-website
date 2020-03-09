import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { colors } from '../../theme/colors';

const { tablet, laptop, desktop, largeDesktop } = breakpoints;
const { pink, grey } = colors;

const CardSection = styled.section`
	@media (min-width: ${largeDesktop}px) {
		background-color: ${grey};
		position: relative;
		display: flex;
		margin: auto;
		padding: 5rem 17% 5rem 17%;
	}

	@media (min-width: ${laptop}px) and (max-width: ${desktop}px) {
		background-color: ${grey};
		position: relative;
		display: flex;
		margin-top: auto;
		padding: 2rem 5rem 3rem 5rem;
	}

	@media (max-width: ${tablet}px) {
		margin: auto;
		background-color: ${grey};
	}
`;

const CardPhotoMin = styled.img`
	@media (min-width: ${laptop}px) {
		height: 0%;
		width: 0%;
		margin: auto;
		position: relative;
	}
	@media (max-width: ${tablet}px) {
		height: 100%;
		width: 100%;
		margin: auto;
		position: relative;
	}
`;

const CardPhotoMax = styled.img`
	@media (min-width: ${largeDesktop}px) {
		height: 400px;
		width: 575px;
		position: relative;
		display: flex;
		margin: auto;
		box-shadow: 10px 10px ${pink};
		border-radius: 5%;
	}
	@media (min-width: ${laptop}px) and (max-width: ${desktop}px) {
		height: 300px;
		width: 475px;
		position: relative;
		display: flex;
		margin: auto;
		box-shadow: 10px 10px ${pink};
		border-radius: 5%;
	}
	@media (max-width: ${tablet}px) {
		height: 0%;
		width: 0%;
		margin: auto;
		position: relative;
	}
`;

const Wrapper = styled.div`
	@media (min-width: ${laptop}px) {
		padding-right: 5rem;
		padding-top: 1rem;
	}

	@media (max-width: ${tablet}px) {
		margin: auto;
		padding: 2rem;
		text-align: center;
	}
`;

export { CardSection, CardPhotoMin, CardPhotoMax, Wrapper };
