class StartButtonController extends Component{


    fixedUpdate(){
        let textLabel = GameObjects.find("StartText")
        textLabel.transform.scale = new Vector2(1, 1)
    }

    
    onMouseOver(){
        let textLabel = GameObjects.find("StartText")
        textLabel.transform.scale = new Vector2(1.2, 1.2)

        if (Input.mouseButtonsDown.includes(0)) {
            SceneManager.loadScene(PickOne)
        }


        //console.log("Mouse")
    }



}