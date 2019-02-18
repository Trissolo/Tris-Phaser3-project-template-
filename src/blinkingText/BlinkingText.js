class BlinkingText extends Phaser.GameObjects.Text {

    constructor (scene, x, y, words, duration = 500, color = '#ffff00')
    {
			super(scene, x, y, words);

		  this.setFontFamily('Courier').setFontSize(16).setColor(color)
		  this.setData('duration', duration)
		  this.setData("timer", this.scene.time.addEvent() )
		  scene.add.existing(this)
    }

    blink( duration = this.data.values.duration )
    {
        this.data.values.timer.reset(
            {
                delay: duration,
                callback: this.changeAlpha,
                callbackScope: this,
                loop: true
            }
        )
    }

    changeAlpha() {
        this.alpha = !this.alpha
    }

    stopBlinking()
    {
         this.data.values.timer.paused = true
         this.clearAlpha()
    }

		//TO DO: ADD a PROPER PREDESTROY func

}

module.exports = BlinkingText
