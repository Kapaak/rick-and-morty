import { useState } from "react";
import Div100vh from "react-div-100vh";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import rickAndMorty from "../../public/main-image.jpg";
//components
import {
	breakpoints,
	Button,
	Input,
	MainHeadline,
	MainSubheadline,
	Section,
	Filler,
	ReturnPrevious,
} from "../../styles";

const HeroPage = () => {
	// const [searchActive, setSearchActive] = useState(false);

	return (
		<Div100vh>
			<HeroPageSection>
				<Filler />
				<Wrapper>
					<ImageWrapper>
						<Image
							src={rickAndMorty}
							alt="Rick and Morty main image"
							placeholder="blur"
							objectFit="cover"
						/>
					</ImageWrapper>
					<TextWrapper>
						<HeadlineWrapper>
							<MainSubheadline>all characters from</MainSubheadline>
							<MainHeadline>Rick and Morty</MainHeadline>
						</HeadlineWrapper>
						{/*{!searchActive && (*/}
						<ButtonWrapper>
							{/* <Button onClick={() => setSearchActive(true)}>search</Button> */}
							<Button>
								<Link href="/characters">
									<a>see all of them</a>
								</Link>
							</Button>
						</ButtonWrapper>
						{/*)}*/}
						{/* {searchActive && (
							<InputWrapper>
								<Input data={data} />
								<ReturnPrevious onClick={() => setSearchActive(false)} />
							</InputWrapper>
						)} */}
					</TextWrapper>
				</Wrapper>
			</HeroPageSection>
		</Div100vh>
	);
};

const TextWrapper = styled.div`
	@media ${breakpoints.desktopX} {
		flex: 0 1 29%;
	}
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	height: 100%;
	gap: var(--gap);
	padding-bottom: 2rem;

	@media ${breakpoints.tabletS} {
		flex-direction: row-reverse;
		align-items: center;
		justify-content: center;
	}
`;

const HeroPageSection = styled(Section)`
	display: flex;
	align-items: end;
	overflow: hidden;
	min-height: 100%;

	@media ${breakpoints.tabletS} {
		align-items: center;
	}
`;

const HeadlineWrapper = styled.div``;

const ButtonWrapper = styled.div`
	display: flex;
`;

const InputWrapper = styled.div``;

const ImageWrapper = styled.div`
	min-height: 30rem;
	height: 30rem;
	width: 100%;

	max-width: 50rem;
	flex: 0 1 50%;

	& > span {
		height: 100% !important;
		display: flex;
		border-radius: 1rem;
		box-shadow: var(--shadow);
	}

	@media ${breakpoints.tabletS} {
		height: 44rem;
		max-width: 100%;
		flex: 0 1 48%;
	}

	@media ${breakpoints.desktopS} {
		& > span {
			height: 100% !important;
		}
	}

	@media ${breakpoints.desktopX} {
		height: 65rem;
	}
`;

export default HeroPage;
