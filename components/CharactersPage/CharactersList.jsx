import styled from "styled-components";
import useSWR from "swr";
import { breakpoints } from "../../styles";
import { fetcher } from "../../utils/index";

const CharactersList = ({ index, initialData }) => {
	const { data, error } = useSWR(`/api/characters?page=${index}`, fetcher, {
		initialData,
	});

	return (
		<CharactersListWrapper>
			{data?.results?.map((e, i) => (
				<ImageWrapper key={i}>
					<img src={e.image} alt={e.name} />
					<p>{e.name}</p>
				</ImageWrapper>
			))}
		</CharactersListWrapper>
	);
};

const CharactersListWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;

	@media ${breakpoints.desktopS} {
		justify-content: center;
	}
`;

const ImageWrapper = styled.div`
	position: relative;
	border-radius: 3.5rem;
	display: flex;
	overflow: hidden;
	box-shadow: var(--shadow);
	flex: 1 1 40%;
	max-width: 28rem;

	img {
		width: 100%;
	}

	p {
		position: absolute;
		bottom: 0;
		left: 0;
		background: rgba(255, 255, 255, 0.858);
		padding: 1rem 2.5rem;
		border-radius: 1.5rem 2rem 1rem 0;
		font-weight: 600;
		font-size: var(--t);
	}
`;

export default CharactersList;
