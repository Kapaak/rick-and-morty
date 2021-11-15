import React from "react";
import CharacterPage from "../../components/CharacterPage";
import { getData, getPersonData } from "../api/characters";

const Character = ({ response }) => {
	return <CharacterPage data={response} />;
};

export const getStaticProps = async context => {
	const query = await getPersonData(context.params.id).catch(e => e.message);

	return {
		props: {
			response: query,
		},
	};
};

export const getStaticPaths = async () => {
	const query = await getData().catch(e => e.message);

	const ID_COUNT = query.info.count;
	const ids = [];
	for (let i = 1; i <= ID_COUNT; i++) {
		ids.push(i);
	}
	const paths = ids.map(id => ({ params: { id: id.toString() } }));

	return {
		paths,
		fallback: false,
	};
};

export default Character;
