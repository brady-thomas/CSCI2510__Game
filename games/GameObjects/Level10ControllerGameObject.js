class Level10ControllerGameObject extends GameObjects{
    constructor(){
        super("Level10ControllerGameObject")
        this.addComponent(new Level10Controller())
    }
}