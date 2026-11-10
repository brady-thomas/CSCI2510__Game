class SpinController extends Component{

    start(){
        this.spinTimer = 1
        this.isSpinning = true
        
        this.slotFrames = GameObjects.findGameObjectsWithTag("SlotFrame")

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
            
            Globals.spinItems.push(this.item)
                    
            this.itemSpun = instantiate(Globals.toppingsInstantiate[this.item](), this.transform.position.clone())

            //console.log(this.itemSpun.transform.position)

            
        
            //console.log(this.randomSpin)

            
            //console.log("spun")
        }
        
    }



}