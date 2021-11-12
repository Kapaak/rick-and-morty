import CharactersList from "./CharactersList";

const PreloadNextCharacterList = ({ pageIndex, initialData }) => {
	return (
		<div style={{ display: "none" }}>
			<CharactersList index={pageIndex + 1} initialData={initialData} />
		</div>
	);
};

export default PreloadNextCharacterList;
