class Level13 extends Scene{
    constructor(){
        super()
        
        this.instantiate(new Level12ControllerGameObject())
        this.instantiate(new WinCheckGameObject(), new Vector2(-1000, -1000))


        
        this.instantiate(new PlatformGameObject(), new Vector2(-500,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(500,250))


        this.instantiate(new PlatformGameObject(), new Vector2(0,150), Math.PI / 2)


        this.instantiate(new SpamGameObject(), new Vector2(700, 0))


        this.instantiate(new GoodPlatformGameObject(), new Vector2(550, 250))

    }
}
