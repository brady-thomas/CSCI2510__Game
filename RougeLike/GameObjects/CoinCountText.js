class CoinCountText extends GameObjects{
    constructor(){
        super("CoinCountText", ["CoinCountText"], "labels")

        this.addComponent(new TextLabel(), {fillStyle: "gold", font: "64px VT323", textAlign: "left"})
    }

}