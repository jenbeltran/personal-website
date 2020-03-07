import styled from 'styled-components';

const FooterSection = styled.section`
	@media (min-width: 850px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 3rem 1rem 3rem;
		background-color: #e57f84;
	}
	@media (max-width: 849px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #e57f84;
		padding: 2rem;
	}
`;

const Headline = styled.p`
	@media (min-width: 850px) {
		font-family: lato;
		font-size: 1.3rem;
		font-weight: 500;
	}
	@media (max-width: 849px) {
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
	@media (min-width: 850px) {
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
