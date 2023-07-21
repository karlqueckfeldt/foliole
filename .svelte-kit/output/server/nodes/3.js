

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/components/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.ef85eb3b.js","_app/immutable/chunks/index.3cadb944.js"];
export const stylesheets = ["_app/immutable/assets/3.3e5fcd8f.css","_app/immutable/assets/SubpageContainer.01efa8eb.css"];
export const fonts = [];
