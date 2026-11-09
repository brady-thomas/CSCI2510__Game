class Level11ControllerGameObject extends GameObjects{
    constructor(){
        super("Level11ControllerGameObject")
        this.addComponent(new Level11Controller())
    }
}