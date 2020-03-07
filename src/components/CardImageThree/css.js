import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { colors } from '../../theme/colors';

const { tablet, overTablet } = breakpoints;
const { pink } = colors;

const CardSection = styled.section`
	@media (min-width: ${overTablet}px) {
		position: relative;
		display: flex;
		margin-top: auto;
		padding: 2rem 5rem 3rem 5rem;
	}

	@media (max-width: ${tablet}px) {
		margin: auto;
	}
`;

const CardPhoto = styled.img`
	@media (min-width: ${overTablet}px) {
		height: 300px;
		width: 475px;
		position: relative;
		display: flex;
		margin: auto;
		border-radius: 5%;
	}

	@media (max-width: ${tablet}px) {
		height: 100%;
		width: 100%;
		margin: auto;
		position: relative;
	}
`;

const Wrapper = styled.div`
	@media (min-width: ${overTablet}px) {
		margin-left: 7rem;
		padding-left: 1rem;
		padding-top: 1rem;
		border-left: 5px solid ${pink};
	}

	@media (max-width: ${tablet}px) {
		margin: auto;
		padding: 2rem;
		text-align: center;
	}
`;

export { CardSection, CardPhoto, Wrapper };
