class GastaPayController extends Component{

    start(){
        this.fee = Globals.gastaFees[Globals.week]
        this.canPay = Globals.money >= this.fee
        
        this.textLabel = GameObjects.find("PayTextLabel")
        
        this.button = GameObjects.find("PayGastaButton")


        if (this.canPay)
            this.textLabel.getComponent(TextLabel).text = "Pay ¢" + this.fee

        else
            this.textLabel.getComponent(TextLabel).text = "Gasta Wins"
    }
 


     fixedUpdate(){
        
        this.textLabel.transform.scale = new Vector2(1, 1)
        this.button.transform.scale = new Vector2(1, 1) 

    }
        


    





    onMouseOver(){

        this.textLabel.transform.scale = new Vector2(1.1, 1.1)
        this.button.transform.scale = new Vector2(1.2, 1.2)


        if (Input.mouseButtonsDownThisFrame.includes(0))
            if (this.canPay){
                Globals.money -= this.fee
                SceneManager.loadScene(PickOne)
                
            }


            else{
                SceneManager.loadScene(GameOver)
            }





    }

}