import { useState } from "react";
import Div100vh from "react-div-100vh";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft } from "@fortawesome/free-solid-svg-icons";
//components
import { breakpoints, Button, Input } from "../styles";

const HeroPage = () => {
	const [searchActive, setSearchActive] = useState(false);

	return (
		<HeroPageSection>
			<Filler></Filler>
			<Wrapper>
				<ImageWrapper>
					<img src="/main-image.jpg" alt="main image" />
				</ImageWrapper>
				<div>
					<HeadlineWrapper>
						<h2>all characters from</h2>
						<h1>Rick and Morty</h1>
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
				</div>
			</Wrapper>
		</HeroPageSection>
	);
};

const ReturnWrapper = styled.div`
	display: inline-flex;
	padding: 1rem 0;
	gap: 0.8rem;
	color: var(--col7);
`;

const Filler = styled.div`
	position: absolute;
	top: 50%;
	right: 0;
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	background-color: var(--col2);
	z-index: -1;
	transform: translateX(550%) scale(18);
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

const HeroPageSection = styled.section`
	position: relative;
	height: 100%;
	max-width: var(--max-width);
	padding: var(--side-p);
	width: 100%;
	max-width: 100%;
	max-height: 100%;
	overflow: hidden;
	height: 100vh;
`;

const HeadlineWrapper = styled.div`
	h2 {
		font-size: var(--smh);
		color: var(--col5);
		font-weight: 500;
	}
	h1 {
		font-size: var(--mh);
	}
`;

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
	}
`;

export default HeroPage;
