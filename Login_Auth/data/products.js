const baseProducts = [
  { name: "Laptop", price: 60000, img: "laptop" },
  { name: "Headphones", price: 2000, img: "headphones" },
  { name: "Smart Watch", price: 5000, img: "smartwatch" },
  { name: "Gaming Mouse", price: 1500, img: "mouse" },
  { name: "Bluetooth Speaker", price: 3000, img: "speaker" },
  { name: "Mechanical Keyboard", price: 4500, img: "keyboard" },
  { name: "4K Monitor", price: 25000, img: "monitor" },
  { name: "Tablet", price: 20000, img: "tablet" },
  { name: "Wireless Earbuds", price: 3500, img: "earbuds" },
  { name: "External SSD", price: 7000, img: "ssd" },
];

let id = 1;

export const products = Array.from({ length: 100 }).map((_, index) => {
  const item = baseProducts[index % baseProducts.length];

  const priceVariation = Math.floor(Math.random() * 5000);

  const price = item.price + priceVariation;

  const offer = Math.random() > 0.5
    ? price - Math.floor(price * 0.15)
    : null;

  return {
    id: id++,
    name: `${item.name} ${index + 1}`,
    price: price,
    offer: offer,
    image: `https://picsum.photos/seed/${index}/400/400`,
    description: `High quality ${item.name.toLowerCase()}`
  };
});