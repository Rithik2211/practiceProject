function numberOfPizzas(orders) {
    let total = 0
    orders.forEach(element => {
        total += element.pizzas
    });
    return total
}
const orders = [{ pizzas: 3, type: 0 }]
console.log(numberOfPizzas(orders))