class InventoryController extends Component{

    start(){

        this.inventoryDict = {}

        
        for (let item of Globals.playerItems) {
            //console.log(typeof item)
            if (item == "Empty")
                continue
                
            if (!this.inventoryDict[item]) {
                this.inventoryDict[item] = 0
            }

            this.inventoryDict[item]++
        }

        for (let item in this.inventoryDict) {
            //console.log(item)
            if (this.inventoryDict[item] != 0) {
                Globals.inventoryDict[String(item)] = this.inventoryDict[item]
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
        
        //console.log(Globals.inventoryDict)


        this.gameObjects.getComponent(MultiLineTextLabel).text = inventoryText


    }

}