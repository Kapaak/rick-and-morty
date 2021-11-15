import client from "../../apollo-client/";
import { gql } from "@apollo/client";

export const getData = async (page = 0) => {
	const { data } = await client.query({
		query: gql`
            query Characters{
                characters(page:${page}){
                    results{
                        id
                        name
                    }
                }
            }
        `,
	});

	return data.characters.results;
};

export const getInitialData = async () => {
	const { data } = await client.query({
		query: gql`
			query Characters {
				characters {
					info {
						pages
					}
					results {
						id
						name
					}
				}
			}
		`,
	});

	return {
		data: data.characters.results,
		totalCount: data.characters.info.pages,
	};
};

export default async function handler(req, res) {
	const { page } = req.query;
	const data = await getData(page);
	res.status(200).json(data);
}
