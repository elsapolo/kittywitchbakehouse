
enum PizzaType {
    MARGARITA = "MARGARITA",
    VEGETARIAN = "VEGETARIAN",
    ITALIAN = "ITALIAN",
}

interface Pizza {
    type: PizzaType,
    notes: string
}

interface Order { 
    name: string,
    quantity: number,
    pizzas: Array<Pizza>
}

interface Slot {
    time: number,
    available: number,
    orders: Array<Order>
}


const slots: Array<Slot> = [];

