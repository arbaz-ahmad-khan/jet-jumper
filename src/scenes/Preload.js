
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {

		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// globe
		this.add.image(510, 960, "Globe");

		// jetJumperTxt
		const jetJumperTxt = this.add.image(630, 1059, "Jet-Jumper");

		// fireRocket
		const fireRocket = this.add.image(480, 890, "fireRocket");

		this.jetJumperTxt = jetJumperTxt;
		this.fireRocket = fireRocket;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image} */
	jetJumperTxt;
	/** @type {Phaser.GameObjects.Image} */
	fireRocket;

	/* START-USER-CODE */

	// Write your code here

	preload() {
		this.editorCreate();
		this.editorPreload();

		this.tweens.add({
			targets: this.jetJumperTxt,
			scaleX: 1.08,
			scaleY: 1.08,
			duration: 800,
			ease: 'Sine.easeInOut',
			yoyo: true,
			loop: -1
		});
		this.tweens.add({
			targets: this.fireRocket,
			scaleX: 1.08,
			scaleY: 1.08,
			duration: 800,
			ease: 'Sine.easeInOut',
			yoyo: true,
			loop: -1,
			// delay: 400
		});

		this.outerBar = this.add.sprite(540, 1660, "Loading-Outside").setScale(1.5, 1);
		this.outerBar.setOrigin(0.5);
		this.innerBar = this.add.sprite(
			this.outerBar.x - this.outerBar.displayWidth / 2 + 18,
			this.outerBar.y,
			"Loading-Inside"
		).setScale(1.5, 1);
		this.innerBar.setOrigin(0, 0.5);

		this.loadingRocket = this.add.image(320, 1661, "Rocket");
		this.innerBarWidth = this.innerBar.displayWidth;

		this.maskGraphics = this.make.graphics();
		this.maskGraphics.fillStyle(0xffffff);
		this.maskGraphics.fillRect(
			this.innerBar.x,
			this.innerBar.y - this.innerBar.displayHeight / 2,
			this.innerBar.displayWidth,
			this.innerBar.displayHeight
		);

		this.innerBar.setMask(this.maskGraphics.createGeometryMask());

		const loadingDuration = 3000;
		const intervalDuration = 30;
		const numIntervals = loadingDuration / intervalDuration;
		let currentInterval = 0;
		const progressIncrement = 1 / numIntervals;

		const updateProgressBar = () => {
			const currentProgress = currentInterval * progressIncrement;
			this.maskGraphics.clear();
			this.maskGraphics.fillStyle(0xffffff);
			this.maskGraphics.fillRect(
				this.innerBar.x,
				this.innerBar.y - this.innerBar.displayHeight / 2,
				this.innerBarWidth * currentProgress,
				this.innerBar.displayHeight
			);

			currentInterval++;
			this.loadingRocket.x = this.innerBar.x - 30 + (this.innerBarWidth * currentProgress);

			if (currentProgress >= 1) {
				clearInterval(progressInterval);
				this.innerBar.setVisible(false);
				this.outerBar.setVisible(false);
				this.loadingRocket.setVisible(false);
				setTimeout(() => {
					// Start the "Home" scene after loading is complete
					this.scene.start("Home");
				}, 200);
			}
		};
		const progressInterval = setInterval(updateProgressBar, intervalDuration);

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
