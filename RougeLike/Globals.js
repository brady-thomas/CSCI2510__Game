class Globals{

    static week = 0

    static day = 0


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



    static spinItems = []


    static toppingsInstantiate = {
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

    static currentToppingsDescription = ["Turkey:¢10. ¢5 per spin. Turkey Bacon Ranch: If adjacent to bacon AND ranch, gain ¢55.",
         "Lettuce:¢10. ¢5 per spin.",
         "Tomato: ¢10. ¢5 per spin. BLT: If adjacent to bacon AND lettuce, gain ¢35.",
          "Ham: ¢10. ¢5 per spin. Porky Pig: + ¢15 per adjacent pork item",
           "Cheese: ¢10. Cheese makes everything better: +¢5 per adjacent item."]





    
}