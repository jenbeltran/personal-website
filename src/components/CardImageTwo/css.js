import styled from 'styled-components';

const CardSection = styled.section`
	background-color: #f3f3f3;
	position: relative;
	display: flex;
	margin-top: auto;
	padding: 2rem 5rem 2rem 5rem;
`;

const CardPhoto = styled.img`
	height: 300px;
	width: 475px;
	position: relative;
	display: flex;
	margin: auto;
	box-shadow: 10px 10px #e57f84;
	border-radius: 5%;
`;

const Wrapper = styled.div`
	padding-right: 5rem;
	padding-top: 1rem;
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
