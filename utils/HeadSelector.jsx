//libs
import Head from "next/head";

const HeadSelector = () => {
	return (
		<Head>
			<title>Rick and Morty</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
			<link
				href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
};

export default HeadSelector;
