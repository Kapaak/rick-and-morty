import { useState } from "react";
import Div100vh from "react-div-100vh";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
//components
import {
	breakpoints,
	Button,
	Input,
	MainHeadline,
	MainSubheadline,
	Section,
	Filler,
} from "../../styles";

const HeroPage = () => {
	const [searchActive, setSearchActive] = useState(false);

	return (
		<HeroPageSection>
			<Filler />
			<Wrapper>
				<ImageWrapper>
					<img src="/main-image.jpg" alt="main image" />
				</ImageWrapper>
				<TextWrapper>
					<HeadlineWrapper>
						<MainSubheadline>all characters from</MainSubheadline>
						<MainHeadline>Rick and Morty</MainHeadline>
					</HeadlineWrapper>
					{!searchActive && (
						<ButtonWrapper>
							<Button onClick={() => setSearchActive(true)}>search</Button>
							<Button transparent>
								<Link href="/characters">
									<a>see all of them</a>
								</Link>
							</Button>
						</ButtonWrapper>
					)}
					{searchActive && (
						<InputWrapper>
							<Input />
							<ReturnWrapper onClick={() => setSearchActive(false)}>
								<FontAwesomeIcon icon={faArrowAltCircleLeft} />
								<span>go back to previous selection</span>
							</ReturnWrapper>
						</InputWrapper>
					)}
				</TextWrapper>
			</Wrapper>
		</HeroPageSection>
	);
};

const TextWrapper = styled.div`
	@media ${breakpoints.desktopX} {
		flex: 0 1 29%;
	}
`;

const ReturnWrapper = styled.div`
	display: inline-flex;
	padding: 1rem 0;
	gap: 0.8rem;
	color: var(--col7);

	span {
		cursor: pointer;
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
	height: 30rem;
	width: 100%;
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: var(--shadow);
	max-width: 50rem;
	flex: 0 1 50%;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	@media ${breakpoints.tabletS} {
		height: 44rem;
		max-width: 100%;
		flex: 0 1 48%;
	}

	@media ${breakpoints.desktopX} {
		height: 65rem;
	}
`;

export default HeroPage;
