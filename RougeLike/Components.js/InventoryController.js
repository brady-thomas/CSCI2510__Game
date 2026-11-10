class InventoryController extends Component{

    start(){

        this.inventoryDict = {}

        for (let item of Globals.playerItems) {
            if (item == "Empty")
                continue
                
            if (!this.inventoryDict[item]) {
                this.inventoryDict[item] = 0
            }

            this.inventoryDict[item]++
        }

        for (let item in this.inventoryDict) {
            if (this.inventoryDict[item] != 0) {
                Globals.inventoryDict[item] = this.inventoryDict[item]
            }
        }



    
    }

    update(){


        let inventoryText = "Inventory:           "
        for (let item in this.inventoryDict) {
            if (this.inventoryDict[item] != 0) {
                inventoryText += item + ": " + this.inventoryDict[item] + " "
            }
        }
        

        this.gameObjects.getComponent(MultiLineTextLabel).text = inventoryText


    }

}