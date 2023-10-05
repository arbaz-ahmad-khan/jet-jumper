
window.addEventListener('load', function () {

	var game = new Phaser.Game({
		width: 1080,
		height: 1920,
		type: Phaser.AUTO,
        transparent: true,
		scale: {
			mode: Phaser.Scale.FIT,
			autoCenter: Phaser.Scale.CENTER_BOTH
		},
		physics: {
			default: 'arcade',
			arcade: {
					gravity: { y: 0 },
					debug: false,
				}
		},
		
	});

	game.scene.add("Preload", Preload);
	game.scene.add("Home", Home);
	game.scene.add("GamePlayScene", GamePlayScene);
	game.scene.add("GameOver", GameOver);
	game.scene.add("Boot", Boot, true);
});

class Boot extends Phaser.Scene {

	preload() {
		
		this.load.pack("pack", "assets/preload-asset-pack.json");
	}

	create() {

		this.scene.start("Preload");
	}
}