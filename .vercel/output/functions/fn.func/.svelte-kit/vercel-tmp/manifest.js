export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","icons/dark-icon.svg","icons/light-icon.svg","photos/p1.jpg","photos/p10.jpg","photos/p11.jpg","photos/p12.jpg","photos/p2.jpg","photos/p3.jpg","photos/p4.jpg","photos/p5.jpg","photos/p6.jpg","photos/p7.jpg","photos/p8.jpg","photos/p9.jpg"]),
	mimeTypes: {".ico":"image/vnd.microsoft.icon",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.7f98153b.js","app":"_app/immutable/entry/app.9154f1d2.js","imports":["_app/immutable/entry/start.7f98153b.js","_app/immutable/chunks/index.68a96b34.js","_app/immutable/chunks/singletons.474dad6c.js","_app/immutable/entry/app.9154f1d2.js","_app/immutable/chunks/index.68a96b34.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js'),
			() => import('../output/server/nodes/3.js'),
			() => import('../output/server/nodes/4.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/photos",
				pattern: /^\/photos\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/projects",
				pattern: /^\/projects\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
