import styled from "styled-components";
import useSWR from "swr";
import { breakpoints } from "../../styles";
import { fetcher } from "../../utils/index";
import Link from "next/link";

const CharactersList = ({ index, initialData }) => {
	const { data, error } = useSWR(`/api/characters?page=${index}`, fetcher, {
		initialData,
	});

	return (
		<CharactersListWrapper>
			{data?.results?.map((e, i) => (
				<Link href={`/characters/${e.id}`} key={i}>
					<a>
						<ImageWrapper>
							<img src={e.image} alt={e.name} />
							<p>{e.name}</p>
						</ImageWrapper>
					</a>
				</Link>
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
	max-width: 15rem;

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
		color: var(--col1);
	}

	@media ${breakpoints.tabletS} {
		max-width: 20rem;
	}

	@media ${breakpoints.desktopS} {
		p {
			opacity: 0;
			transition: all 0.5s ease-in-out;
		}

		&:hover {
			p {
				opacity: 1;
				transition: all 0.3s ease-in-out;
			}
		}
	}

	@media ${breakpoints.desktopX} {
		max-width: 28rem;
	}
`;

export default CharactersList;
