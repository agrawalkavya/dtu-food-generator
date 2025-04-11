const foodData = {
  "Canteen A": ["Chole Bhature", "Samosa", "Aloo Paratha", "Pasta", "Momos"],
  "Canteen B": ["Burger", "Pizza", "French Fries", "Cold Coffee"],
  "Canteen C": ["Maggi", "Paneer Roll", "Sandwich", "Tea"],
  "Canteen D": ["Rajma Chawal", "Lassi", "Spring Roll"],
  "Canteen E": ["Idli", "Dosa", "Vada", "Sambar"],
  "Canteen F": ["Thali", "Noodles", "Lemonade"],
  "Canteen G": ["Pav Bhaji", "Pani Puri", "Chai"],
  "Canteen H": ["Tacos", "Ice Cream", "Wrap", "Milkshake"]
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
