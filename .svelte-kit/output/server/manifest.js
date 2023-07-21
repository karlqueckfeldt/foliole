export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "foliole/_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.ce0b90c6.js","app":"_app/immutable/entry/app.ccde9740.js","imports":["_app/immutable/entry/start.ce0b90c6.js","_app/immutable/chunks/index.3cadb944.js","_app/immutable/chunks/singletons.4a775d05.js","_app/immutable/entry/app.ccde9740.js","_app/immutable/chunks/index.3cadb944.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
