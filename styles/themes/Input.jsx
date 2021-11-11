import styled from "styled-components";
import { Button } from ".";
import { breakpoints } from "..";

export const Input = () => {
	return (
		<Form>
			<input placeholder="type to search..." type="text" />
			<InputButton type="submit">submit</InputButton>
		</Form>
	);
};

const Form = styled.form`
	display: flex;
	gap: 1rem;
	input {
		box-shadow: var(--shadow);
		border: none;
		border-radius: 0.5rem;
		padding: 1rem;

		&::placeholder {
			color: #e0e0e0;

			@media ${breakpoints.desktopX} {
				font-size: 1.6rem;
			}
		}

		@media ${breakpoints.desktopS} {
			width: 100%;
			max-width: 29.5rem;
		}
	}
`;

const InputButton = styled(Button)`
	background-color: var(--col5);
`;
