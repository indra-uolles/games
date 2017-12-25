import Phaser from './Phaser';
import Boot from './Boot'
import Preloader from './Preloader'
import HowTo from './HowTo';
import MainMenu from './MainMenu';
import Level1 from './Level1';
import {gameWidth, gameHeight} from './consts';

const Game = new Phaser.Game(gameWidth, gameHeight)

Game.state.add('Boot', Boot)
Game.state.add('Preloader', Preloader)
Game.state.add('Howto', HowTo)
Game.state.add('MainMenu', MainMenu)
Game.state.add('Level1', Level1)
Game.state.start('Boot')
