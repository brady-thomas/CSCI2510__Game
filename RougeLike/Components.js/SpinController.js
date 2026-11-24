class SpinController extends Component{

    start(){
        this.spinTimer = 1
        this.isSpinning = true
        Globals.spinItems = []

        this.itemCheckDict = Globals.inventoryDict
        //console.log(this.itemCheckDict)
        //console.log(Globals.inventoryDict)
        
        
        this.slotFrames = GameObjects.findGameObjectsWithTag("SlotFrame")

        


        

        // for (let item in Globals.playerItems){
        //         Globals.itemCheckDict[Globals.playerItems[item]] = 0


        //     }
        
        

        //this.spinGO = []

        //console.log(this.slotFrames)
        //console.log(Globals.playerItems)


    }

    update(){

        this.spinTimer -= Time.deltaTime

        if (this.isSpinning){

            

            this.slot = this.slotFrames[Math.floor(Math.random() * this.slotFrames.length)]
                
            this.randomNum = Math.floor(Math.random() * Globals.currentToppings.length)
            this.randomSpin = instantiate(Globals.currentToppings[this.randomNum], this.slot.transform.position.clone())
            
            
        }

        

        if(this.spinTimer <= 0 && this.isSpinning){
            this.isSpinning = false


            
            if (this.randomSpin){
                this.randomSpin.destroy()
            }


                

                //console.log(Globals.playerItems)
                
            this.item = Globals.playerItems[Math.floor(Math.random() * Globals.playerItems.length)]
            
            
            
            while(this.item != "Empty" && this.itemCheckDict[this.item] <= 0){
                //console.log("spun out of bounds " + this.item + this.itemCheckDict[this.item])
                this.item = Globals.playerItems[Math.floor(Math.random() * Globals.playerItems.length)]
            }



            //console.log(this.item)

            if (this.item == "Empty"){
                this.itemSpun = instantiate(Globals.toppingsFactory[this.item](), this.transform.position.clone())
                Globals.spinItems.push(this.item)
            }
            else{
                    // while(!(Globals.itemCheckDict[this.item] < Globals.inventoryDict[this.item])){
                        
                    //     this.item = Globals.playerItems[Math.floor(Math.random() * Globals.playerItems.length)]
                        
                
                    // }
                    
                if(this.itemCheckDict[this.item] > 0){
                    this.itemCheckDict[this.item] -= 1
                    

                }

                else{  


                    //console.log(Globals.itemCheckDict)

                    // console.log(this.item)
                    // this.item = "Mustard"
                    

                        
                }
                        
            


                Globals.spinItems.push(this.item)
                this.itemSpun = instantiate(Globals.toppingsFactory[this.item](), this.transform.position.clone())

                //this.itemNum = this.itemCheckDict[this.item]
            } 
            
            
            




                    
            

            //console.log(this.itemSpun.transform.position)

            
        
            //console.log(this.randomSpin)

            
            //console.log("spun")
        }
        
    }



}