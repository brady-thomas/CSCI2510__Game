class InventoryGameObject extends GameObjects{
    constructor(){
        super("Inventory", ["Inventory"], "UI")

        this.addComponent(new InventoryController())

        this.addComponent(new MultiLineTextLabel(), {text: "Inventory: ", fillStyle: "white", font: "22px VT323", maxWidth: 100, align: "left"})

    }
}