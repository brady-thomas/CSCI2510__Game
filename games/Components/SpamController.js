class SpamController extends Component{

    start(){
        this.timeSinceSpam = 1
        this.spamActiveTimer = 0
        this.spamActive = false
        this.direction = -1
        this.startPosition = this.transform.position.clone()

        this.timeSinceLastLaser = 0
    }



    update(){
        this.transform.position.y -= Time.deltaTime * 400 * this.direction

        if (this.transform.position.y < this.startPosition.y - 200){
            this.direction = -1
            
        
        }
        
        if (this.transform.position.y > this.startPosition.y + 200){
            this.direction = 1
            
        }
        

        if (!this.spamActive){
            this.timeSinceSpam += Time.deltaTime
            
        }



        if (this.timeSinceSpam >= 1){
            this.timeSinceSpam = 0
            
            
            this.spamActive = true
            

        }

        if (this.spamActive){
            if (this.timeSinceLastLaser >= 0.1){
                this.timeSinceLastLaser = 0
                this.laser = instantiate(new LaserGameObject(), this.transform.position.clone(), Math.PI * 3 / 2)
            }
            this.timeSinceLastLaser += Time.deltaTime
            this.spamActiveTimer += Time.deltaTime
        }


        if (this.spamActiveTimer >= 1.7){
            this.spamActiveTimer = 0
            this.spamActive = false
        }

        
    


        

    }  
    
}