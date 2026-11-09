class PickGameObject extends GameObjects{
    constructor(){
        super("PickGameObject", ["PickGameObject"], "picks")



        //this.addComponent(new Polygon(), {fillStyle:"#00000057", points:Assets.square})

        this.addComponent(new PickController())

        


        this.transform.scale = new Vector2(5, 5)

        this.addComponent(new Collider(), {points:Assets.square})


    


    }
}