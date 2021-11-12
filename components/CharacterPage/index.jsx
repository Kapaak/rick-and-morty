import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MainHeadline, MainSubheadline, Section } from "../../styles";
import Link from "next/link";

const CharacterPage = ({ data }) => {
	console.log(data, "da");

	return (
		<CharacterPageSection>
			<Wrapper>
				<MainHeadline>{data?.name}</MainHeadline>
				<StyledMainSubheadline>
					<Link href="/">
						<a>home</a>
					</Link>
				</StyledMainSubheadline>
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
			</Wrapper>
		</CharacterPageSection>
	);
};

const CharacterPageSection = styled(Section)``;

const Wrapper = styled.div``;

const InformationWrapper = styled.div`
	h2,
	h3 {
		font-weight: 800;
	}

	h2 {
		font-size: 3.5rem;
		color: #b6b5b5;
	}

	h3 {
		font-size: 3rem;
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
	max-width: 50rem;
	flex: 0 1 50%;

	img {
		object-fit: cover;
		width: 100%;
		height: 100%;
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
