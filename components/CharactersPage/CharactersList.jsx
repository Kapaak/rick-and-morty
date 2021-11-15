import { useRef } from "react";
import styled from "styled-components";
import useSWR from "swr";
import { breakpoints } from "../../styles";
import { fetcher } from "../../utils/index";
import Link from "next/link";
import Image from "next/image";

const CharactersList = ({ index, initialData }) => {
	const mutableRef = useRef();
	const { data, error } = useSWR(`/api/characters?page=${index}`, fetcher, {
		initialData: mutableRef.current ? mutableRef.current : initialData,
	});

	if (data !== undefined && mutableRef) {
		mutableRef.current = data;
	}

	return (
		<CharactersListWrapper>
			{data?.results?.map((e, i) => (
				<Link href={`/characters/${e.id}`} key={i}>
					<a>
						<ImageWrapper>
							<Image
								src={e.image}
								alt={e.name}
								height="300"
								width="300"
								placeholder="blur"
								blurDataURL="/main-image.jpg"
							/>
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
