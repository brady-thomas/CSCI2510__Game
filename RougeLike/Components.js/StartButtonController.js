class StartButtonController extends Component{


    fixedUpdate(){
        let textLabel = GameObjects.find("StartText")
        textLabel.transform.scale = new Vector2(1, 1)
    }

    
    onMouseOver(){
        let textLabel = GameObjects.find("StartText")
        textLabel.transform.scale = new Vector2(1.2, 1.2)

        if (Input.mouseButtonsDown.includes(0)) {
            
            let i = 0
            while (i < 2) {
                let random = Math.floor(Math.random() * Globals.currentToppings.length)
                Globals.playerItems.push(Globals.currentToppingsString[random])

                i++
            }

            SceneManager.loadScene(GastaOne)




        }


        //console.log("Mouse") 
    }



}