const names = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

names.forEach(name => {
  console.log(`Привет, ${name}`);
});


const numbers = [1, 2, 3, 4, 5];

const multipliedNumbers = numbers.map(number => {
  return number * 10;
});

console.log(multipliedNumbers);


const numbers = [5, 12, 8, 130, 44];

const filteredNumbers = numbers.filter(number => {
  return number > 10;
});

console.log(filteredNumbers);


const people = [
  {name: 'Иван', age: 23},
  {name: 'Мария', age: 18},
  {name: 'Алексей', age: 32},
  {name: 'Ольга', age: 24},
  {name: 'Сергей', age: 17},
  {name: 'Анна', age: 21}
];

const filteredPeople = people.filter(person => {
  return person.age > 18;
});

const formattedPeople = filteredPeople.map(person => {
  return `${person.name} (${person.age} лет)`;
});

console.log(formattedPeople);


const sales = [
  {product: 'Телефон', price: 50000, quantity: 1},
  {product: 'Чехол', price: 1500, quantity: 2},
  {product: 'Зарядное устройство', price: 2500, quantity: 1}
];

const totalCost = sales.reduce((accumulator, sale) => {
  return accumulator + (sale.price * sale.quantity);
}, 0);

console.log(`Общая стоимость продаж: ${totalCost}`);