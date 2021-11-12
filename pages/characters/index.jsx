import React, { useState } from "react";
//api
import { getData } from "../api/characters";
//components
import CharactersPage from "../../components/CharactersPage";

//fetchnu stranku 20 charakteru
//chci mit na strance jen 10 charakteru, zobrazim 10
//pri kliknuti na next page nahraju tech dalsich 10, ale nefetchnu novy data
//pri kliknuti na next page nahraju dalsich 20, zobrazim jen 10
//dalsi nefetchne nic atd

const Characters = ({ response }) => {
	return (
		<>
			<CharactersPage initialData={response} />
		</>
	);
};

export const getStaticProps = async pageContext => {
	let query = await getData().catch(e => e.message);

	return {
		props: { response: query },
	};
};

export default Characters;
