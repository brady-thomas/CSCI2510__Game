class TeleporterTwoController extends Component{
    
    onCollisionStay(other){
        let mainCube = GameObjects.find("Main")
        if(other === mainCube){
            let teleporterExit = GameObjects.find("TeleporterOne")

            let teleporterExitPosition = teleporterExit.transform.position

            console.log("Teleporting to TeleporterOne")
            other.transform.position = teleporterExitPosition.plus(new Vector2(0, 100))

        }
    }

}