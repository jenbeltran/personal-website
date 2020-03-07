import styled from 'styled-components';

export const Grid = styled.ul`
	margin: 0;
	padding: 0;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: auto;

	@media screen and (min-width: 850px) {
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(10, 5vw);
		grid-gap: 4px;
		margin: 4px 0;
	}
`;

export const Img = styled.img`
	object-fit: cover;
	max-height: 75vw;
	width: 100%;

	&.position-bottom {
		object-position: center bottom;
	}

	&.position-center {
		object-position: center center;
	}

	@media screen and (min-width: 850px) {
		width: 100%;
		height: 100%;
		max-height: auto;
		border-radius: 5%;
	}
`;

export const PicOne = styled.li`
	@media screen and (min-width: 850px) {
		grid-row: 1/12;
		grid-column: 10/-1;
		padding: 0.5rem;
	}
`;
export const PicTwo = styled.li`
	@media screen and (min-width: 850px) {
		grid-row: 1/12;
		grid-column: 1/5;
		padding: 0.5rem;
	}
`;
export const PicThree = styled.li`
	@media screen and (min-width: 850px) {
		grid-column: 5/8;
		grid-row: 1/6;
		display: block;
		padding: 0.5rem;
	}
`;

export const PicSix = styled.li`
	@media screen and (min-width: 850px) {
		grid-row: 6/-1;
		grid-column: 5/10;
		padding: 0.5rem;
	}
`;
export const PicSeven = styled.li`
	@media screen and (min-width: 850px) {
		grid-column: 8/10;
		grid-row: 1/6;
		padding: 0.5rem;
	}
`;
