import styled from "styled-components";
import { breakpoints } from "..";

export const Filler = styled.div`
	position: fixed;
	top: 50%;
	right: 0;
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	background-color: ${({ color }) => (color ? color : "var(--col2)")};
	z-index: -1;
	transform: translateX(550%) scale(18);

	@media ${breakpoints.tabletS} {
		transform: translateX(350%) scale(23);
	}

	@media ${breakpoints.desktopS} {
		transform: translateX(318%) scale(25);
	}

	@media ${breakpoints.desktopX} {
		transform: translateX(255%) scale(34);
	}
`;
