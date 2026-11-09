class Level11 extends Scene{
    constructor(){
        super()
        
        this.instantiate(new Level11ControllerGameObject())
        this.instantiate(new WinCheckGameObject(), new Vector2(-1000, -1000))


        
        this.instantiate(new PlatformGameObject(), new Vector2(-500,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-575,-210), Math.PI / 2)
        this.instantiate(new PlatformGameObject(), new Vector2(-575,-150), Math.PI / 2)



        this.instantiate(new PlatformGameObject(), new Vector2(-300,250))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,250))
        this.instantiate(new PlatformGameObject(), new Vector2(100,250))

        

        this.instantiate(new PlatformGameObject(), new Vector2(100,-25))
        this.instantiate(new PlatformGameObject(), new Vector2(300,-25))
        this.instantiate(new PlatformGameObject(), new Vector2(500,-25))
        this.instantiate(new PlatformGameObject(), new Vector2(700,-25))
        this.instantiate(new PlatformGameObject(), new Vector2(900, -25))

        this.instantiate(new PlatformGameObject(), new Vector2(-500,-25))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,-25))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,-25))
       

        this.instantiate(new PlatformGameObject(), new Vector2(100,-320))
        this.instantiate(new PlatformGameObject(), new Vector2(300,-320))
        this.instantiate(new PlatformGameObject(), new Vector2(500,-320))
        this.instantiate(new PlatformGameObject(), new Vector2(900,-320))
        this.instantiate(new PlatformGameObject(), new Vector2(700,-320))
       
       
        this.instantiate(new PlatformGameObject(), new Vector2(-500,-320))
        this.instantiate(new PlatformGameObject(), new Vector2(-300,-320))
        this.instantiate(new PlatformGameObject(), new Vector2(-100,-320))
        


        this.instantiate(new LaserWallTurretGameObject(), new Vector2(300,-320))
        this.instantiate(new LaserWallTurretGameObject(), new Vector2(0,-320))
        this.instantiate(new LaserWallTurretGameObject(), new Vector2(-300,-320))

        this.instantiate(new LaserWallWarningGameObject(), new Vector2(300,-170), Math.PI /2)
        this.instantiate(new LaserWallWarningGameObject(), new Vector2(0,-170), Math.PI / 2)
        this.instantiate(new LaserWallWarningGameObject(), new Vector2(-300,-170), Math.PI / 2)


        this.instantiate(new TurretGameObject(), new Vector2(700, -100))


        this.instantiate(new GoodPlatformGameObject(), new Vector2(550, -25))


        this.instantiate(new TeleporterOneGameObject(), new Vector2(200, 250))
        this.instantiate(new TeleporterTwoGameObject(), new Vector2(-400, -320))

        



    }
}