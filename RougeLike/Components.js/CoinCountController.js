class CoinCountController extends Component {

    start() {
        this.coinCount = 0
        this.isSpinning = true
        this.spinTimer = 0
        //this.timeCheck = 0
        

        this.hasMustard = false
        this.salamiTsunami = 0
        // this.mustardMultiply = 1.5

        this.tempArray = []
        this._2DSpin = []

        this.flyingTextList = []
        this.flyingTextIndex = 0
        this.flyingTextTimer = 0

        //this.madeCoinDict = {}




        //console.log(this._2DSpin)


    }

    update() {
        this.spinTimer += Time.deltaTime



        //console.log(this.spinTimer)



        if (this.spinTimer >= 1.1 && this.isSpinning) {
            this.isSpinning = false
            for (let i = 0; i < Globals.spinItems.length; i++) {
                this.tempArray.push(Globals.spinItems[i])
                if (i % 5 == 4) {
                    this._2DSpin.push(this.tempArray)
                    this.tempArray = []
                }
            }

            console.log(this._2DSpin)


            for (let i = 0; i < this._2DSpin.length; i++) {
                for (let j = 0; j < this._2DSpin[i].length; j++) {
                    const item = this._2DSpin[i][j]
                    const adjacentItems = []
                    let mustard = 1


                    if (item == "Empty") {
                        continue
                    }

                    if (!(i == 0)) {
                        adjacentItems.push(this._2DSpin[i - 1][j])
                        if (!(j == 0)) {
                            adjacentItems.push(this._2DSpin[i - 1][j - 1])
                        }
                        if (!(j == 4)) {
                            adjacentItems.push(this._2DSpin[i - 1][j + 1])
                        }
                    }

                    if (!(i == 3)) {
                        adjacentItems.push(this._2DSpin[i + 1][j])
                        if (!(j == 0)) {
                            adjacentItems.push(this._2DSpin[i + 1][j - 1])
                        }
                        if (!(j == 4)) {
                            adjacentItems.push(this._2DSpin[i + 1][j + 1])
                        }
                    }

                    if (!(j == 0)) {
                        adjacentItems.push(this._2DSpin[i][j - 1])
                    }

                    if (!(j == 4)) {
                        adjacentItems.push(this._2DSpin[i][j + 1])
                    }

                    if (adjacentItems.includes("Mustard")) {
                        mustard = 1.5
                        this.hasMustard = true

                    }



                    if (item == "Lettuce") {
                        this.coinCount += 5 * mustard
                    }

                    if (item == "Turkey") {
                        this.coinCount += 5 * mustard
                        if (adjacentItems.includes("Bacon") && adjacentItems.includes("Ranch")) {
                            this.coinCount += 55 * mustard
                            this.flyingTextList.push("Turkey Bacon Ranch! +¢55")
                        }
                    }

                    if (item == "Tomato") {
                        this.coinCount += 5 * mustard
                        if (adjacentItems.includes("Lettuce") && adjacentItems.includes("Bacon")) {
                            this.coinCount += 35 * mustard
                            this.flyingTextList.push("BLT! +¢35")
                        }
                    }

                    if (item == "Ham") {
                        this.coinCount += 0 * mustard
                        for (let adj of adjacentItems) {
                            if (adj == "Ham" || adj == "Bacon" || adj == "Salami") {
                                //console.log(this.coinCount + 10 * mustard)
                                this.coinCount += 10 * mustard
                                this.flyingTextList.push("Porky Pig! +¢10")
                            }
                        }
                    }


                    if (item == "Cheese") {
                        this.coinCount += 0 * mustard
                        for (let adj of adjacentItems) {
                            if (adj != "Empty") {
                                this.flyingTextList.push("Say Cheese! +¢5")
                                this.coinCount += 5 * mustard
                            }
                        }
                    }

                    if (item == "Bacon") {
                        this.coinCount += 5 * mustard
                    }

                    if (item == "Ranch") {
                        this.coinCount += 5 * mustard
                    }

                    if (item == "Mustard") {
                        continue
                        //this.coinCount += 0 * mustard

                    }

                    if (item == "Salami") {

                        this.salamiTsunami += 1
                        this.flyingTextList.push("Salami Tsunami! +¢" + this.salamiTsunami * 2)
                        if (mustard == 1.5) {
                            this.salamiTsunami += .5
                        }

                        //console.log(this.salamiTsunami)

                        
                    }

                }

            }


            for (let i = 0; i < this.salamiTsunami; i++) {
                this.coinCount += 2 * this.salamiTsunami
            }

            this.coinCount = Math.ceil(this.coinCount)

            this.moneySpread = instantiate(new CoinCountText(), this.transform.position.clone())
            this.moneySpread.getComponent(TextLabel).text = "   + ¢" + this.coinCount





            this.nextDayButton = instantiate(new ContinueBehaviorButton(), this.transform.position.clone().plus(new Vector2(50, 300)))
            this.nextDayLabel = instantiate(new ContinueTextLabel(), this.transform.position.clone().plus(new Vector2(0, 315)))

            this.nextDayLabel.getComponent(TextLabel).text = "Day " + (Globals.day + 1)
            this.nextDayLabel.getComponent(TextLabel).font = "48px VT323"




            if (this.hasMustard) {
                this.flyingTextList.push("Mustard On the Beat! x1.5")
            }

            Globals.money += this.coinCount




        }

        if (this.flyingTextIndex < this.flyingTextList.length && this.spinTimer >= 1.2) {
            //console.log(this.spinTimer)

            this.flyingTextTimer -= Time.deltaTime

            if (this.flyingTextTimer <= 0) {
                console.log("flying text")
                let text = this.flyingTextList[this.flyingTextIndex]
                let randomVector2 = new Vector2(Math.random() * 700 - 500, Math.random() * 400 - 100)
                let flyingText = instantiate(new FlyingText(), randomVector2.clone())
                flyingText.getComponent(TextLabel).text = text
                this.flyingTextIndex += 1
                this.flyingTextTimer += .2
            }
        }






    }






    // fixedUpdate() {
    //     //console.log(this.spinTimer)


        


    // }


}