class MainScene extends Scene{
  constructor(){
    super("white")
    this.instantiate(new SquareGameObject(), new Vector2(0,0), 0)

    const uiButton =  this.instantiate(new UIButton())

    uiButton.transform.anchorMin = new Vector2(.5, .5)
    uiButton.transform.anchorMax = new Vector2(.5, .5)
    uiButton.transform.offsetUpperLeft = new Vector2(-50,-50)
    uiButton.transform.offsetLowerRight = new Vector2(50,50)

   
  }
}
