import React from "react";
import styled from "styled-components";

const CharactersPage = () => {
	return (
		<CharactersPageSection>
			<Wrapper></Wrapper>
		</CharactersPageSection>
	);
};

// const HeadlineWrapper = styled.div`
// h1{

// }
// `

const CharactersPageSection = styled.section`
	height: 100vh;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	gap: var(--gap);
	padding-bottom: 2rem;
`;

export default CharactersPage;
