const FoodMenu = [
 {
    id: '1',
    name: 'Foods'
 },
 {
    id: '2',
    name: 'Drinks'
 },
 {
    id: '3',
    name: 'Snack'
 },
 {
    id: '4',
    name: 'Sauce'
 },
 {
    id: '5',
    name: 'Ice cream'
 },
 {
    id: '6',
    name: 'Sushi'
 },
 {
    id: '7',
    name: 'Soup'
 },
]

export const FoodCartItems = [
   {
      id: 1,
      name: 'Veggie tomato mix',
      price: 'N1,900',
      img: require('../../assets/images/bur1.png'),
      images: [require('../../assets/images/bur1.png'), require('../../assets/images/bur2.png')],
      category: 'Foods'
   },
   {
      id: 2,
      name: 'Egg and cucumber...',
      price: 'N1,900',
      img: require('../../assets/images/potato.png'),
      images: [require('../../assets/images/potato.png'), require('../../assets/images/pizza.png')],
      category: 'Snack'
   },
   {
      id: 3,
      name: 'Fried chicken m.',
      price: 'N2,100',
      img: require('../../assets/images/pizza.png'),
      images: [require('../../assets/images/potato.png'), require('../../assets/images/pizza.png')],
      category: 'Foods'
   },
   {
      id: 4,
      name: 'Moi-moi and ekpa.',
      price: 'N1,200',
      img: require('../../assets/images/fries.png'),
      images: [require('../../assets/images/potato.png'), require('../../assets/images/pizza.png')],
      category: 'Snack'
   },
   {
      id: 5,
      name: 'Soft Drink',
      price: 'N500',
      img: require('../../assets/images/blue.png'),
      images: [require('../../assets/images/potato.png'), require('../../assets/images/pizza.png')],
      category: 'Drinks'
   },
   {
      id: 6,
      name: 'Fresh Juice',
      price: 'N800',
      img: require('../../assets/images/orange.png'),
      images: [require('../../assets/images/potato.png'), require('../../assets/images/pizza.png')],
      category: 'Drinks'
   },
   {
      id: 7,
      name: 'Ketchup',
      price: 'N800',
      img: require('../../assets/images/sauce1.png'),
      images: [require('../../assets/images/potato.png'), require('../../assets/images/pizza.png')],
      category: 'Sauce'
   },
   {
      id: 8,
      name: 'Sauce',
      price: 'N800',
      img: require('../../assets/images/sauce2.png'),
      category: 'Sauce'
   },
   // Add more items with appropriate categories
]

export default FoodMenu;
