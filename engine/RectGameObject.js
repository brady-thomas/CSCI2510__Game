class RectGameObject extends GameObjects{
    constructor(name, tags, layers) {
        super(name, tags, layers)
        this.components[0] = new RectTransform
       
    }
}