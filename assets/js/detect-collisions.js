AFRAME.registerComponent('detect-collisions', {
	schema: {
		outside: {
			type: 'boolean',
			default: true
		},
		linkElems: {
			type: 'selectorAll'
		}
	},
	init() {
		this.el.addEventListener('collide', () => {
			if (this.data.linkElems) {
				for (const elem of this.data.linkElems) {
					if (!elem.hasAttribute('open-door') && !elem.hasAttribute('close-door')) {
						elem.setAttribute('open-door', '');
						document.querySelector('a-sound').components.sound.playSound();
					}
				}
			}
		});
	}
});
