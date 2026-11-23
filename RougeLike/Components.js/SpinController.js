class SpinController extends Component{

    start(){
        this.spinTimer = 1
        this.isSpinning = true
        Globals.spinItems = []
        this.slotFrames = GameObjects.findGameObjectsWithTag("SlotFrame")

        

        for (let item in Globals.playerItems){
                Globals.itemCheckDict[item] = 0

            }


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
            
            //console.log(this.item)

            if (this.item == "Empty"){
                this.itemSpun = instantiate(Globals.toppingsFactory[this.item](), this.transform.position.clone())
                Globals.spinItems.push(this.item)
            }
            else{
                if (Globals.itemCheckDict[this.item]){
                    while(!(Globals.itemCheckDict[this.item] < Globals.inventoryDict[this.item])){
                            this.item = Globals.playerItems[Math.floor(Math.random() * Globals.playerItems.length)]
                        
                    }
                    
                    if(Globals.itemCheckDict[this.item] < Globals.inventoryDict[this.item]){
                        Globals.itemCheckDict[this.item] += 1
                        Globals.spinItems.push(this.item)
                        this.itemSpun = instantiate(Globals.toppingsFactory[this.item](), this.transform.position.clone())

                    }
                        
                }
                else{
                    Globals.itemCheckDict[this.item] = 1
                    Globals.spinItems.push(this.item)
                    this.itemSpun = instantiate(Globals.toppingsFactory[this.item](), this.transform.position.clone())
                }
        } 
            
            




                    
            

            //console.log(this.itemSpun.transform.position)

            
        
            //console.log(this.randomSpin)

            
            //console.log("spun")
        }
        
    }



}