Package.describe({
	summary: "Three.js - A JavaScript 3D library"
});

Package.on_use(function(api) {
	api.add_files(["lib/three.js"], "client");

	api.export("THREE");

	api.add_files([
		// Loaders
		"extras/loaders/OBJMTLLoader.js",
		"extras/loaders/MTLLoader.js",
		"extras/loaders/OBJLoader.js",
		"extras/loaders/ctm/ctm.js",
		"extras/loaders/ctm/CTMLoader.js",
		"extras/loaders/ctm/CTMWorker.js",
		"extras/loaders/ctm/lzma.js",

		// Exporters
		"extras/exporters/STLBinaryExporter.js",

		// Controls
		"extras/controls/TrackballControls.js",
		"extras/controls/OrbitControls.js",
		"extras/controls/FlyControls.js",

		// PostProcessing
		"extras/postprocessing/BloomPass.js",
		"extras/postprocessing/BokehPass.js",
		"extras/postprocessing/DotScreenPass.js",
		"extras/postprocessing/EffectComposer.js",
		"extras/postprocessing/FilmPass.js",
		"extras/postprocessing/GlitchPass.js",
		"extras/postprocessing/MaskPass.js",
		"extras/postprocessing/RenderPass.js",
		"extras/postprocessing/SavePass.js",
		"extras/postprocessing/ShaderPass.js",
		"extras/postprocessing/TexturePass.js",

		// Shaders
		"extras/shaders/BasicShader.js",
		"extras/shaders/BleachBypassShader.js",
		"extras/shaders/BlendShader.js",
		"extras/shaders/BokehShader.js",
		"extras/shaders/BokehShader2.js",
		"extras/shaders/BrightnessContrastShader.js",
		"extras/shaders/ColorCorrectionShader.js",
		"extras/shaders/ColorifyShader.js",
		"extras/shaders/ConvolutionShader.js",
		"extras/shaders/CopyShader.js",
		"extras/shaders/DigitalGlitch.js",
		"extras/shaders/DOFMipMapShader.js",
		"extras/shaders/DotScreenShader.js",
		"extras/shaders/EdgeShader.js",
		"extras/shaders/EdgeShader2.js",
		"extras/shaders/FilmShader.js",
		"extras/shaders/FocusShader.js",
		"extras/shaders/FresnelShader.js",
		"extras/shaders/FXAAShader.js",
		"extras/shaders/HorizontalBlurShader.js",
		"extras/shaders/HorizontalTiltShiftShader.js",
		"extras/shaders/HueSaturationShader.js",
		"extras/shaders/KaleidoShader.js",
		"extras/shaders/LuminosityShader.js",
		"extras/shaders/MirrorShader.js",
		"extras/shaders/NormalMapShader.js",
		"extras/shaders/OceanShaders.js",
		"extras/shaders/RGBShiftShader.js",
		"extras/shaders/SepiaShader.js",
		"extras/shaders/SSAOShader.js",
		"extras/shaders/TechnicolorShader.js",
		"extras/shaders/TriangleBlurShader.js",
		"extras/shaders/UnpackDepthRGBAShader.js",
		"extras/shaders/VerticalBlurShader.js",
		"extras/shaders/VerticalTiltShiftShader.js",
		"extras/shaders/VignetteShader.js"
	], "client");
});
