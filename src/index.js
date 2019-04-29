import 'phaser';
//import Preload from './scenes/Preload' // <--- funziona anche questa, ovviamente!
const Preload = require('./scenes/Preload')
const Game = require('./scenes/Game')

var config = {
    type: Phaser.AUTO,
	pixelArt: true,
    backgroundColor: '#320822',
    scale: {
    	mode: Phaser.Scale.NONE,
		//parent: 'phaser-example',
		width: 300,
		height: 200,
		zoom: 3
    },
    scene: [  Preload, Game  ]
    
};

var game = new Phaser.Game(config);
