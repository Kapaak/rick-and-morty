import styled from "styled-components";
import { breakpoints } from "..";

export const Filler = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	width: 50rem;
	height: 100%;
	border-radius: 50%;
	background-color: ${({ color }) => (color ? color : "var(--col2)")};
	z-index: -1;
	/* transform: translateX(550%) scale(18); */
	transform: translateX(56%);

	@media ${breakpoints.tabletS} {
		transform: translateX(56%);
		width: 80rem;
	}

	@media ${breakpoints.desktopS} {
		transform: translateX(318%) scale(25);
		width: 5rem;
		height: 5rem;
		top: 50%;
	}

	@media ${breakpoints.desktopX} {
		transform: translateX(255%) scale(34);
	}
`;
