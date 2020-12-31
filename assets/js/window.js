AFRAME.registerComponent('window', {
	init() {
		this.el.innerHTML = `<a-box width="0.05" height="1.2" depth="0.05" position="-0.5 0 0"></a-box>
                        <a-box width="0.05" height="1.2" depth="0.05" position="0.5 0 0"></a-box>
                        <a-box width="0.05" height="1.2" depth="0.05"></a-box>

                        <a-box width="0.05" height="1" depth="0.05" rotation="0 0 90"></a-box>
                        <a-box width="0.05" height="1.05" depth="0.05" position="0 -0.6 0" rotation="0 0 90"></a-box>
                        <a-box width="0.05" height="1.05" depth="0.05" position="0 0.575 0" rotation="0 0 90"></a-box>

                        <a-box width="1" height="1.2" depth="0.025" opacity="0.5" color="gray" position="0 0 0"></a-box>`;
	}
});

AFRAME.registerPrimitive('a-window', {
	defaultComponents: {
		window: {}
	},
	mappings: {}
});
