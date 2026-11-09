class TeleporterOneController extends Component{
    
    



    
    
    
    
    onCollisionStay(other){

        let mainCube = GameObjects.find("Main")
        if(other === mainCube){
            let teleporterExit = GameObjects.find("TeleporterTwo")

            let teleporterExitPosition = teleporterExit.transform.position

            other.transform.position = teleporterExitPosition.plus(new Vector2(0, 100))

        }
    }
    

}