export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/components": [3],
		"/components/badges": [4],
		"/components/buttons": [5],
		"/components/cards": [6],
		"/components/checkboxes": [7],
		"/components/links": [8],
		"/components/navigation": [9],
		"/components/radio-buttons": [10],
		"/components/select": [11],
		"/components/text-fields": [12],
		"/utilities": [13],
		"/utilities/classes": [14],
		"/utilities/properties": [15]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';