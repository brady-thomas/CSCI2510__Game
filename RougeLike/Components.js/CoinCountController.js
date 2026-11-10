class CoinCountController extends Component{

    start(){
        this.coinCount = 0
        this.isSpinning = true
        this.spinTimer = 1.1

        this.tempArray = []
        this._2DSpin = []

        //this.madeCoinDict = {}


        

        //console.log(this._2DSpin)


    }

    update(){
        this.spinTimer -= Time.deltaTime
        



        

        if(this.spinTimer <= 0 && this.isSpinning){
            this.isSpinning = false
            for (let i = 0; i < Globals.spinItems.length; i++){
                this.tempArray.push(Globals.spinItems[i])
                if (i % 5 == 4){
                    this._2DSpin.push(this.tempArray)
                    this.tempArray = []
                }
            }

            console.log(this._2DSpin)

            
            for (let i = 0; i < this._2DSpin.length; i++){
                for (let j = 0; j < this._2DSpin[i].length; j++){
                    const item = this._2DSpin[i][j]
                    const adjacentItems = []
                

                    if (item == "Empty"){
                        continue
                    }

                    if (!(i == 0)){
                        adjacentItems.push(this._2DSpin[i - 1][j])
                        if (!(j == 0)){
                            adjacentItems.push(this._2DSpin[i - 1][j - 1])
                        }
                        if (!(j == 4)){
                            adjacentItems.push(this._2DSpin[i - 1][j + 1])
                        }
                    }

                    if (!(i == 3)){
                        adjacentItems.push(this._2DSpin[i + 1][j])
                        if (!(j == 0)){
                            adjacentItems.push(this._2DSpin[i + 1][j - 1])
                        }
                        if (!(j == 4)){
                            adjacentItems.push(this._2DSpin[i + 1][j + 1])
                        }
                    }

                    if (!(j == 0)){
                        adjacentItems.push(this._2DSpin[i][j - 1])
                    }

                    if (!(j == 4)){
                        adjacentItems.push(this._2DSpin[i][j + 1])
                    }


                    
                    if (item == "Lettuce"){
                        this.coinCount += 5
                    }

                    if (item == "Turkey"){
                        this.coinCount += 5
                        if (adjacentItems.includes("Bacon") && adjacentItems.includes("Ranch")){
                            this.coinCount += 55
                        }
                    }

                    if (item == "Tomato"){
                        this.coinCount += 5
                        if (adjacentItems.includes("Lettuce") && adjacentItems.includes("Bacon")){
                            this.coinCount += 35
                        }
                    }

                    if (item == "Ham"){
                        this.coinCount += 5
                        for (let adj of adjacentItems){
                            if (adj == "Ham" || adj == "Bacon"){
                                this.coinCount += 15
                            }
                        }
                    }

                    if (item == "Cheese"){
                        for (let adj of adjacentItems){
                            if (adj != "Empty"){
                                this.coinCount += 5
                            }
                        }
                        this.coinCount += 5


                    }



                    
                }
            }

        
            this.moneySpread = instantiate(new CoinCountText(),  this.transform.position.clone())
            this.moneySpread.getComponent(TextLabel).text = "   + ¢" + this.coinCount





            this.nextDayButton = instantiate(new ContinueBehaviorButton(), this.transform.position.clone().plus(new Vector2(50, 300)))
            this.nextDayLabel = instantiate(new ContinueTextLabel(), this.transform.position.clone().plus(new Vector2(0, 315)))

            this.nextDayLabel.getComponent(TextLabel).text = "Day " + (Globals.day + 1)
            this.nextDayLabel.getComponent(TextLabel).font = "48px VT323"
        

            Globals.money += this.coinCount
        
        }

        

        



        
        
    }



}