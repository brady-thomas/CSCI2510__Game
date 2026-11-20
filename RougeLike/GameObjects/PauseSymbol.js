class PauseSymbol extends GameObjects {
    constructor() {
        super("PauseSymbol", ["PauseSymbol"], "pause")
        this.addComponent(new Polygon(), { fillStyle: "white", points: [
            new Vector2(-2.5, 10), 
            new Vector2(-2.5, -10), 
            new Vector2(2.5, -10), 
            new Vector2(2.5, 10)] })

        // this.addComponent(new Polygon(), { fillStyle: "white", points: [
        //     new Vector2(5, 10), 
        //     new Vector2(5, -10), 
        //     new Vector2(10, -10), 
        //     new Vector2(10, 10)] })



    }
}