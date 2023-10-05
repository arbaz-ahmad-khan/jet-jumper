let globalScore = 0;
let bestScore = 0;

// You can write more code here

/* START OF COMPILED CODE */

class ScorePrefab extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 0, y ?? 0);

		// scoreText
		const scoreText = scene.add.text(0, 0, "", {});
		scoreText.setOrigin(0, 0.5);
		scoreText.text = "0";
		scoreText.setStyle({ "color": "#000000ff", "fontFamily": "Futura", "fontSize": "50px", "fontStyle": "bold" });
		this.add(scoreText);

		this.scoreText = scoreText;

		/* START-USER-CTR-CODE */
		// Write your code here.
		this.scoreValue = 0;
		this.scoreUpdateInterval = null;



		/* END-USER-CTR-CODE */
	}

	/** @type {Phaser.GameObjects.Text} */
	scoreText;

	/* START-USER-CODE */

	// Write your code here.
	updateScore(value) {
		this.scoreValue += value;
		this.scoreText.text = this.scoreValue.toString();
		globalScore = this.scoreValue;
		if (this.scoreValue > bestScore) {
			bestScore = this.scoreValue;
			localStorage.setItem("jetjumperscore", bestScore);
		}
	}

	stopScoreUpdateInterval() {
		if (this.scoreUpdateInterval) {
			clearInterval(this.scoreUpdateInterval);
			this.scoreUpdateInterval = null;
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
