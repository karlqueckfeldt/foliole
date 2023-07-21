

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ba7b8108.js","_app/immutable/chunks/index.3cadb944.js","_app/immutable/chunks/stores.b703a8da.js","_app/immutable/chunks/singletons.4a775d05.js"];
export const stylesheets = [];
export const fonts = [];
