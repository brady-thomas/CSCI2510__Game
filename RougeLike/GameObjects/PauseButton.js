class PauseButton extends GameObjects {
    constructor() {
        super("PauseButton", [], "pause")
        this.addComponent(new Polygon(), { fillStyle: "red", points: Assets.square })
        //this.addComponent(new TextLabel(), { text: "||", fillStyle: "white", font: "20px VT323", textAlign: "center", textBaseline: "middle" })
        
        
        this.addComponent(new Collider())
        this.addComponent(new PauseButtonController())
        this.transform.scale = new Vector2(2, 2)

        //this.transform.useLetterBoxing = true
        
    }
}