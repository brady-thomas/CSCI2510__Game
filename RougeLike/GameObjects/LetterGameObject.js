class LetterGameObject extends GameObjects{
    constructor(){
        super("LetterGameObject", ["LetterGameObject"], "background")


        this.addComponent(new Polygon(), {fillStyle: "oldlace", points: [
            new Vector2(-200, -300),
            new Vector2(600, -300),
            new Vector2(600, 600),
            new Vector2(-200, 600)
        ]})


        
    }
}