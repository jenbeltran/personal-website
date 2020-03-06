import styled from 'styled-components';

const AboutMeSection = styled.section`
	@media (min-width: 850px) {
		position: relative;
		display: flex;
		margin: auto;
		padding: 7rem;
	}
	@media (max-width: 849px) {
		margin: auto;
		padding-bottom: 7rem;
	}
`;

const Wrapper = styled.div`
	@media (min-width: 850px) {
		padding-left: 2rem;
		border-left: 5px solid #e57f84;
	}

	@media (max-width: 849px) {
		padding: 2rem 2rem 5rem 2rem;
	}
`;

const Headline = styled.p`
	@media (min-width: 850px) {
		font-family: lato;
		font-size: 2rem;
		font-weight: 500;
	}

	@media (max-width: 849px) {
		font-family: lato;
		font-size: 2rem;
		font-weight: 500;
		color: #e57f84;
	}
`;

const Description = styled.p`
	font-family: lato;
	font-size: 1.3rem;
`;

const AboutMePhoto = styled.img`
	@media (min-width: 850px) {
		height: 400px;
		transform: rotate(90deg);
		box-shadow: 10px -10px #e57f84;
		border-radius: 5%;
	}
	@media (max-width: 849px) {
		width: 100%;
		height: auto;
		transform: rotate(90deg);
		box-shadow: 10px -10px #e57f84;
		border-radius: 5%;
	}
`;

export { AboutMeSection, Wrapper, Headline, Description, AboutMePhoto };
