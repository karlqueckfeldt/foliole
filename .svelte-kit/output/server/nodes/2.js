import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.c174588d.js","_app/immutable/chunks/index.3cadb944.js","_app/immutable/chunks/foliole.0c0d5be8.js"];
export const stylesheets = ["_app/immutable/assets/2.19570206.css"];
export const fonts = [];
