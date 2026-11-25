class Globals{

    static boot(){

        Globals.day = 0

        Globals.week = Globals.day / 7



        Globals.gastaLetters = [
            GastaOne, GastaTwo
        ]

        Globals.gastaFees = [150, 350, 800, 2000, 5000, 10000]


        Globals.money = 100

        

        Globals.playerItems = ["Empty", "Empty", "Empty", "Empty", "Empty",
                            "Empty", "Empty", "Empty", "Empty", "Empty",
                            "Empty", "Empty", "Empty", "Empty", "Empty",
                            "Empty", "Empty", "Empty", "Empty", "Empty", ]


        Globals.inventoryDict = {}

         


        Globals.currentItem = 0


        Globals.choiceOnScreen = []

        Globals.currentToppings = [new Turkey(), new Lettuce(), new Tomato(), new Ham(), new Cheese()]


        Globals.currentToppingsString = ["Turkey", "Lettuce", "Tomato", "Ham", "Cheese"]


        Globals.unCommonToppings = [new Bacon(), new Ranch(), new Mustard(), new Salami()]

        Globals.unCommonToppingsString = ["Bacon", "Ranch", "Mustard", "Salami"]

        Globals.spinItems = []


        Globals.toppingsFactory = {
        "Empty":   () => new Empty(),
        "Turkey":  () => new Turkey(),
        "Lettuce": () => new Lettuce(),
        "Tomato":  () => new Tomato(),
        "Ham":     () => new Ham(),
        "Cheese":  () => new Cheese(),
        "Bacon":   () => new Bacon(),
        "Ranch":   () => new Ranch(),
        "Mustard": () => new Mustard(),
        "Salami":  () => new Salami()
        
    }

        

        Globals.currentToppingsCost = {"Turkey": 10, "Lettuce": 10, "Tomato": 10, "Ham": 10, "Cheese": 10, "Bacon": 15, "Ranch": 15, "Mustard": 15, "Salami": 15}

        Globals.descriptionsDict = {
            "Turkey": "Turkey:¢10. ¢5 per spin. Turkey Bacon Ranch: If adjacent to bacon AND ranch, gain ¢55.",
            "Lettuce": "Lettuce:¢10. ¢5 per spin.",
            "Tomato": "Tomato:¢10. ¢5 per spin. BLT: If adjacent to bacon AND lettuce, gain ¢35.",
            "Ham": "Ham:¢10.  ¢0 per spin. Porky Pig: + ¢10 per adjacent pork item",
            "Cheese": "Cheese:¢10. ¢0 per spin. Cheese makes everything better: +¢5 per adjacent item.",
            "Bacon": "Bacon:¢15. ¢5 per spin.",
            "Ranch": "Ranch:¢15. ¢5 per spin.",
            "Mustard": "Mustard:¢15. $0 per spin. Mustard on the Beat: 1.5x multiplier for adjacent items.",
            "Salami": "Salami:¢15. ¢2 per spin. Salami Tsunami: +¢2 for every Salami"
            
        }



    }   

    
}