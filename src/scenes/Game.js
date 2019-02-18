const BlinkingText = require('../blinkingText/BlinkingText')

class Game extends Phaser.Scene {

	constructor()
	{
		super(  {key: 'Game'}  )
	}
		
	create()
	{
	console.log("CREATE!")
    let logo = this.add.image(150, 20, 'logo').setScale(.2)

    this.tweens.add({
        targets: logo,
        y: 160,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    })
    
    let text = new BlinkingText(this, 110, 20, "Test...")
    text.blink()
  }
    
}//end Class

module.exports = Game
