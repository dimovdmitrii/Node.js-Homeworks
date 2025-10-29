// Task 1

// function calculateTotal(
//   price: number,
//   quantity: number,
//   discount: number = 0
// ): number {
//   const total = price * quantity * (1 - discount);
//   return total;
// }
// console.log(calculateTotal(100, 5, 0.1));

// Task 2

// let id: string | number;

// function displayId(id: string | number): string | number {

//   return typeof id === "string" ? id.toUpperCase() : id * 10;
// }

// console.log(displayId("Hello string!"));
// console.log(displayId(9));

// Task 3

// type OrderStatus = "pending" | "shipped" | "delivered";

// interface Order {
//   orderId: string;
//   amount: number;
//   status: OrderStatus;
// }

// const orders: Order[] = [
//   {
//     orderId: "1",
//     amount: 23,
//     status: "pending",
//   },
//   {
//     orderId: "2",
//     amount: 15,
//     status: "shipped",
//   },
//   {
//     orderId: "3",
//     amount: 34,
//     status: "delivered",
//   },
// ];

// function filterOrdersByStatus(obj: Order[], status: OrderStatus): Order[] {
//   return orders.filter((obj) => obj.status === status);
// }
// console.log(filterOrdersByStatus(orders, "shipped"));

// Task 4

// type ProductInfo = [string, number, number];

// interface Inventory {
//   [productName: string]: number;
// }

// const productInfo: ProductInfo = ["car", 2100, 4];

// const inventory: Inventory = {
//   bus: 6,
//   bike: 90,
//   car: 10,
// };

// const updateStock = (inventory: Inventory, info: ProductInfo): Inventory => {
//   const [productName, , quantityChange] = info;

//   inventory[productName] = (inventory[productName] || 0) + quantityChange;

//   return inventory;
// };
// console.log(updateStock(inventory, productInfo));
