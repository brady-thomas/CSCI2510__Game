class PickController extends Component{

    start(){

        const randChoice = Math.floor(Math.random() * Globals.currentToppings.length)
        if (Globals.day != 1 && Math.random() < 0.5){
            const uncommonChoice = Math.floor(Math.random() * Globals.unCommonToppings.length)
            this.choice = Globals.unCommonToppings[uncommonChoice]
            this.choiceString = Globals.unCommonToppingsString[uncommonChoice]
            this.choiceDescription = "Uncommon: " + Globals.descriptionsDict[this.choiceString]
        }
        else{
            this.choice = Globals.currentToppings[randChoice]
            this.choiceString = Globals.currentToppingsString[randChoice]
            this.choiceDescription = Globals.descriptionsDict[this.choiceString]
        }

        this.choiceDouble = false
        this.choiceSelected = false

        //console.log(Globals.day)

        if (!Globals.choiceOnScreen.includes(this.choiceString)){
            Globals.choiceOnScreen.push(this.choiceString)
        }
        else{

            console.log("choice double")
            this.choiceDouble = true
            

        }

        //console.log(Globals.choiceOnScreen)


        while (this.choiceDouble){
            const newRandom = Math.floor(Math.random() * Globals.currentToppings.length)
            this.choiceString = Globals.currentToppingsString[newRandom]
            this.choice = Globals.toppingsFactory[this.choiceString]()
            this.choiceDescription = Globals.descriptionsDict[this.choiceString]
            if (!Globals.choiceOnScreen.includes(this.choiceString)){
                Globals.choiceOnScreen.push(this.choiceString)
                this.choiceDouble = false
            }
            

        }

        

        this.choice.markForDestroy = false

        this.choiceClick = instantiate(this.choice, this.transform.position.clone())


    

        this.choiceDescriptionText = instantiate(new Descriptions(), this.transform.position.clone().minus(new Vector2(50, 500)))
        this.choiceDescriptionText.getComponent(MultiLineTextLabel).text = this.choiceDescription

        

        //console.log(this.choiceString)
        

       

        //console.log(Globals.choiceOnScreen)

    }




    fixedUpdate(){

        
       
        this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(2.5, 2)

        if (this.choiceString == "Cheese"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(4.5, 4.5)
        }
        if (this.choiceString == "Tomato"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(2, 2)
        }
        if (this.choiceString == "Bacon"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(2.5, 1.2)
        }
        if (this.choiceString == "Ranch" || this.choiceString == "Mustard" || this.choiceString == "Salami"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(1.5, 2)
        }
       



        if (this.choiceSelected){

            for (let picker of GameObjects.findGameObjectsWithTag("PickGameObject")){
                picker.destroy()
            }
            for (let desc of GameObjects.findGameObjectsWithTag("Description")){
                desc.destroy()
            }

            Globals.choiceOnScreen = []

            SceneManager.loadScene(SlotScene)
        }
    }

    update(){


        
        


    }   


    
    

    onMouseOver(){
        this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(3.5, 2.8)

        if (this.choiceString == "Cheese"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(6, 6)

        }
        if (this.choiceString == "Tomato"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(3.5, 3.5)
        }

        


        if (Input.mouseButtonsDownThisFrame.includes(0)){

            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(2.5, 2)

            if (this.choiceString == "Cheese"){
                this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(4.5, 4.5)
            }
            if (this.choiceString == "Tomato"){
                this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(2, 2)
            }

            if (this.choiceString == "Bacon"){
                this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(3, 2.8)
            }
            if (this.choiceString == "Ranch" || this.choiceString == "Mustard" || this.choiceString == "Salami"){
                this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(1.8, 2.3)
            }

            

            
            Globals.money -= Globals.currentToppingsCost[this.choiceString]
            Globals.playerItems[Globals.currentItem] = this.choiceString
            Globals.currentItem++

            this.choiceSelected = true

            
            
            //console.log(Globals.playerItems)
        }
            



    }       

1

}