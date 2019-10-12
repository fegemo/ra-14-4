// @type {import('../../node_modules/phaser/types/phaser')}
import { BootScene } from "../scenes/BootScene.js";
import  { LoadScene } from "../scenes/LoadScene.js";
import {MenuScene} from "../scenes/MenuScene.js";
import {Phase1Scene} from "../scenes/Phase1Scene.js";
import {EndScene} from "../scenes/EndScene.js";


const config = {
    type: Phaser.AUTO,
    width: window.innerWidth - 15,
    height: (window.innerWidth - 15) / 14.4 - 5,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [BootScene,LoadScene,MenuScene,Phase1Scene,EndScene]

};

let game = new Phaser.Game(config);
