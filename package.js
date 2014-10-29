Package.describe({
	summary: "Three.js core library + IE9 Polyfills.",
	version: "0.68.7",
	name: "krstffr:three",
	git: "https://github.com/krstffr/meteor-three.git",
});

Package.on_use(function(api) {

	api.add_files(["lib/polyfills/typedarray.js"], "client");
	api.add_files(["lib/polyfills/requestanimationframe.js"], "client");
	api.add_files(["lib/three.js"], "client");

	api.export("THREE", "client");

});
