import styled from "styled-components";

export const Button = styled.button`
	border: none;
	background-color: ${({ transparent }) =>
		transparent ? "transparent" : "var(--col6)"};
	padding: 0.8rem 2rem;
	border-radius: 0.5rem;
	box-shadow: ${({ transparent }) => (transparent ? "none" : "var(--shadow)")};
	font-weight: 500;
	font-size: var(--t);
	font-family: inherit;

	a {
		color: inherit;
		text-decoration: none;
	}
`;
