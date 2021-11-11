import styled from "styled-components";
import { Button } from ".";

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
		}
	}
`;

const InputButton = styled(Button)`
	background-color: var(--col5);
`;
