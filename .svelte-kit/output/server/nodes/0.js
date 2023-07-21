import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.48a2819d.js","_app/immutable/chunks/index.3cadb944.js","_app/immutable/chunks/foliole.0c0d5be8.js","_app/immutable/chunks/singletons.4a775d05.js","_app/immutable/chunks/stores.b703a8da.js"];
export const stylesheets = ["_app/immutable/assets/0.54e232f3.css"];
export const fonts = [];
