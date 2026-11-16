class FlyingTextController extends Component {


    start(){
        this.startPosition = this.transform.position.clone()
        this.direction = 1
        this.speed = 200
    }



    fixedUpdate(){
        if (this.transform.position.x > this.startPosition.x + 200){
            this.direction = -1
        }
        if (this.transform.position.x < this.startPosition.x - 200){
            this.direction = 1
        }
        this.transform.position.x += this.direction * this.speed * Time.deltaTime
        
    }
}