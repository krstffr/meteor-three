Package.describe({
	summary: "Three.js core library + IE8 Polyfill.",
	version: "0.68.3",
	name: "krstffr:three",
	git: "https://github.com/krstffr/meteor-three.git",
});

Npm.depends({ typedarray: "0.0.6" });

Package.on_use(function(api) {

	api.add_files(["lib/three.js"], "client");

	api.export("THREE", "client");

});
