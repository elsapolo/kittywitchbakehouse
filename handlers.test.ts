import { createOrder, PizzaType, Pizza, Order, Time, getOrders, cutBackOrders } from './kittywitchbakehouse';

const TEST_PIZZA: Pizza = {
    type: PizzaType.MARGARITA,
}

const TEST_ORDER: Order = {
    name: "Elsa",
    pizzas: [TEST_PIZZA],
    timeSlot: Time.five30,

}



describe("Pizza ordering happy path", () => {
    beforeEach(()=>{
        cutBackOrders();
    });

    it("Create order", ()=>{
        const order = createOrder(TEST_ORDER);
        const orders = getOrders();
        expect(orders.length).toBe(1);
    });
});
