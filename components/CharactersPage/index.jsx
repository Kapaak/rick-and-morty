import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactPaginate from "react-paginate";
import { useRouter } from "next/router";
import Link from "next/link";
//components
import CharactersList from "./CharactersList";
import PreloadNextCharacterList from "./PreloadCharactersList";
//styles
import {
	Filler,
	MainHeadline,
	MainSubheadline,
	Section,
	Wrapper,
} from "../../styles";

const CharactersPage = ({ initialData }) => {
	const PAGE_COUNT = initialData.info.pages;
	const router = useRouter();

	// useEffect(() => {
	// 	router.push(`?page=${pageIndex}`);
	// }, [pageIndex]);

	// useEffect(() => {
	// 	setPageIndex(+router.query.page);
	// }, [router.query]);

	const handlePageChange = e => {
		const pageNumber = e.selected + 1;
		router.push(`?page=${pageNumber}`);
	};
	return (
		<CharactersPageSection>
			<StyledWrapper>
				<Filler />
				<div>
					<MainHeadline>All characters</MainHeadline>
					<StyledMainSubheadline>
						<Link href="/">
							<a>home</a>
						</Link>
					</StyledMainSubheadline>
				</div>
				<CharactersList index={router.query.page} initialData={initialData} />
				<PreloadNextCharacterList
					pageIndex={+router.query.page + 1}
					initialData={initialData}
				/>
			</StyledWrapper>
			<PaginationWrapper>
				<ReactPaginate
					breakLabel="..."
					nextLabel="next >"
					onPageChange={e => handlePageChange(e)}
					pageRangeDisplayed={2}
					pageCount={PAGE_COUNT}
					previousLabel="< previous"
					renderOnZeroPageCount={null}
				/>
			</PaginationWrapper>
		</CharactersPageSection>
	);
};

const StyledMainSubheadline = styled(MainSubheadline)`
	color: var(--col1);

	a {
		color: inherit;
		text-decoration: none;
	}
`;

const CharactersPageSection = styled(Section)``;

const PaginationWrapper = styled.div`
	ul {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 43rem;
		margin-left: auto;

		li {
			list-style: none;
			cursor: pointer;
		}

		.selected {
			background-color: var(--col6);
			padding: 0.3rem 1rem;
			border-radius: 50%;
			font-weight: 600;
		}
	}
`;

const StyledWrapper = styled(Wrapper)`
	justify-content: flex-end;
	padding-bottom: 2rem;
`;

export default CharactersPage;
