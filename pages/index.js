import HeroPage from "../components/HeroPage/index";
import { getData, getInitialData } from "./api/charactersGraphql";

export default function Home() {
	return (
		<>
			<HeroPage />
		</>
	);
}

// export const getStaticProps = async () => {
// 	const { data, totalCount } = await getInitialData();
// 	const dataArray = [];

// 	//to optimise I start from i = 1, because I have the data
// 	//about index 0
// 	dataArray.push(data);
// 	for (let i = 1; i < totalCount; i++) {
// 		const data = await getData(i);
// 		dataArray.push(data);
// 	}

// 	return {
// 		props: {
// 			response: dataArray.flat(),
// 		},
// 	};
// };
