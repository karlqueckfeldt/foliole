

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/components/text-fields/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.f99a9785.js","_app/immutable/chunks/index.3cadb944.js","_app/immutable/chunks/SubpageContainer.ca5160db.js"];
export const stylesheets = ["_app/immutable/assets/SubpageContainer.c47a857b.css","_app/immutable/assets/SubpageContainer.01efa8eb.css"];
export const fonts = [];
