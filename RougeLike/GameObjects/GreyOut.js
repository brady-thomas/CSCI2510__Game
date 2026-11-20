class GreyOut extends RectGameObject {
    constructor() {
        super("GreyOut", [], "toppings")
        this.addComponent(new Polygon(), { fillStyle: "#000000", alpha: 0.5, points: Assets.square })
        this.addComponent(new RectTransform())
    }
}