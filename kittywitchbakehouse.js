const PIZZAS_IN_SLOT = 6;
const SLOTS = ["4:30", "5:00", "5:30", "6:00", "6:30", "7:00", "7:30", "8:00"];
const PIZZA_TYPES = ["MARGARITA", "VEGETARIAN", "ITALIAN"];

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
    if(!isTimeSlot(timeSlot)){
        throw("oven isnt hot yet/anymore");
    }
    if(!arePizzas(pizzas)){
        throw("no karen, choritso on pizza is not an option");
    }
    if(!pizzaQuantityAvailable(pizzas, timeSlot)){
        //console.log("THIS SHOULD BE AN ERROR");
        throw("why so many pizzaH");
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
    const slotPizzas = orders
        .filter(isInTimeSlot(timeSlot))
        .map(getAmountOfPizzas)
        .reduce(sum, 0);
    if ((PIZZAS_IN_SLOT - slotPizzas) < pizzas.length){
        return false;
    }

    return true;
}

//Timeslot and pizza type validation
function isTimeSlot(timeSlot){
    return SLOTS.includes(timeSlot)
}

function arePizzas(pizzas){
    const validPizzaTypes = pizzas.map(getPizzaType).every(isPizzaType);
    return validPizzaTypes
}

function isPizzaType(pizzaType){
    return PIZZA_TYPES.includes(pizzaType)
}

function getPizzaType(pizza){
    return pizza.type
}

//pizza quantity validation
function isInTimeSlot(timeSlot){
    return (order) => order.timeSlot === timeSlot;
}

function getAmountOfPizzas(order){
    return order.pizzas.length
}

function sum(x , y){
    return x+y
}

// function getAvailablePizzas(){
    
// }

const validPizza = {
    type: "MARGARITA"
}
const invalidPizza = {
    type: "choriz0"
}
createOrder("Monty", [validPizza, validPizza, validPizza], "4:30");
console.log(orders);
createOrder("Elsa", [validPizza, validPizza], "4:30");
console.log(orders);
createOrder("Oliver", [validPizza, validPizza], "5:30");
console.log(orders)

//too many pizzas in one slot
try{
    createOrder("Elsa2", [validPizza, validPizza], "4:30");
}catch(error){
    console.log(error)
}

//wrong pizza type
try{
    createOrder("Elsa2", [invalidPizza, "pizza2"], "6:30");
}catch(error){
    console.log(error)
}

//wrong pizza time slot
try{
    createOrder("Elsa2", [validPizza], "2:00");
}catch(error){
    console.log(error)
}