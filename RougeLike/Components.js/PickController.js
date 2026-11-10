class PickController extends Component{

    start(){

        const randChoice = Math.floor(Math.random() * Globals.currentToppings.length)

        this.choice = Globals.currentToppings[randChoice]
        this.choiceString = Globals.currentToppingsString[randChoice]
        this.choiceDescription = Globals.currentToppingsDescription[randChoice]

        this.choiceDouble = false

        console.log(Globals.day)

        if (!Globals.choiceOnScreen.includes(this.choiceString)){
            Globals.choiceOnScreen.push(this.choiceString)
        }
        else{

            //console.log("choice double")
            this.choiceDouble = true
            

        }

        
        

       

        //console.log(Globals.choiceOnScreen)

    }




    fixedUpdate(){

        if (this.choiceDouble){
            let newRandom = Math.floor(Math.random() * Globals.currentToppings.length)
            this.choice = Globals.currentToppings[newRandom]
            this.choiceString = Globals.currentToppingsString[newRandom]
            this.choiceDescription = Globals.currentToppingsDescription[newRandom]
            if (!Globals.choiceOnScreen.includes(this.choiceString)){
                Globals.choiceOnScreen.push(this.choiceString)
                this.choiceDouble = false
            }
            

        }

        



        this.choiceClick = instantiate(this.choice, this.transform.position.clone())


    

        this.choiceDescriptionText = instantiate(new Descriptions(), this.transform.position.clone().minus(new Vector2(50, 500)))
        this.choiceDescriptionText.getComponent(MultiLineTextLabel).text = this.choiceDescription
       
        this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(2.5, 2)

        if (this.choiceString == "Cheese"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(4.5, 4.5)
        }
        if (this.choiceString == "Tomato"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(2, 2)
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

            
            Globals.money -= Globals.currentToppingsCost[this.choiceString]
            Globals.playerItems[Globals.currentItem] = this.choiceString
            Globals.currentItem++

            SceneManager.loadScene(SlotScene)
            
            //console.log(Globals.playerItems)
        }
            



    }       

1

}