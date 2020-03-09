import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { colors } from '../../theme/colors';

const { tablet, laptop, desktop, largeDesktop } = breakpoints;
const { pink } = colors;

const CardSection = styled.section`
	@media (min-width: ${laptop}px) {
		position: relative;
		display: flex;
		margin-top: auto;
		padding: 2rem 5rem 3rem 5rem;
	}

	@media (max-width: ${tablet}px) {
		margin: auto;
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
	}
	@media (min-width: ${laptop}px) and (max-width: ${desktop}px) {
		height: 300px;
		width: 475px;
		position: relative;
		display: flex;
		margin: auto;
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
		margin-right: 7rem;
		padding-right: 1rem;
		padding-top: 1rem;
		border-right: 5px solid ${pink};
	}

	@media (max-width: ${tablet}px) {
		margin: auto;
		padding: 2rem;
		text-align: center;
	}
`;

export { CardSection, CardPhotoMin, CardPhotoMax, Wrapper };
