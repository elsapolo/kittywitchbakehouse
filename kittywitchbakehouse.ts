import createValidator, { createDetailedValidator, registerType } from "typecheck.macro";

const PIZZAS_IN_SLOT = 6;

export enum PizzaType {
    MARGARITA = "MARGARITA",
    VEGETARIAN = "VEGETARIAN",
    ITALIAN = "ITALIAN",
}

export enum Time {
    five30 = 530,
    six = 600,
    six30 = 630
}

export interface Pizza {
    type: PizzaType,
    notes?: string
}
//registerType("Pizza");
//const isPizza = createValidator<Pizza>();


export interface Order { 
    name: string,
    pizzas: Array<Pizza>,
    timeSlot: Time
}
//registerType("Order");
//const isOrder = createValidator<Order>();


export var orders: Array<Order> = [];

export function createOrder(order:Order):Order{
    //if(!isOrder){
    //    throw("not an order");
    //}
    if(!pizzaQuantityAvailable(order)){
        throw("why so many pizzaH")
    }
    orders.push(order);
    return order
}

function pizzaQuantityAvailable(order: Order):boolean {
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

export function getOrders():Array<Order>{
    return orders
}

//TESTING STUFF??
export function cutBackOrders(){
    orders = [];
}
