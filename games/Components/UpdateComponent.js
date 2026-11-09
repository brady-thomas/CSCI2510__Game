class UpdateComponent extends Component {

    speed = 960
    baseSpeed = 960
    dashSpeed = 1500



    start(){

        this.isGrounded = false
        this.lastJumpTime = 0

        this.dashTimer = 0
        this.lastDashTime = 0
        this.isDashing = false
    }



    fixedUpdate() {
        if (Input.keysDown.includes("ArrowRight") || Input.keysDown.includes("KeyD")){
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

        
            if (Input.keysDown.includes("ShiftLeft") && Time.time - this.lastDashTime > 1.5){
                this.isDashing = true
                this.lastDashTime = Time.time
               
                
            }
        }

            

        if (Input.keysDown.includes("ArrowLeft") || Input.keysDown.includes("KeyA")){
           
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed

            if (Input.keysDown.includes("ShiftLeft") && Time.time - this.lastDashTime > 1.5){
                this.isDashing = true
                this.lastDashTime = Time.time
                
                }
            }            
 

    
        if (this.isDashing && this.dashTimer <= .2){
            if(this.gameObjects.getComponent(RigidBody).velocity.y >= 0){
                this.gameObjects.getComponent(RigidBody).velocity.y = 0
            }
            
            this.speed = this.dashSpeed
            this.dashTimer += Time.deltaTime
        }
        


        this.isGrounded = false
    }

    update() {
        

        let isStartScene = SceneManager.currentScene
        if (!(isStartScene == "StartScene")){
            Globals.timeDisplay += Time.deltaTime
        }

        if (Input.keysDown.includes("KeyR")){
            SceneManager.loadScene(Level01)
            Globals.levelNum = 0
        }
        


        if ((Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW") || Input.keysDown.includes("Space")) && this.isGrounded){
            this.gameObjects.getComponent(RigidBody).velocity.y = -1500
            this.lastJumpTime = Time.time
        }

        if ((Input.keysDown.includes("ArrowUp") || Input.keysDown.includes("KeyW") || Input.keysDown.includes("Space")) && Time.time - this.lastJumpTime < .1){
            this.gameObjects.getComponent(RigidBody).velocity.y = -1500
        }



        
        
        if (this.dashTimer > .2){
            this.isDashing = false
            this.dashTimer = 0
            this.speed = this.baseSpeed
        }

        


        
        
        
    }

    onCollisionStay(other, minimumTransformVector){

        if(minimumTransformVector.y < 0 && this.gameObjects.getComponent(RigidBody).velocity.y > 0){
            this.gameObjects.getComponent(RigidBody).velocity.y = 0
            this.isGrounded = true
        }
        if(minimumTransformVector.y > 0 && this.gameObjects.getComponent(RigidBody).velocity.y < 0){
            this.gameObjects.getComponent(RigidBody).velocity.y = 0
            this.isGrounded = false
        }


    }

}
