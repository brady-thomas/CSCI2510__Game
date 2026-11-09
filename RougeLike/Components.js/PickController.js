class PickController extends Component{

    start(){

        const randChoice = Math.floor(Math.random() * Globals.starterToppings.length)

        this.choice = Globals.starterToppings[randChoice]
        this.choiceString = Globals.starterToppingsString[randChoice]

        this.choiceDouble = false


        if (!Globals.choiceOnScreen.includes(this.choiceString)){
            Globals.choiceOnScreen.push(this.choiceString)
        }
        else{

            console.log("choice double")
            this.choiceDouble = true
            

        }
        

       

        console.log(Globals.choiceOnScreen)

    }




    fixedUpdate(){

        if (this.choiceDouble){
            let newRandom = Math.floor(Math.random() * Globals.starterToppings.length)
            this.choice = Globals.starterToppings[newRandom]
            this.choiceString = Globals.starterToppingsString[newRandom]
            if (!Globals.choiceOnScreen.includes(this.choiceString)){
                Globals.choiceOnScreen.push(this.choiceString)
                this.choiceDouble = false
            }
            

        }

        



        this.choiceClick = instantiate(this.choice, this.transform.position.clone())
       
        this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(2.5, 2)

        if (this.choiceString == "AmericanCheese"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(4.5, 4.5)
        }
    }

    update(){


        



    }


    
    

    onMouseOver(){
        this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(3.5, 2.8)

        if (this.choiceString == "AmericanCheese"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(6, 6)

        }
        if (this.choiceString == "Tomato"){
            this.choiceClick.getComponent(Polygon).transform.scale = new Vector2(3.5, 3.5)
        }
            



    }   

1

}