import createValidator, { createDetailedValidator, registerType } from "typecheck.macro";

const PIZZAS_IN_SLOT = 6;

console.log(registerType);
console.log(createValidator);

const PizzaType = {
    MARGARITA: "MARGARITA",
    VEGETARIAN: "VEGETARIAN",
    ITALIAN: "ITALIAN",
}

const Time = {
    five30: 530,
    six: 600,
    six30: 630
}

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

export function createOrder(order){
    if(!pizzaQuantityAvailable(order)){
        throw("why so many pizzaH")
    }
    orders.push(order);
    return order
}

function pizzaQuantityAvailable(order) {
    const slotPizzas = orders.reduce((accumulator , ord)=>{
        if (ord.timeSlot === order.timeSlot){
            return accumulator + ord.pizzas.length
        }
        return 0
    }, 0);

    if (PIZZAS_IN_SLOT - slotPizzas < order.pizzas.length){
        return false;
    }

    return true;
}

export function getOrders(){
    return orders
}
