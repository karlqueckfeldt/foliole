

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/components/cards/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.9313cab5.js","_app/immutable/chunks/index.3cadb944.js","_app/immutable/chunks/SubpageContainer.ca5160db.js"];
export const stylesheets = ["_app/immutable/assets/SubpageContainer.c47a857b.css","_app/immutable/assets/SubpageContainer.01efa8eb.css"];
export const fonts = [];
