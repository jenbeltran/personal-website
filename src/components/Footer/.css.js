import styled from 'styled-components';
import { breakpoints } from '../../theme/breakpoints';
import { colors } from '../../theme/colors';

const { tablet, laptop } = breakpoints;
const { pink } = colors;

const FooterSection = styled.section`
	@media (min-width: ${laptop}px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 3rem 1rem 3rem;
		background-color: ${pink};
	}
	@media (max-width: ${tablet}px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: ${pink};
		padding: 2rem;
		text-align: center;
	}
`;

const Headline = styled.p`
	@media (min-width: ${laptop}px) {
		font-family: lato;
		font-size: 1.3rem;
		font-weight: 500;
	}
	@media (max-width: ${tablet}px) {
		font-family: lato;
		font-size: 1.5rem;
		font-weight: 500;
	}
`;

const ContactInfo = styled.p`
	font-family: lato;
	font-size: 1rem;
`;

const SocialIconList = styled.div`
	@media (min-width: ${laptop}px) {
		display: flex;
		justify-content: flex-end;
	}
`;

const SocialIcon = styled.img`
	height: 35px;
	width: 35px;
	padding: 1rem;
`;

export { FooterSection, Headline, ContactInfo, SocialIconList, SocialIcon };
