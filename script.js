const foodData = {
  "Udupi": ["Tea", "Hot coffee", "Cold coffee", "Banana shake", "Mango shake", "Oreo shake", "Lassi", "Cold drinks", "Ice cream", "Samosa", "Bread Pakoda", "Veg Sandwich", "Burger", "Grilled Sandwich", "Maggi", "Chole bhature", "Aloo Puri", "Vada Sambar", "Idli Sambar", "Masala dosa", "Paneer Dosa", "Plain Dosa", "Chole chawal", "Rajma Chawal", "Uttapam", "Pav bhaji", "Chowmein", "Spring roll", "Chilli potato", "Chilli paneer", "French fries", "Manchurian", "Aloo Paratha", "Aloo Pyaz", "Paneer Paratha"],
  "Bistro": ["Burger", "Pizza", "French Fries", "Cold Coffee"],
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
