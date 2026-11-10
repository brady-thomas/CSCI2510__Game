class ContinueButtonController extends Component{

    start(){
        this.textLabel = GameObjects.find("ContinueTextLabel")
        
        this.button = GameObjects.find("ContinueBehaviorButton")
    }
 
     fixedUpdate(){
        
        this.textLabel.transform.scale = new Vector2(1, 1)
        this.button.transform.scale = new Vector2(1, 1) 

    }

    
    onMouseOver(){
        
        this.textLabel.transform.scale = new Vector2(1.1, 1.1)
        this.button.transform.scale = new Vector2(1.2, 1.2)

        if (Input.mouseButtonsDown.includes(0)) {
            

            SceneManager.loadScene(PickOne)




        }


        //console.log("Mouse")
    }



}

