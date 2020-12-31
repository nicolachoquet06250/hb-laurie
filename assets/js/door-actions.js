AFRAME.registerComponent('open-door', {
	init() {
		if (this.el.classList.contains('left')) {
			this.el.setAttribute('animation', `
        			             property: rotation;
                                 from: 0 180 0;
                                 to: 0 90 0;
                                 dur: 2000;
                                 easing: linear;
                                 loop: false`);
		} else if (this.el.classList.contains('right')) {
			this.el.setAttribute('animation', `
			                     property: rotation;
                                 from: 0 -180 0;
                                 to: 0 -90 0;
                                 dur: 2000;
                                 easing: linear;
                                 loop: false`);
		}

		const timeout = setTimeout(() => {
			const timeout2 = setTimeout(() => {
				this.el.removeAttribute('open-door');
				this.el.setAttribute('close-door', '');
				clearTimeout(timeout2);
			}, 3000);
			clearTimeout(timeout);
		}, 2000);
	}
});

AFRAME.registerComponent('close-door', {
	init() {
		if (this.el.classList.contains('left')) {
			this.el.setAttribute('animation', `
        			             property: rotation;
                                 from: 0 180 0;
                                 to: 0 90 0;
                                 dur: 2000;
                                 dir: reverse;
                                 easing: linear;
                                 loop: false`);
		} else if (this.el.classList.contains('right')) {
			this.el.setAttribute('animation', `
			                     property: rotation;
                                 from: 0 -180 0;
                                 to: 0 -90 0;
                                 dur: 2000;
                                 dir: reverse;
                                 easing: linear;
                                 loop: false`);
		}

		const timeout = setTimeout(() => {
			this.el.removeAttribute('close-door');
			this.el.removeAttribute('animation');
			clearTimeout(timeout);
		}, 2000);
	}
});
