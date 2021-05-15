const PIZZAS_IN_SLOT = 6;


// const PizzaType = {
//     MARGARITA: "MARGARITA",
//     VEGETARIAN: "VEGETARIAN",
//     ITALIAN: "ITALIAN",
// }

// const Time = {
//     five30: 530,
//     six: 600,
//     six30: 630
// }

// export type Pizza = {
//     type: PizzaType,
//     notes?: string
// }

// export interface Order { 
//     name: string,
//     pizzas: Array<Pizza>,
//     timeSlot: Time
// }


export var orders = [];

export function createOrder(name, pizzas, timeSlot){
    if(!pizzaQuantityAvailable(pizzas, timeslot)){
        throw("why so many pizzaH")
    }
    const order = {
        name,
        pizzas,
        timeSlot,
    }
    orders.push(order);
    return order
}

function pizzaQuantityAvailable(pizzas, timeSlot) {
    const slotPizzas = orders.reduce((accumulator , ord)=>{
        if (ord.timeSlot === timeSlot){
            return accumulator + pizzas.length
        }
        return 0
    }, 0);

    if ((PIZZAS_IN_SLOT - slotPizzas) < pizzas.length){
        return false;
    }

    return true;
}

export function getOrders(){
    return orders
}
