import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
	breakpoints,
	Filler,
	MainHeadline,
	MainSubheadline,
	ReturnPrevious,
	Section,
	Wrapper,
} from "../../styles";
import Link from "next/link";
import { useRouter } from "next/router";

const CharacterPage = ({ data }) => {
	const router = useRouter();
	return (
		<CharacterPageSection>
			<Filler color="var(--col3)" />
			<Wrapper>
				<div>
					<MainHeadline>{data?.name}</MainHeadline>
					<StyledMainSubheadline>
						<Link href="/">
							<a>home</a>
						</Link>
					</StyledMainSubheadline>
				</div>
				<InnerWrapper>
					<ImageWrapper>
						<img src={data?.image} alt={data?.name} />
					</ImageWrapper>
					<InformationWrapper>
						<InformationItem>
							<h2>Planet</h2>
							<h3>{data?.origin?.name}</h3>
						</InformationItem>
						<InformationItem>
							<h2>Race</h2>
							<h3>{data?.species}</h3>
						</InformationItem>
						<InformationItem>
							<h2>Status</h2>
							<h3>{data?.status}</h3>
						</InformationItem>
					</InformationWrapper>
					<ReturnPrevious onClick={() => router.push("/characters")} />
				</InnerWrapper>
			</Wrapper>
		</CharacterPageSection>
	);
};

const CharacterPageSection = styled(Section)``;

const InformationWrapper = styled.div`
	h2,
	h3 {
		font-weight: 800;
	}

	h2 {
		font-size: 3.5rem;
		color: var(--col8);
		width: 12rem;
	}

	h3 {
		font-size: 3rem;
	}

	@media ${breakpoints.desktopS} {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
`;

const InnerWrapper = styled(Wrapper)`
	@media ${breakpoints.desktopS} {
		flex-direction: row;
	}
`;

const InformationItem = styled.div`
	display: flex;
	align-items: center;
`;

const ImageWrapper = styled.div`
	height: 30rem;
	width: 100%;
	border-radius: 1rem;
	overflow: hidden;
	box-shadow: var(--shadow);
	max-width: 36rem;

	flex: 0 1 50%;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
	}

	@media ${breakpoints.tabletS} {
		max-width: 50rem;
	}

	@media ${breakpoints.desktopS} {
		height: auto;
	}
`;

const StyledMainSubheadline = styled(MainSubheadline)`
	color: var(--col1);

	a {
		color: inherit;
		text-decoration: none;
	}
`;

export default CharacterPage;
