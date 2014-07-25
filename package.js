Package.describe({
	summary: "Three.js - A JavaScript 3D library"
});

Package.on_use(function(api) {
	api.add_files([
		// Core Library
		"lib/three.js",

		// Loaders
		"lib/loaders/OBJMTLLoader.js",
		"lib/loaders/MTLLoader.js",
		"lib/loaders/OBJLoader.js",
		"lib/loaders/ctm/ctm.js",
		"lib/loaders/ctm/CTMLoader.js",
		"lib/loaders/ctm/CTMWorker.js",
		"lib/loaders/ctm/lzma.js",

		// Exporters
		"lib/exporters/STLBinaryExporter.js",

		// Controls
		"lib/controls/TrackballControls.js",
		"lib/controls/OrbitControls.js",
		"lib/controls/FlyControls.js",

		// PostProcessing
		"lib/postprocessing/BloomPass.js",
		"lib/postprocessing/BokehPass.js",
		"lib/postprocessing/DotScreenPass.js",
		"lib/postprocessing/EffectComposer.js",
		"lib/postprocessing/FilmPass.js",
		"lib/postprocessing/GlitchPass.js",
		"lib/postprocessing/MaskPass.js",
		"lib/postprocessing/RenderPass.js",
		"lib/postprocessing/SavePass.js",
		"lib/postprocessing/ShaderPass.js",
		"lib/postprocessing/TexturePass.js",

		// Shaders
		"lib/shaders/BasicShader.js",
		"lib/shaders/BleachBypassShader.js",
		"lib/shaders/BlendShader.js",
		"lib/shaders/BokehShader.js",
		"lib/shaders/BokehShader2.js",
		"lib/shaders/BrightnessContrastShader.js",
		"lib/shaders/ColorCorrectionShader.js",
		"lib/shaders/ColorifyShader.js",
		"lib/shaders/ConvolutionShader.js",
		"lib/shaders/CopyShader.js",
		"lib/shaders/DigitalGlitch.js",
		"lib/shaders/DOFMipMapShader.js",
		"lib/shaders/DotScreenShader.js",
		"lib/shaders/EdgeShader.js",
		"lib/shaders/EdgeShader2.js",
		"lib/shaders/FilmShader.js",
		"lib/shaders/FocusShader.js",
		"lib/shaders/FresnelShader.js",
		"lib/shaders/FXAAShader.js",
		"lib/shaders/HorizontalBlurShader.js",
		"lib/shaders/HorizontalTiltShiftShader.js",
		"lib/shaders/HueSaturationShader.js",
		"lib/shaders/KaleidoShader.js",
		"lib/shaders/LuminosityShader.js",
		"lib/shaders/MirrorShader.js",
		"lib/shaders/NormalMapShader.js",
		"lib/shaders/OceanShaders.js",
		"lib/shaders/RGBShiftShader.js",
		"lib/shaders/SepiaShader.js",
		"lib/shaders/SSAOShader.js",
		"lib/shaders/TechnicolorShader.js",
		"lib/shaders/TriangleBlurShader.js",
		"lib/shaders/UnpackDepthRGBAShader.js",
		"lib/shaders/VerticalBlurShader.js",
		"lib/shaders/VerticalTiltShiftShader.js",
		"lib/shaders/VignetteShader.js"
	], "client");

	api.export("THREE", "client");
});
