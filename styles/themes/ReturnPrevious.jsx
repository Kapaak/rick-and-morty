import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";

export const ReturnPrevious = ({ message, ...rest }) => {
	return (
		<ReturnWrapper {...rest}>
			<FontAwesomeIcon icon={faArrowAltCircleLeft} />
			<span>go back to the previous selection</span>
		</ReturnWrapper>
	);
};

const ReturnWrapper = styled.div`
	display: inline-flex;
	padding: 1rem 0;
	gap: 0.8rem;
	color: var(--col7);

	span {
		cursor: pointer;
	}
`;
