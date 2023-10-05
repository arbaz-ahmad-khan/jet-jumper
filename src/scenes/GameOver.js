
// You can write more code here

/* START OF COMPILED CODE */

class GameOver extends Phaser.Scene {

	constructor() {
		super("GameOver");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// star
		this.add.image(365, 1500, "Star");

		// star_1
		this.add.image(715, 1500, "Star");

		// star_2
		this.add.image(345, 1600, "Star");

		// star_3
		this.add.image(735, 1600, "Star");

		// playAgainBtn
		const playAgainBtn = this.add.text(540, 1710, "", {});
		playAgainBtn.setOrigin(0.5, 0.5);
		playAgainBtn.text = "TAP TO PLAY AGAIN";
		playAgainBtn.setStyle({ "fontFamily": "RifficFree-Bold", "fontSize": "50px" });

		// text_1
		const text_1 = this.add.text(430, 1474, "", {});
		text_1.text = "BEST :";
		text_1.setStyle({ "fontFamily": "RifficFree-Bold", "fontSize": "50px" });

		// bestScore
		const bestScore = this.add.text(609, 1502.79443359375, "", {});
		bestScore.setOrigin(0, 0.5);
		bestScore.text = "0";
		bestScore.setStyle({ "fontFamily": "RifficFree-Bold", "fontSize": "50px" });

		// text_3
		const text_3 = this.add.text(401, 1575, "", {});
		text_3.text = "SCORE :";
		text_3.setStyle({ "fontFamily": "RifficFree-Bold", "fontSize": "50px" });

		// score
		const score = this.add.text(627, 1601.79443359375, "", {});
		score.setOrigin(0, 0.5);
		score.text = "0";
		score.setStyle({ "fontFamily": "RifficFree-Bold", "fontSize": "50px" });

		// game_Over
		this.add.image(540, 794, "Game-Over");

		this.playAgainBtn = playAgainBtn;
		this.bestScore = bestScore;
		this.score = score;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Text} */
	playAgainBtn;
	/** @type {Phaser.GameObjects.Text} */
	bestScore;
	/** @type {Phaser.GameObjects.Text} */
	score;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		const finalScore = globalScore;
        const currentBestScore = bestScore;
		this.score.setText(finalScore);
		this.bestScore.setText(localStorage.getItem("jetjumperscore") == null ? 0 : localStorage.getItem("jetjumperscore"));
		this.tweens.add({
			targets: this.playAgainBtn,
			scale: 1.1,
			duration: 800,
			ease: 'Sine.easeInOut',
			yoyo: true,
			loop: -1
		});
		this.input.on('pointerdown', () => {
			this.restartGamePlayScene();
		});
		this.input.keyboard.on('keydown-ENTER', (event) => this.restartGamePlayScene());
	}

	restartGamePlayScene() {
		this.scene.stop('GameOver');
		this.scene.start('Home');
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
