class CoinControllerGameObject extends GameObjects{
    constructor(){
        super("CoinController", ["CoinController"], "labels")
        this.addComponent(new CoinCountController())

        this.addComponent(new Polygon({fillStyle: "#FFFFFF00", points:Assets.triangle}))
    }
}