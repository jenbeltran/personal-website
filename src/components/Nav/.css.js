import styled from 'styled-components';

const NavSection = styled.section`
	@media (min-width: 850px) {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 0rem 3rem 0rem 3rem;
	}
	@media (max-width: 849px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		text-align: center;
		background-color: #e57f84;
	}
`;

const Headline = styled.p`
	@media (min-width: 850px) {
		font-family: lato;
		font-size: 2rem;
		font-weight: 800;
		color: #e57f84;
	}
	@media (max-width: 849px) {
		font-family: lato;
		font-size: 1.5rem;
		font-weight: 500;
	}
`;

const Wrapper = styled.div`
	@media (min-width: 850px) {
		display: flex;
		justify-content: flex-end;
	}
`;

const Tab = styled.p`
	font-family: lato;
	font-size: 1.2rem;
	padding: 0rem 1rem 0rem 1rem;
`;

export { NavSection, Headline, Wrapper, Tab };
