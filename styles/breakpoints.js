const media = size => `(min-width: ${size}px)`;

export const breakpoints = {
	mobileM: media(476),
	mobileX: media(564),
	tabletS: media(766),
	desktopS: media(1024),
	desktopX: media(1500),
};
