class Globals{


    static money = 100

    static moneyLabel = "  = " + this.money

    static playerItems = ["Empty", "Empty", "Empty", "Empty", "Empty",
                        "Empty", "Empty", "Empty", "Empty", "Empty",
                        "Empty", "Empty", "Empty", "Empty", "Empty",
                        "Empty", "Empty", "Empty", "Empty", "Empty", ]




    static currentItem = 0


    static choiceOnScreen = []

    static starterToppings = [new Turkey(), new Lettuce(), new Tomato(), new Ham(), new Cheese()]


    static starterToppingsString = ["Turkey", "Lettuce", "Tomato", "Ham", "Cheese"]


    static spinItems = []


    static toppingsInstantiate = {
    "Empty":   () => new Empty(),
    "Turkey":  () => new Turkey(),
    "Lettuce": () => new Lettuce(),
    "Tomato":  () => new Tomato(),
    "Ham":     () => new Ham(),
    "Cheese":  () => new Cheese()
}

    

    static starterToppingCost = [10, 10, 10, 10, 10]

    static starterToppingDescription = ["Turkey:¢10. ¢5 per spin. Turkey Bacon Ranch: If adjacent to bacon AND ranch, gain ¢55.",
         "Lettuce:¢10. ¢5 per spin.",
         "Tomato: ¢10. ¢5 per spin. BLT: If adjacent to bacon AND lettuce, gain ¢35.",
          "Ham: ¢10. ¢5 per spin. Porky Pig: + ¢15 per adjacent pork item",
           "Cheese: ¢10. Cheese makes everything better: +¢5 per adjacent item."]





    
}