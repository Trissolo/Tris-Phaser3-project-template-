
class Preload extends Phaser.Scene {

	constructor()
		{
			super(  {key: 'Preload'}  )
		}


		init()
		{
			console.log(`Init from Preload!`)
		}


		preload()
		{
			console.log('Preload da Preload!', this)
			this.load.image('logo', 'assets/atlas/logo.png')
			this.load.on('complete', this.loadGame, this)
		}

		//create ()
		//{
			//this.scene.start('Room')		
		//}
		
		loadGame (loader, totalOk, totalBad)
		{
			console.log(totalOk, totalBad)
			this.scene.start('Game')			
		}

}	//end Class


module.exports = Preload
