class Globals{

    

    static day = 0

    static week = Globals.day / 7



    static gastaLetters = [
        GastaOne, GastaTwo
    ]

    static gastaFees = [200, 750, 2000, 5000, 15000, 50000]


    static money = 100

    

    static playerItems = ["Empty", "Empty", "Empty", "Empty", "Empty",
                        "Empty", "Empty", "Empty", "Empty", "Empty",
                        "Empty", "Empty", "Empty", "Empty", "Empty",
                        "Empty", "Empty", "Empty", "Empty", "Empty", ]


    static inventoryDict = {}




    static currentItem = 0


    static choiceOnScreen = []

    static currentToppings = [new Turkey(), new Lettuce(), new Tomato(), new Ham(), new Cheese()]


    static currentToppingsString = ["Turkey", "Lettuce", "Tomato", "Ham", "Cheese"]


    static unCommonToppings = [new Bacon(), new Ranch(), new Mustard(), new Salami()]

    static unCommonToppingsString = ["Bacon", "Ranch", "Mustard", "Salami"]

    static uncommonToppingCost = 15

    static spinItems = []


    static toppingsFactory = {
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

    

    static currentToppingsCost = {"Turkey": 10, "Lettuce": 10, "Tomato": 10, "Ham": 10, "Cheese": 10}

    static descriptionsDict = {
        "Turkey": "Turkey:¢10. ¢5 per spin. Turkey Bacon Ranch: If adjacent to bacon AND ranch, gain ¢55.",
        "Lettuce": "Lettuce:¢10. ¢5 per spin.",
        "Tomato": "Tomato:¢10. ¢5 per spin. BLT: If adjacent to bacon AND lettuce, gain ¢35.",
        "Ham": "Ham:¢10.  ¢0 per spin. Porky Pig: + ¢10 per adjacent pork item",
        "Cheese": "Cheese:¢10. ¢0 per spin. Cheese makes everything better: +¢5 per adjacent item.",
        "Bacon": "Bacon:¢15. ¢5 per spin.",
        "Ranch": "Ranch:¢15. ¢5 per spin.",
        "Mustard": "Mustard:¢15. ¢10 per spin.",
        "Salami": "Salami:¢15. ¢2 per spin. Salami Tsunami: +¢2 for every Salami"
        
    }





    
}