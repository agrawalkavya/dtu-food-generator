const foodData = {
  "Udupi": ["Tea", "Hot coffee", "Cold coffee", "Banana shake", "Mango shake", "Oreo shake", "Lassi", "Cold drinks", "Ice cream", "Samosa", "Bread Pakoda", "Veg Sandwich", "Burger", "Grilled Sandwich", "Maggi", "Chole bhature", "Aloo Puri", "Vada Sambar", "Idli Sambar", "Masala dosa", "Paneer Dosa", "Plain Dosa", "Chole chawal", "Rajma Chawal", "Uttapam", "Pav bhaji", "Chowmein", "Spring roll", "Chilli potato", "Chilli paneer", "French fries", "Manchurian", "Aloo Paratha", "Aloo Pyaz", "Paneer Paratha"],
  "Bistro": ["Ice mocha coffee", "Cold coffee", "Iced Vietnamese Coffee", "Hazelnut Cold Coffee", "Caramel Frappe Coffee", "Irish Frappe Coffee", "Nutella Frappe Coffee", "Tiramisu frappe Coffee", "Brownie Frappe Coffee", "Cappucino Coffee", "Mocha coffee", "White Mocha coffee", "Hazelnut coffee", "Irish Coffee", "Carmelo Coffee", "Classic Mocha Coffee", "Tiramisu Coffee", "Classic Mint Mojito", "Orange mojito", "Peach mojito", "Green Apple Mojito", "Strawberry mojito", "Watermelon mojito", "Ice tea (lemon/peach/watermelon/strawberry)", "Fruit beer", "Lime soda", "Blue lagoon", "Hot chocolate fudge", "Brownie fudge", "Hot brownie", "brownie with ice cream", "Hot chocolate", "Belgium hot chocolate", "Oreo shake", "Kitkat shake", "Brownie Cookie shake", "Ferrero rocher shake", "Nutella Crunch Shake", "Avacado shake", "Vanilla shake", "Chocolate shake", "Strawberry shake", "Butter scotch shake", "Mango shake", "Coconut shake", "Black currant shake", "Baked Nachos", "Garlic Toast", "Veg Burger", "Paneer burger", "Cheese pizza", "Veg Pizza", "Cheese n Corn Pizza", "Paneer Makhni pizza", "Salted Fries", "Peri peri fries", "Cheesy fries", "Cheese baked fries", "Veg grilled sandwich", "Cheese n corn sandwich", "Paneer makhni sandwich"],
  "HIMS": ["Maggi", "Paneer Roll", "Sandwich", "Tea"],
  "DelTech Cafe": ["Rajma Chawal", "Lassi", "Spring Roll"],
  "HPMC": ["Idli", "Dosa", "Vada", "Sambar"],
  "Amul": ["Thali", "Noodles", "Lemonade"],
  "Dosa Plaza": ["Pav Bhaji", "Pani Puri", "Chai"],
  "Dazzledine": ["Tacos", "Ice Cream", "Wrap", "Milkshake"],
  "KitKat Zone": ["Tacos", "Ice Cream", "Wrap", "Milkshake"],
  "Nescafe": ["Tacos", "Ice Cream", "Wrap", "Milkshake"],
  "Raydee Cafe": ["Tacos", "Ice Cream"]
};

function getRandomFood() {
  const places = Object.keys(foodData);
  const randomPlace = places[Math.floor(Math.random() * places.length)];
  const foods = foodData[randomPlace];
  const randomFood = foods[Math.floor(Math.random() * foods.length)];
  return { place: randomPlace, food: randomFood };
}

function suggestFood() {
  const suggestion = getRandomFood();
  const resultElement = document.getElementById("result");
  resultElement.textContent = `How about "${suggestion.food}" from ${suggestion.place}?`;
}

document.getElementById("generateButton").addEventListener("click", suggestFood);
