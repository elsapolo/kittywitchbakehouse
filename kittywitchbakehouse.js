const PIZZAS_IN_SLOT = 6;


// const PizzaType = {
//     MARGARITA: "MARGARITA",
//     VEGETARIAN: "VEGETARIAN",
//     ITALIAN: "ITALIAN",
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

var orders = [];

function createOrder(name, pizzas, timeSlot){
    if(!pizzaQuantityAvailable(pizzas, timeSlot)){
        //console.log("THIS SHOULD BE AN ERROR");
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
            //console.log(accumulator + pizzas.length)
            return accumulator + pizzas.length
        }
        return accumulator
    }, 0);
    console.log(slotPizzas)
    if ((PIZZAS_IN_SLOT - slotPizzas) < pizzas.length){
        return false;
    }

    return true;
}

function getOrders(){
    return orders
}


createOrder("Monty", ["pizza1", "pizza2", "pizza3"], "4:30");
console.log(orders);
createOrder("Elsa", ["pizza1", "pizza2"], "4:30");
console.log(orders);
createOrder("Oliver", ["pizza1", "pizza2"], "5:30");
console.log(orders)

console.log(pizzaQuantityAvailable(["pizza1", "pizza2"],'4:30'));
createOrder("Elsa2", ["pizza1", "pizza2"], "4:30");
console.log(orders)
