export const getData = async page => {
	const data = await fetch(
		`https://rickandmortyapi.com/api/character?page=${page}`
	);
	const response = await data.json();
	return response;
};

export const getPersonData = async person => {
	const data = await fetch(
		`https://rickandmortyapi.com/api/character/${person}`
	);
	const response = await data.json();
	return response;
};

export default async function handler(req, res) {
	const { page } = req.query;
	const data = await getData(page);
	res.status(200).json(data);
}
