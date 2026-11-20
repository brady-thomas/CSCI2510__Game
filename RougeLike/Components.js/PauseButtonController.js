class PauseButtonController extends Component {
    start(){
        
        this.button = GameObjects.find("PauseButton")
        this.symbolOne = GameObjects.findGameObjectsWithTag("PauseSymbol")[0]
        this.symbolTwo = GameObjects.findGameObjectsWithTag("PauseSymbol")[1]

        
        this.isPaused = false
        //console.log(this.button.transform.position)
    }



    fixedUpdate(){
        this.button.transform.scale = new Vector2(2, 2)
      
        this.symbolOne.transform.scale = new Vector2(1, 1)  
        this.symbolTwo.transform.scale = new Vector2(1, 1)  
        
    }

    update(){
        if (this.isPaused) {
            //let newSymbol = instantiate(new PlaySymbol(), this.button.transform.position.clone(), Math.PI / 2)
            //console.log(newSymbol.transform.position)
            //this.symbol = newSymbol
            this.symbolOne.getComponent(Polygon).points = [new Vector2(-13, 10), new Vector2(-13,-10), new Vector2(7, 0)]
            this.symbolTwo.getComponent(Polygon).points = [new Vector2(0,1), new Vector2(0, -1), new Vector2(1, 1)]
            //this.symbol.getComponent(Polygon).points =  [new Vector2(-10, 10), new Vector2(-10, -10), new Vector2(10, 0)] 
            
            
            

        }
        else{
            //let newSymbol = instantiate(new PauseSymbol(), this.button.transform.position.clone())
            //this.symbol = newSymbol
            this.symbolOne.getComponent(Polygon).points = [
            new Vector2(-2.5, 10), 
            new Vector2(-2.5, -10), 
            new Vector2(2.5, -10), 
            new Vector2(2.5, 10)]

            this.symbolTwo.getComponent(Polygon).points = 
            [new Vector2(-2.5, 10),
            new Vector2(-2.5, -10),
            new Vector2(2.5, -10), 
            new Vector2(2.5, 10)]
            
            //this.symbol.getComponent(Polygon).points =  [new Vector2(-10, 10), new Vector2(-10, -10), new Vector2(-5, -10), new Vector2(-5, 10), new Vector2(5, 10), new Vector2(5, -10), new Vector2(10, -10), new Vector2(10, 10)]
        }

        
    }


    onMouseOver(){
        //console.log("mouse over pause button")
        
        this.button.transform.scale = new Vector2(2.5, 2.5)
        this.symbolOne.transform.scale = new Vector2(1.2, 1.2)
        this.symbolTwo.transform.scale = new Vector2(1.2, 1.2)

        if (Input.mouseButtonsDownThisFrame.includes(0)) {
            console.log("pause button clicked")
            
            if (!this.isPaused) {

                const greyOut = instantiate(new GreyOut(), new Vector2(0, 0))

                // const greyOut = instantiate(new RectGameObject(), new Vector2(0, 0))
                // greyOut.addComponent(new Polygon(), { fillStyle: "#000000", points: Assets.square })
                // greyOut.addComponent(new RectTransform())
                greyOut.transform.anchorMin = new Vector2(0, 0)
                greyOut.transform.anchorMax = new Vector2(1, 1)
                greyOut.transform.offsetUpperLeft = new Vector2(-5, -10)
                greyOut.transform.offsetLowerRight = new Vector2(5, 10)
                greyOut.transform.useLetterBoxing = true
            }
            else {
                const greyOut = GameObjects.find("GreyOut") 
                greyOut.destroy()
            }
            //console.log(greyOut.transform.position)

            this.isPaused = !this.isPaused
            
        }

    }
}