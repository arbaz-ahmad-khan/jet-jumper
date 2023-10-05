
// You can write more code here

/* START OF COMPILED CODE */

class Home extends Phaser.Scene {

	constructor() {
		super("Home");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// logo
		this.add.image(510, 960, "Logo");

		// playBtn
		const playBtn = this.add.text(540, 1653, "", {});
		playBtn.setOrigin(0.5, 0.5);
		playBtn.text = "TAP TO START";
		playBtn.setStyle({ "fontFamily": "RifficFree-Bold", "fontSize": "50px" });

		this.playBtn = playBtn;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	playBtn;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.tweens.add({
			targets: this.playBtn,
			scale: 1.1,
			duration: 800,
			ease: 'Sine.easeInOut',
			yoyo: true,
			loop: -1
		});
		this.input.on('pointerdown', () => {
			this.scene.stop("Home");
			this.scene.start("GamePlayScene");
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
