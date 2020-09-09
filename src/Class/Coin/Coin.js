import Key from '../../Key/keyScene';
import Config from '../../Config/config';
import Options from '../../Constants/options';
import Style from '../../Css/style';
import Sprite from '../Sprite';
//Class Coin
export default class Coin {
    constructor(scene, keyCoin = Key.coin) {
        this.scene = scene;
        this.addCoin();
    }

    addCoin() {
        this.coin = new Sprite(this.scene, Config.width - 678, Config.height - 50, 'bgButtons', 'btn-coin.png');
        this.txtCoin = this.scene.add.dynamicBitmapText(Config.width - 720, Config.height - 70, 'txt_bitmap', Options.txtCoin, Style.fontSize);
        this.txtCoin.setDisplayCallback(this.scene.textCallback);
        this.txtCountCoin = this.scene.add.text(Config.width - 700, Config.height - 140, Options.coin, Style.styleButton);
        //pointer down
        this.coin.on('pointerdown', this.buttonCoin, this);
        //pointer up
        this.coin.on('pointerup', () => this.coin.setScale(1));
    }

    /*end function add coin*/

    buttonCoin() {
        if (!Options.checkClick && Options.txtAutoSpin === 'AUTO') {
            this.coin.setScale(0.9);
            //play audio button
            this.scene.audioPlayButton();
            if (Options.coin < 50) {
                Options.coin += 10;
                this.txtCountCoin.setText(Options.coin);
                this.scene.maxBet.txtCountMaxBet.setText('BET: ' + Options.coin * Options.line);
            } else {
                Options.coin = 10;
                this.txtCountCoin.setText(Options.coin);
                this.scene.maxBet.txtCountMaxBet.setText('BET: ' + Options.coin * Options.line);
            }
        }
    }
    /*end function button coin*/
}