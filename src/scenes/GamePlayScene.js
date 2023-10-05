let activePlaneSpeed = 0;
// You can write more code here

/* START OF COMPILED CODE */

class GamePlayScene extends Phaser.Scene {

	constructor() {
		super("GamePlayScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// circleContainer
		const circleContainer = this.add.container(1198, 707);

		// circle1
		const circle1 = this.add.ellipse(1, -4, 210, 210);
		circle1.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle1.visible = false;
		circle1.isFilled = true;
		circleContainer.add(circle1);

		// circle
		const circle = this.add.ellipse(131, -144, 200, 200);
		circle.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle.visible = false;
		circle.isFilled = true;
		circleContainer.add(circle);

		// circle_1
		const circle_1 = this.add.ellipse(236, -152, 200, 200);
		circle_1.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_1.visible = false;
		circle_1.isFilled = true;
		circleContainer.add(circle_1);

		// circle_2
		const circle_2 = this.add.ellipse(-189, -106, 200, 200);
		circle_2.setInteractive(new Phaser.Geom.Circle(100, 100, 80), Phaser.Geom.Circle.Contains);
		circle_2.visible = false;
		circle_2.isFilled = true;
		circleContainer.add(circle_2);

		// circle_3
		const circle_3 = this.add.ellipse(-233, -335, 200, 200);
		circle_3.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_3.visible = false;
		circle_3.isFilled = true;
		circleContainer.add(circle_3);

		// circle_4
		const circle_4 = this.add.ellipse(-293, -594, 200, 200);
		circle_4.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_4.visible = false;
		circle_4.isFilled = true;
		circleContainer.add(circle_4);

		// circle_5
		const circle_5 = this.add.ellipse(1691, 138, 200, 200);
		circle_5.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_5.visible = false;
		circle_5.isFilled = true;
		circleContainer.add(circle_5);

		// circle_6
		const circle_6 = this.add.ellipse(1819, 2, 200, 200);
		circle_6.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_6.visible = false;
		circle_6.isFilled = true;
		circleContainer.add(circle_6);

		// circle_7
		const circle_7 = this.add.ellipse(1981, -266, 200, 200);
		circle_7.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_7.visible = false;
		circle_7.isFilled = true;
		circleContainer.add(circle_7);

		// circle_8
		const circle_8 = this.add.ellipse(1525, -69, 200, 200);
		circle_8.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_8.visible = false;
		circle_8.isFilled = true;
		circleContainer.add(circle_8);

		// circle_9
		const circle_9 = this.add.ellipse(1332, -281, 200, 200);
		circle_9.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_9.visible = false;
		circle_9.isFilled = true;
		circleContainer.add(circle_9);

		// circle_10
		const circle_10 = this.add.ellipse(1292, -590, 200, 200);
		circle_10.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_10.visible = false;
		circle_10.isFilled = true;
		circleContainer.add(circle_10);

		// circle_11
		const circle_11 = this.add.ellipse(3140, 308, 200, 200);
		circle_11.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_11.visible = false;
		circle_11.isFilled = true;
		circleContainer.add(circle_11);

		// circle_12
		const circle_12 = this.add.ellipse(3383, 159, 200, 200);
		circle_12.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_12.visible = false;
		circle_12.isFilled = true;
		circleContainer.add(circle_12);

		// circle_13
		const circle_13 = this.add.ellipse(3534, -90, 200, 200);
		circle_13.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_13.visible = false;
		circle_13.isFilled = true;
		circleContainer.add(circle_13);

		// circle_14
		const circle_14 = this.add.ellipse(2954, 211, 200, 200);
		circle_14.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_14.visible = false;
		circle_14.isFilled = true;
		circleContainer.add(circle_14);

		// circle_15
		const circle_15 = this.add.ellipse(2925, -7, 200, 200);
		circle_15.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_15.visible = false;
		circle_15.isFilled = true;
		circleContainer.add(circle_15);

		// circle_16
		const circle_16 = this.add.ellipse(2850, -278, 200, 200);
		circle_16.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_16.visible = false;
		circle_16.isFilled = true;
		circleContainer.add(circle_16);

		// circle_17
		const circle_17 = this.add.ellipse(4659, -10, 200, 200);
		circle_17.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_17.visible = false;
		circle_17.isFilled = true;
		circleContainer.add(circle_17);

		// circle_18
		const circle_18 = this.add.ellipse(4299, -147, 200, 200);
		circle_18.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_18.visible = false;
		circle_18.isFilled = true;
		circleContainer.add(circle_18);

		// circle_19
		const circle_19 = this.add.ellipse(4263, -487, 200, 200);
		circle_19.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_19.visible = false;
		circle_19.isFilled = true;
		circleContainer.add(circle_19);

		// circle_20
		const circle_20 = this.add.ellipse(4755, -276, 200, 200);
		circle_20.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_20.visible = false;
		circle_20.isFilled = true;
		circleContainer.add(circle_20);

		// circle_21
		const circle_21 = this.add.ellipse(4499, -186, 200, 200);
		circle_21.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_21.visible = false;
		circle_21.isFilled = true;
		circleContainer.add(circle_21);

		// circle_22
		const circle_22 = this.add.ellipse(5918, -472, 200, 200);
		circle_22.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_22.visible = false;
		circle_22.isFilled = true;
		circleContainer.add(circle_22);

		// circle_23
		const circle_23 = this.add.ellipse(6166, -339, 200, 200);
		circle_23.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_23.visible = false;
		circle_23.isFilled = true;
		circleContainer.add(circle_23);

		// circle_24
		const circle_24 = this.add.ellipse(6385, -443, 200, 200);
		circle_24.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_24.visible = false;
		circle_24.isFilled = true;
		circleContainer.add(circle_24);

		// circle_25
		const circle_25 = this.add.ellipse(6401, -648, 200, 200);
		circle_25.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_25.visible = false;
		circle_25.isFilled = true;
		circleContainer.add(circle_25);

		// circle_26
		const circle_26 = this.add.ellipse(6030, 242, 200, 200);
		circle_26.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_26.visible = false;
		circle_26.isFilled = true;
		circleContainer.add(circle_26);

		// circle_27
		const circle_27 = this.add.ellipse(5861, 342, 200, 200);
		circle_27.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_27.visible = false;
		circle_27.isFilled = true;
		circleContainer.add(circle_27);

		// circle_28
		const circle_28 = this.add.ellipse(6304, 396, 200, 200);
		circle_28.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_28.visible = false;
		circle_28.isFilled = true;
		circleContainer.add(circle_28);

		// circle_29
		const circle_29 = this.add.ellipse(6426, 646, 200, 200);
		circle_29.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_29.visible = false;
		circle_29.isFilled = true;
		circleContainer.add(circle_29);

		// circle_30
		const circle_30 = this.add.ellipse(5822, 564, 200, 200);
		circle_30.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_30.visible = false;
		circle_30.isFilled = true;
		circleContainer.add(circle_30);

		// circle_31
		const circle_31 = this.add.ellipse(5755, 842, 200, 200);
		circle_31.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_31.visible = false;
		circle_31.isFilled = true;
		circleContainer.add(circle_31);

		// circle_32
		const circle_32 = this.add.ellipse(5665, 1088, 200, 200);
		circle_32.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_32.visible = false;
		circle_32.isFilled = true;
		circleContainer.add(circle_32);

		// circle_33
		const circle_33 = this.add.ellipse(4568, 466, 200, 200);
		circle_33.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_33.visible = false;
		circle_33.isFilled = true;
		circleContainer.add(circle_33);

		// circle_34
		const circle_34 = this.add.ellipse(4348, 573, 200, 200);
		circle_34.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_34.visible = false;
		circle_34.isFilled = true;
		circleContainer.add(circle_34);

		// circle_35
		const circle_35 = this.add.ellipse(4274, 846, 200, 200);
		circle_35.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_35.visible = false;
		circle_35.isFilled = true;
		circleContainer.add(circle_35);

		// circle_36
		const circle_36 = this.add.ellipse(4716, 658, 200, 200);
		circle_36.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_36.visible = false;
		circle_36.isFilled = true;
		circleContainer.add(circle_36);

		// circle_37
		const circle_37 = this.add.ellipse(4894, 883, 200, 200);
		circle_37.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_37.visible = false;
		circle_37.isFilled = true;
		circleContainer.add(circle_37);

		// circle_38
		const circle_38 = this.add.ellipse(4263, 1106, 200, 200);
		circle_38.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_38.visible = false;
		circle_38.isFilled = true;
		circleContainer.add(circle_38);

		// circle_39
		const circle_39 = this.add.ellipse(3177, 798, 200, 200);
		circle_39.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_39.visible = false;
		circle_39.isFilled = true;
		circleContainer.add(circle_39);

		// circle_40
		const circle_40 = this.add.ellipse(3325, 976, 200, 200);
		circle_40.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_40.visible = false;
		circle_40.isFilled = true;
		circleContainer.add(circle_40);

		// circle_41
		const circle_41 = this.add.ellipse(3518, 1206, 200, 200);
		circle_41.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_41.visible = false;
		circle_41.isFilled = true;
		circleContainer.add(circle_41);

		// circle_42
		const circle_42 = this.add.ellipse(3071, 923, 200, 200);
		circle_42.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_42.visible = false;
		circle_42.isFilled = true;
		circleContainer.add(circle_42);

		// circle_43
		const circle_43 = this.add.ellipse(2896, 1168, 200, 200);
		circle_43.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_43.visible = false;
		circle_43.isFilled = true;
		circleContainer.add(circle_43);

		// circle_44
		const circle_44 = this.add.ellipse(1658, 622, 200, 200);
		circle_44.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_44.visible = false;
		circle_44.isFilled = true;
		circleContainer.add(circle_44);

		// circle_45
		const circle_45 = this.add.ellipse(1303, 754, 200, 200);
		circle_45.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_45.visible = false;
		circle_45.isFilled = true;
		circleContainer.add(circle_45);

		// circle_46
		const circle_46 = this.add.ellipse(1507, 779, 200, 200);
		circle_46.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_46.visible = false;
		circle_46.isFilled = true;
		circleContainer.add(circle_46);

		// circle_47
		const circle_47 = this.add.ellipse(1289, 1030, 200, 200);
		circle_47.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_47.visible = false;
		circle_47.isFilled = true;
		circleContainer.add(circle_47);

		// circle_48
		const circle_48 = this.add.ellipse(1751, 873, 200, 200);
		circle_48.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_48.visible = false;
		circle_48.isFilled = true;
		circleContainer.add(circle_48);

		// circle_49
		const circle_49 = this.add.ellipse(1960, 1015, 200, 200);
		circle_49.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_49.visible = false;
		circle_49.isFilled = true;
		circleContainer.add(circle_49);

		// circle_50
		const circle_50 = this.add.ellipse(209, 521, 200, 200);
		circle_50.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_50.visible = false;
		circle_50.isFilled = true;
		circleContainer.add(circle_50);

		// circle_51
		const circle_51 = this.add.ellipse(-31, 521, 200, 200);
		circle_51.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_51.visible = false;
		circle_51.isFilled = true;
		circleContainer.add(circle_51);

		// circle_52
		const circle_52 = this.add.ellipse(320, 716, 200, 200);
		circle_52.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_52.visible = false;
		circle_52.isFilled = true;
		circleContainer.add(circle_52);

		// circle_53
		const circle_53 = this.add.ellipse(7, 738, 200, 200);
		circle_53.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_53.visible = false;
		circle_53.isFilled = true;
		circleContainer.add(circle_53);

		// circle_54
		const circle_54 = this.add.ellipse(-208, 819, 200, 200);
		circle_54.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_54.visible = false;
		circle_54.isFilled = true;
		circleContainer.add(circle_54);

		// circle_55
		const circle_55 = this.add.ellipse(365, 935, 200, 200);
		circle_55.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_55.visible = false;
		circle_55.isFilled = true;
		circleContainer.add(circle_55);

		// circle_56
		const circle_56 = this.add.ellipse(-274, 1107, 200, 200);
		circle_56.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_56.visible = false;
		circle_56.isFilled = true;
		circleContainer.add(circle_56);

		// circle_57
		const circle_57 = this.add.ellipse(316, -173, 200, 200);
		circle_57.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_57.visible = false;
		circle_57.isFilled = true;
		circleContainer.add(circle_57);

		// circle_58
		const circle_58 = this.add.ellipse(-15, 17, 210, 210);
		circle_58.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_58.visible = false;
		circle_58.isFilled = true;
		circleContainer.add(circle_58);

		// circle_59
		const circle_59 = this.add.ellipse(1605, 618, 200, 200);
		circle_59.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_59.visible = false;
		circle_59.isFilled = true;
		circleContainer.add(circle_59);

		// circle_60
		const circle_60 = this.add.ellipse(4616, 8, 200, 200);
		circle_60.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_60.visible = false;
		circle_60.isFilled = true;
		circleContainer.add(circle_60);

		// circle_61
		const circle_61 = this.add.ellipse(1295, -352, 200, 200);
		circle_61.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_61.visible = false;
		circle_61.isFilled = true;
		circleContainer.add(circle_61);

		// circle_62
		const circle_62 = this.add.ellipse(-202, -276, 200, 200);
		circle_62.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_62.visible = false;
		circle_62.isFilled = true;
		circleContainer.add(circle_62);

		// circle_63
		const circle_63 = this.add.ellipse(-251, 863, 200, 200);
		circle_63.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_63.visible = false;
		circle_63.isFilled = true;
		circleContainer.add(circle_63);

		// circle_64
		const circle_64 = this.add.ellipse(-320, 1124, 200, 200);
		circle_64.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_64.visible = false;
		circle_64.isFilled = true;
		circleContainer.add(circle_64);

		// circle_65
		const circle_65 = this.add.ellipse(2763, -515, 200, 200);
		circle_65.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_65.visible = false;
		circle_65.isFilled = true;
		circleContainer.add(circle_65);

		// circle_66
		const circle_66 = this.add.ellipse(1266, 1105, 200, 200);
		circle_66.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_66.visible = false;
		circle_66.isFilled = true;
		circleContainer.add(circle_66);

		// circle_67
		const circle_67 = this.add.ellipse(3475, 142, 200, 200);
		circle_67.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_67.visible = false;
		circle_67.isFilled = true;
		circleContainer.add(circle_67);

		// circle_68
		const circle_68 = this.add.ellipse(2806, -707, 200, 200);
		circle_68.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_68.visible = false;
		circle_68.isFilled = true;
		circleContainer.add(circle_68);

		// circle_69
		const circle_69 = this.add.ellipse(4243, -672, 200, 200);
		circle_69.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_69.visible = false;
		circle_69.isFilled = true;
		circleContainer.add(circle_69);

		// circle_70
		const circle_70 = this.add.ellipse(5827, -507, 200, 200);
		circle_70.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_70.visible = false;
		circle_70.isFilled = true;
		circleContainer.add(circle_70);

		// circle_71
		const circle_71 = this.add.ellipse(5812, -559, 200, 200);
		circle_71.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_71.visible = false;
		circle_71.isFilled = true;
		circleContainer.add(circle_71);

		// circle_72
		const circle_72 = this.add.ellipse(5777, -744, 200, 200);
		circle_72.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_72.visible = false;
		circle_72.isFilled = true;
		circleContainer.add(circle_72);

		// circle_73
		const circle_73 = this.add.ellipse(4294, -400, 200, 200);
		circle_73.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_73.visible = false;
		circle_73.isFilled = true;
		circleContainer.add(circle_73);

		// circle_74
		const circle_74 = this.add.ellipse(1245, 1283, 200, 200);
		circle_74.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_74.visible = false;
		circle_74.isFilled = true;
		circleContainer.add(circle_74);

		// circle_75
		const circle_75 = this.add.ellipse(5712, 1288, 200, 200);
		circle_75.setInteractive(new Phaser.Geom.Circle(100, 100, 100), Phaser.Geom.Circle.Contains);
		circle_75.visible = false;
		circle_75.isFilled = true;
		circleContainer.add(circle_75);

		// clusterContainer
		const clusterContainer = this.add.container(0, 0);

		// clusterOne
		const clusterOne = this.add.image(1272, 369, "Cluster-1");
		clusterContainer.add(clusterOne);

		// clusterTwo
		const clusterTwo = this.add.image(5800, 1529, "Cluster-2");
		clusterContainer.add(clusterTwo);

		// clusterThree
		const clusterThree = this.add.image(5800, 339, "Cluster-3");
		clusterContainer.add(clusterThree);

		// clusterFour
		const clusterFour = this.add.image(1257, 1559, "Cluster-4");
		clusterContainer.add(clusterFour);

		// cluster_5
		const cluster_5 = this.add.image(4400, 475, "Cluster-5");
		clusterContainer.add(cluster_5);

		// cluster_6
		const cluster_6 = this.add.image(4409, 1717, "Cluster-6");
		clusterContainer.add(cluster_6);

		// cluster_7
		const cluster_7 = this.add.image(2870, 313, "Cluster-7");
		clusterContainer.add(cluster_7);

		// cluster_8
		const cluster_8 = this.add.image(7300, 151, "Cluster-8");
		cluster_8.flipY = true;
		clusterContainer.add(cluster_8);

		// clusterThree_1
		const clusterThree_1 = this.add.image(2800, 1678, "Cluster-3");
		clusterThree_1.flipY = true;
		clusterContainer.add(clusterThree_1);

		// cluster
		const cluster = this.add.image(7300, 1500, "Cluster-5");
		cluster.flipY = true;
		clusterContainer.add(cluster);

		// container_particles
		const container_particles = this.add.container(0, 0);

		// score_board
		this.add.image(540, 128, "score-board");

		// text_1
		const text_1 = this.add.text(509, 102, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "SCORE : ";
		text_1.setStyle({ "color": "#000000ff", "fontFamily": "Futura", "fontSize": "50px", "fontStyle": "bold" });

		// text_2
		const text_2 = this.add.text(517, 166, "", {});
		text_2.setOrigin(0.5, 0.5);
		text_2.text = "BEST :";
		text_2.setStyle({ "color": "#000000ff", "fontFamily": "Futura", "fontSize": "30px", "fontStyle": "bold" });

		// bestScore
		const bestScore = this.add.text(582.5, 166, "", {});
		bestScore.setOrigin(0, 0.5);
		bestScore.text = "0";
		bestScore.setStyle({ "color": "#000000ff", "fontFamily": "Futura", "fontSize": "30px", "fontStyle": "bold" });

		// scorePrefab
		const scorePrefab = new ScorePrefab(this, 618, 102);
		this.add.existing(scorePrefab);

		// tapToPlay
		const tapToPlay = this.add.text(540, 960, "", {});
		tapToPlay.setOrigin(0.5, 0.5);
		tapToPlay.text = "TAP TO PLAY";
		tapToPlay.setStyle({ "fontFamily": "RifficFree-Bold", "fontSize": "50px" });

		this.circleContainer = circleContainer;
		this.clusterOne = clusterOne;
		this.clusterTwo = clusterTwo;
		this.clusterThree = clusterThree;
		this.clusterFour = clusterFour;
		this.clusterThree_1 = clusterThree_1;
		this.clusterContainer = clusterContainer;
		this.container_particles = container_particles;
		this.bestScore = bestScore;
		this.scorePrefab = scorePrefab;
		this.tapToPlay = tapToPlay;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Container} */
	circleContainer;
	/** @type {Phaser.GameObjects.Image} */
	clusterOne;
	/** @type {Phaser.GameObjects.Image} */
	clusterTwo;
	/** @type {Phaser.GameObjects.Image} */
	clusterThree;
	/** @type {Phaser.GameObjects.Image} */
	clusterFour;
	/** @type {Phaser.GameObjects.Image} */
	clusterThree_1;
	/** @type {Phaser.GameObjects.Container} */
	clusterContainer;
	/** @type {Phaser.GameObjects.Container} */
	container_particles;
	/** @type {Phaser.GameObjects.Text} */
	bestScore;
	/** @type {ScorePrefab} */
	scorePrefab;
	/** @type {Phaser.GameObjects.Text} */
	tapToPlay;

	/* START-USER-CODE */

	// Write your code here
	create() {

		this.editorCreate();
		let scoreIntervalStarted = false;
		this.planeSpeed = 5;
		this.speedUpdateInterval = null;
		this.tweens.add({
			targets: this.tapToPlay,
			scale: 1.1,
			duration: 800,
			ease: 'Sine.easeInOut',
			yoyo: true,
			loop: -1
		});

		this.rocket = this.physics.add.sprite(250, 550, "Rocket");
		this.rocket.body.setSize(115, 90);
		this.rocket.body.setOffset(50, 10);
		this.fireAnims = this.physics.add.sprite(this.rocket.x - 70, this.rocket.y, "fire-1").setScale(0.1, 0.1);

		this.input.on('pointerdown', () => {
			this.tapToPlay.setVisible(false);
			this.rocket.setGravityY(700);
			this.activePlaneSpeed = 1;
			this.fireAnims.play('fire').setScale(0.5, 0.5);
			if (!scoreIntervalStarted) {
				this.scorePrefab.scoreUpdateInterval = setInterval(() => {
					this.scorePrefab.updateScore(1);
				}, 1000);
				scoreIntervalStarted = true;
			}

			if (this.speedUpdateInterval === null) {
				this.speedUpdateInterval = setInterval(() => {
					this.planeSpeed += 1;
					// console.log(`Speed updated: ${this.planeSpeed}`);
				}, 4000);
			}

		});
		bestScore = localStorage.getItem("jetjumperscore") == null ? 0 : localStorage.getItem("jetjumperscore");
		const currentBestScore = bestScore;
		this.bestScore.setText(bestScore);

		this.cursors = this.input.keyboard.createCursorKeys();

		this.plateformGroup = this.add.group();
		this.clusterContainer.getAll().forEach((plane) => {
			this.plateformGroup.add(plane);
		});

		this.circleContainer.getAll().forEach((object) => {
			if (object.type == 'Ellipse') {
				this.physics.world.enable(object);
				object.body.setCircle(100);
			}
			else {
				this.physics.world.enable(object);
			}
			this.plateformGroup.add(object);
		});

		this.input.on("pointerdown", this.jump, this);
		this.input.on("pointerup", this.stopJump, this);
		this.isJumping = false;
		this.jumpVelocity = -320;

		this.physics.add.collider(this.rocket, this.plateformGroup, () => {
			this.rocket.setVelocityY(0);
			this.rocket.disableBody(true, true);
			clearInterval(this.scorePrefab.scoreUpdateInterval);
			this.fireAnims.setVisible(false);
			this.brokeAnims = this.physics.add.sprite(this.rocket.x + 20, this.rocket.y, "sprite-1").play('blast').setScale(0.5, 0.5);
			clearInterval(this.speedUpdateInterval);
			setTimeout(() => {
				this.scene.stop('GamePlayScene');
				this.scene.start('GameOver');
				this.activePlaneSpeed = 0;
			}, 1500);
		});
	}

	jump() {
		if (!this.isJumping) {
			this.rocket.setVelocityY(this.jumpVelocity);
			this.isJumping = true;
		}
	}

	stopJump() {
		this.isJumping = false;
	}

	update() {
		if (this.cursors.up.isDown) {
			if (!this.isJumping) {
				this.jump();
				this.isJumping = true;
			}
		} else {
			this.isJumping = false;
		}
		if (!this.rocket.body.enable) {
			return;
		}
		this.fireAnims.x = this.rocket.x - 70;
		this.fireAnims.y = this.rocket.y;
		if (this.rocket.y > this.game.scale.height) {
			this.rocket.setVelocityY(0);
			clearInterval(this.speedUpdateInterval);
			this.scene.stop('GamePlayScene');
			clearInterval(this.scorePrefab.scoreUpdateInterval);
			this.scene.start('GameOver');
			this.activePlaneSpeed = 0;
		};
		this.clusterContainer.getAll().forEach((plane) => {
			if (this.activePlaneSpeed == 1) {

				if (plane.x <= -1200) {
					plane.x += 7800;
				}

				plane.x -= this.planeSpeed;
			}
		});
		this.circleContainer.getAll().forEach((object) => {
			if (this.activePlaneSpeed == 1) {

				if (object.x <= -1200) {
					object.x += 7800;
				}
				object.x -= this.planeSpeed;
			}
		});
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
