Package.describe({
  summary: "Three.js - A JavaScript 3D library"
});

Package.on_use(function (api) {
    api.add_files(["lib/three.js"], "client");
    api.add_files(['lib/loaders/OBJMTLLoader.js', 'lib/loaders/MTLLoader.js', 'lib/loaders/OBJLoader.js',
    	'lib/loaders/ctm/ctm.js', 'lib/loaders/ctm/CTMLoader.js', 'lib/loaders/ctm/CTMWorker.js', 'lib/loaders/ctm/lzma.js'], 'client');
    api.add_files(["lib/exporters/STLBinaryExporter.js"], "client");
    api.add_files(['lib/controls/TrackballControls.js', 'lib/controls/OrbitControls.js', 'lib/controls/FlyControls.js'], 'client');
    api.export('THREE', 'client');
});
