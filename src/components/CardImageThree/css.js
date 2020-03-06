import styled from 'styled-components';

const CardSection = styled.section`
	@media (min-width: 850px) {
		position: relative;
		display: flex;
		margin-top: auto;
		padding: 2rem 5rem 3rem 5rem;
	}

	@media (max-width: 849px) {
		margin: auto;
	}
`;

const CardPhoto = styled.img`
	@media (min-width: 850px) {
		height: 300px;
		width: 475px;
		position: relative;
		display: flex;
		margin: auto;
		border-radius: 5%;
	}

	@media (max-width: 849px) {
		height: 100%;
		width: 100%;
		margin: auto;
		position: relative;
	}
`;

const Wrapper = styled.div`
	@media (min-width: 850px) {
		margin-left: 7rem;
		padding-left: 1rem;
		padding-top: 1rem;
		border-left: 5px solid #e57f84;
	}

	@media (max-width: 849px) {
		margin: auto;
		padding: 2rem;
		text-align: center;
	}
`;

const EventName = styled.p`
	font-family: lato;
	font-size: 1.5rem;
	font-weight: 500;
	color: #23286b;
`;

const Description = styled.p`
	font-family: lato;
	font-size: 1.2rem;
	line-height: 30px;
`;
export { CardSection, CardPhoto, Wrapper, EventName, Description };
