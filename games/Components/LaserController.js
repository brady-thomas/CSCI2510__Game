class LaserController extends Component {

    fixedUpdate() {
        this.transform.position.x -= Time.deltaTime * 600

        this.transform.position.x = this.transform.position.x

        if (this.transform.position.x < -1000) {
            this.gameObjects.destroy()  
        }
    }

    update(){
    //     let platforms = GameObjects.findGameObjectsWithTag("Platform")
    //     if (platforms.length > 0)
    //         for (let platform of platforms) {
    //             console.log(platform.transform.position.y)
    //         }
    // }
        // let laserPosition = this.transform.position
        // let mainCube = GameObjects.find("Main")

        // if (mainCube){
        //     let myPosition = mainCube.transform.position
        //     let distance = myPosition.minus(laserPosition).magnitude
        //     if (distance < 25) {
        //         this.gameObjects.destroy()
        //         mainCube.destroy()
        //         console.log("died")
        //         SceneManager.loadScene(Level01)
        //     }
    }

            
    


    onCollisionStay(other) {
        let laserWalls = GameObjects.findGameObjectsWithTag("LaserWall")
        let lasers = GameObjects.findGameObjectsWithTag("Laser")
        let turrets = GameObjects.findGameObjectsWithTag("Turret")
        if (!laserWalls.includes(other) && !lasers.includes(other) && !turrets.includes(other)) {
            this.gameObjects.destroy()
        }
        else{
            return

        }
    }
}
