import { atom } from 'jotai'

const pictures = [
	'bg-1-1011',
	'bg-1-1012',
	'bg-1-1013',
	'bg-1-1014',
	'bg-1-1015',
	'bg-1-1016'
];

export const pageAtom = atom(0);
export const pages = [
	{
		front: "book-cover",
		back: pictures[0],
	},
];
for (let i = 1; i < pictures.length - 1; i += 2) {
	pages.push({
		front: pictures[i % pictures.length],
		back: pictures[(i + 1) % pictures.length],
	});
}

pages.push({
	front: pictures[pictures.length - 1],
	back: "book-back",
});