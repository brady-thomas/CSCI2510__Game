class StartButtonController extends Component{
    
    start(){
        Globals.boot()
    }


    fixedUpdate(){
        let textLabel = GameObjects.find("StartText")
        textLabel.transform.scale = new Vector2(1, 1)
    }

    
    onMouseOver(){
        let textLabel = GameObjects.find("StartText")
        textLabel.transform.scale = new Vector2(1.2, 1.2)

        if (Input.mouseButtonsDown.includes(0)) {
            
            let i = 0
            while (i < 4) {
                let random = Math.floor(Math.random() * Globals.currentToppings.length)
                Globals.playerItems.push(Globals.currentToppingsString[random])
                //console.log(Globals.playerItems)

                i++
            }

            SceneManager.loadScene(GastaOne)




        }


        //console.log("Mouse") 
    }



}