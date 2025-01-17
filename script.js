let recipes = [
  {
    name: "Saag Aloo",
    ingredients: [
      "chilli",
      "mango chutney(20g)",
      "potato (300g)",
      "spinach(120g)",
      "tomato paste(16g)",
      "solid creamed coconut(25g)",
      "peas(160g)",
      "ginger and garlic paste(15g)",
      "turmeric(0.5tsp)",
      "veg stock(5.5g)",
      "Pittas(2)",
      "cumin seeds(1tsp)",
      "Curry powder(0.5tbsp)",
    ],
  },
  {
    name: "Black bean & sweet potato tortilla pockets",
    ingredients: [
      "Leaf salad(50g)",
      "red win vinegar(15ml)",
      "Sweet potato",
      "tomato paste(32g)",
      "Black beans(185g)",
      "Paprika-ground(2tsp)",
      "veg stock(11g)",
      "cumin-ground(1tsp)",
      "tortillas(6)",
      "mayo",
    ],
  },
  {
    name: "Sticky onion burger",
    ingredients: [
      "Onion",
      "tomato",
      "lettuce",
      "potato(3)",
      "ketchup",
      "cheese slices",
      "burger patties",
      "relish(15ml)",
      "onion marmalade(20g)",
      "Burger buns",
    ],
  },
  {
    name: "Chick'n Dopiaza",
    ingredients: [
      "Onion(red)",
      "onion(brown)",
      "tomato",
      "tomato paste(32g)",
      "crispy onions(15g)",
      "indian bread of choice",
      "Veg stock(11g)",
      "Cumin-ground(1tsp)",
      "chick'n(160g)",
      "cultured coconut(80g)",
      "corriander-ground(1tsp)",
      "curry powder(1tbsp)",
    ],
  },
  {
    name: "Cauliflower korma",
    ingredients: [
      "onion(brown)",
      "cauliflower",
      "garlic cloves(2)",
      "flaked almonds(15g)",
      "cloves(1g)",
      "solid creamed coconut(50g)",
      "ginger paste(15g)",
      "basmati rice(130g)",
      "turmeric(0.5g) veg stock(11g)",
      "cumin-ground(1tsp)",
      "curry powder(1 tbsp)",
    ],
  },
  {
    name: "Roasted cauliflower curry bake",
    ingredients: [
      "onions(2 red)",
      "cauliflower",
      "cashew nuts(25g)",
      "mango chutney(20g)",
      "spinach(80g)",
      "potato(3)",
      "solid creamed coconut(50g)",
      "turmeric(1tsp)",
      "veg stock(11g)",
      "fenugreek-ground(0.5tsp)",
      "curry powder(1tbsp)",
    ],
  },
  {
    name: "Cocunut curry dal",
    ingredients: [
      "onion(brown)",
      "pepper-red",
      "solid creamed coconut(25g)",
      "lentils(370g)",
      "ginger & garlic paste(15g)",
      "green beans(160g)",
      "veg stock(11g)",
      "rice(130g)",
      "finely chopped tomotoes",
      "curry powder(1 tbsp)",
    ],
  },
  {
    name: "Butternut & cashew saag",
    ingredients: [
      "onion(brown)",
      "sultanas(30g)",
      "garlic cloves(2)",
      "cashews(25g)",
      "corriander & mint(10g)",
      "spinach(120g)",
      "tomato paste(32g)",
      "solid creamed coconut(25g)",
      "peas(160g)",
      "basmati rice(130g)",
      "ginger-fresh(15g)",
      "butternut(160g)",
      "veg stock(11g)",
      "curry powder(1 tbsp)",
    ],
  },
  {
    name: "Black bean & Corn Tacos",
    ingredients: [
      "Onion(red)",
      "Onion(brown)",
      "chilli",
      "tomato",
      "lime",
      "corriander(5g)",
      "tomato paste(16g)",
      "sweetcorn(150g)",
      "black beans(185g)",
      "chipotle paste(20g)",
      "vegetable stock(11g)",
      "tortillas(6)",
      "Guac(100g)",
    ],
  },
  {
    name: "Oven baked coconut veg curry",
    ingredients: [
      "cherry tomatoes(125g)",
      "corriander & mint(10g)",
      "sweet potato",
      "tomato paste(32g)",
      "peas(160g)",
      "ginger paste(15g)",
      "turmeric(1 tsp)",
      "green beans(160g)",
      "veg stock(11g)",
      "pittas(2)",
      "cultured coconut(80g)",
      "curry powder(1tbsp)",
    ],
  },
  {
    name: "Sweet potato & chickpea stew",
    ingredients: [
      "onion(brown)",
      "sultans(30g)",
      "garlic cloves(2)",
      "sweet potato",
      "chickpeas(185g)",
      "couscous(120g)",
      "veg stock(11g)",
      "cumin-ground(1tbsp)",
      "finely chopped tomotoes(200g)",
    ],
  },
  {
    name: "Tofu pakoras with fries",
    ingredients: [
      "mango chutney(20g)",
      "corriander & mint(10g)",
      "tofu(280g)",
      "cider vinegar(15ml)",
      "chilli",
      "potato(3)",
      "ginger-fresh(15g)",
      "turmeric(0.5tsp)",
      "veg stock(11g)",
      "mayo(60ml)",
      "coleslaw(160g)",
      "curry powder(0.5tbsp)",
      "cornflour(8tbsp)",
    ],
  },
  {
    name: "Sweet potato & cashew coconut curry",
    ingredients: [
      "onion(red)",
      "gralic cloves(2)",
      "cashews(25g)",
      "green beans(80g)",
      "ginger paste(15g)",
      "veg stock(11g)",
      "thai curry paste(40g)",
      "rice(130g)",
      "cultured coconut(80g)",
      "sweet potato-diced(160g)",
    ],
  },
  {
    name: "spicy noodle soup with Korean-style tofu",
    ingredients: [
      "spring onion",
      "tofu(280g)",
      "tamari soy sauce(15ml)",
      "rice vinegar(15ml)",
      "toasted sesame seeds(5g)",
      "rice noodles(200g)",
      "veg stock(5.5g)",
      "gochujang paste(30g)",
      "coleslaw(160g)",
      "cornflour(4tbsp)",
      "Pho broth paste(25g)",
      "garlic clove(1)",
    ],
  },
  {
    name: "Hoisan noodle stir fry",
    ingredients: [
      "onion(brown)",
      "pepper-red",
      "broccoli",
      "garlic clove(1)",
      "spring onion(1)",
      "cashews(25g)",
      "hoisan sauce(40g)",
      "soy sauce(15ml)",
      "chilli flakes(0.5tsp)",
      "ginger-fresh(15g)",
      "udon noodles(400g)",
      "toasted sesame oil(10ml)",
      "cornflour(1tbsp)",
    ],
  },
  {
    name: "Tofu with yellow thai curry",
    ingredients: [
      "courgette(1)",
      "cherry tomotoes(125g)",
      "curry powder(0.5tbsp)",
      "corriander(5g)",
      "tofu(280g)",
      "tamari soy sauce(15ml)",
      "tomato paste(16g)",
      "solid creamed coconut(25g)",
      "turmeric(0.5tsp)",
      "veg stock(5.5g)",
      "red thai curry paste(20g)",
      "rice-cooked(280g)",
      "garam masala(1tbsp)",
      "cornflour(1tbsp)",
    ],
  },
  {
    name: "Thai style coconut udon noodles",
    ingredients: [
      "onion(red)",
      "pepper-yellow",
      "lime",
      "garlic cloves(2)",
      "soy sauce(8ml)",
      "roasted peanuts25g)",
      "green beans(80g)",
      "rice wine(15ml)",
      "chestnut mushrooms(80g)",
      "solid creamed coconut(25g)",
      "ginger-fresh(15g)",
      "udon noodles(400g)",
      "veg stock(5.5g)",
      "sriraca(8ml)",
    ],
  },
  {
    name: "Korean mince bulgogi",
    ingredients: [
      "garlic clove(1)",
      "spring onion",
      "soy sauce(30ml)",
      "ginger-fresh(15g)",
      "green beans(160g)",
      "sesame oil(20ml)",
      "rice(130g)",
      "mince(250g)",
    ],
  },
  {
    name: "Lime tofu with sticky ginger",
    ingredients: [
      "onion(red)",
      "lime",
      "garlic clove(2)",
      "spinach(120g)",
      "tofu(280g)",
      "agave(25g)",
      "soy sauce(30ml)",
      "black sesame seeds(5g)",
      "rice(150g)",
      "ginger-fresh(15g)",
      "veg stock(5.5g)",
      "cornflour(1tbsp)",
    ],
  },
  {
    name: "korean style bulgogi rice salad",
    ingredients: [
      "lettuce",
      "mangetout(80g)",
      "tofu(280g)",
      "tamari sauce(15ml)",
      "sesame seeds(5g)",
      "ginger & garlic paste(15g)",
      "gochugang paste(30g)",
      "rice(130g)",
      "cornflour(1tbsp)",
    ],
  },
  {
    name: "Smoky tofu & herby rice bowl",
    ingredients: [
      "cucumber(half)",
      "rocket(50g)",
      "coriander & mint(10g)",
      "carrot(1)",
      "tofu(280g)",
      "tamari soy sauce(15ml)",
      "cider vinegar(30ml)",
      "harissa paste(20g)",
      "paprika-ground(2tsp)",
      "mayo(30ml)",
      "rice-cooked(280g)",
      "cornflour(1 tbsp)",
    ],
  },
  {
    name: "Hoisin mince & mushroom bowl",
    ingredients: [
      "chilli",
      "lettuce",
      "hoisin sauce(40g)",
      "soy sauce(15ml)",
      "chestnut mushrooms(80g)",
      "sesame seeds(5g)",
      "crispy onions(15g)",
      "ginger & garlic paste",
      "mince(200g)",
      "rice-cooked(280g)",
    ],
  },
  {
    name: "Sichuan-style spicy black bean tofu",
    ingredients: [
      "onion(brown)",
      "garlic clove(1)",
      "soy sauce(8ml)",
      "spring onion(1)",
      "spinach(80g)",
      "tofu(280g)",
      "chestnut mushrooms(160g)",
      "chilli flakes(0.5tsp)",
      "ginger-fresh(15g)",
      "black bean paste(40g)",
      "toasted sesame oil(10ml)",
      "rice(130g)",
      "cornflour(1tbsp)",
      "sriracha(8ml)",
    ],
  },
  {
    name: "sweet chilli tofu with veg rice",
    ingredients: [
      "garlic clove(1)",
      "carrots(2)",
      "tofu(280g)",
      "agave nector(25g)",
      "soy sauce(30ml)",
      "sesame seeds(5g)",
      "toasted sesame seeds(5g)",
      "peas(160g)",
      "rice(130g)",
      "chilli relish(40g)",
      "cornflour(1tbsp)",
    ],
  },
  {
    name: "Tofu burger & chips",
    ingredients: [
      "spring onion(2)",
      "carrot(1)",
      "spiced chutney(20g)",
      "tofu(280g)",
      "hoisin sauce(20g)",
      "soy sauce(15ml)",
      "rice vinegar(15ml)",
      "toasted sesame seeds(5g)",
      "potato(3)",
      "cabbage-shredded-red(150g)",
      "cornflour(4tbsp)",
      "brioche buns(2)",
    ],
  },
  {
    name: "Chilli bean cheeseburger",
    ingredients: [
      "chilli",
      "lettuce",
      "red wine vineger(15ml)",
      "tomato paste(16g)",
      "potato(3)",
      "cheese slice",
      "burger patties",
      "black beans",
      "paprika-ground(1tsp)",
      "burger buns",
      "cumin-ground(1tsp)",
    ],
  },
  {
    name: "Paella with crispy tofu",
    ingredients: [
      "lemon",
      "onion(brown)",
      "pepper(yellow)",
      "saffron(pinch)",
      "garlic cloves(3)",
      "tofu(280g)",
      "soy sauce(15ml)",
      "tomato paste(32g)",
      "peas(160g)",
      "paprika-ground(2tsp)",
      "veg stock(11g)",
      "cumin(1tsp)",
      "paella rice(130g)",
    ],
  },
  {
    name: "Lentil enchiladas with cashew crema",
    ingredients: [
      "onion(red)",
      "pepper(green)",
      "lime",
      "garlic cloves(2)",
      "corriander(20g)",
      "cherry tomatoes(250g)",
      "cashews(25g)",
      "soy sauce(15ml)",
      "tomato paste(32g)",
      "chilli flakes",
      "paprika-ground(2tsp)",
      "cumin(1tsp)",
      "tortillas(6)",
      "lentils(370g)",
    ],
  },
  {
    name: "Marinara Tacos",
    ingredients: [
      "Onion(red)",
      "garlic cloves(2)",
      "balsamic vinegar(15ml)",
      "rocket(20g)",
      "tomato paste(32g)",
      "burger patties",
      "bread crumbs",
      "basil-dired",
      "tortillas(6)",
    ],
  },
  {
    name: "Chilli con tofu and crispy tortillas",
    ingredients: [
      "soy sauce(8ml)",
      "corriander",
      "red wine vinegar(15ml)",
      "tofu(280g)",
      "avo",
      "black beans(185)",
      "chipotle paste(20g)",
      "chilli flakes",
      "paprika-ground(2tsp)",
      "veg stock(5.5g)",
      "cumin-ground(2tsp)",
      "Nachos",
      "finely chopped tomatoes(200g)",
    ],
  },
  {
    name: "Oven baked chilli jacket potatoes",
    ingredients: [
      "garlic cloves(3)",
      "corriander",
      "vinegar(15ml)",
      "chilli",
      "potato(4)",
      "black beans(185g)",
      "butter beans(185g)",
      "chipotle paste(20g)",
      "paprika(2tsp)",
      "veg stock(11g)",
      "cumin seeds(1tsp)",
      "kidney beans(390g)",
      "finely chopped tomatoes(200g)",
    ],
  },
  {
    name: "Beany chilli salsa and rice",
    ingredients: [
      "onion(red)",
      "pepper(red)",
      "lime",
      "garlic clove",
      "corriander",
      "tomato paste(32g)",
      "chipotle paste(20g)",
      "paprika(2tsp)",
      "veg stock(11g)",
      "cumin-ground(2tsp)",
      "rice(130g)",
      "guac",
      "kidney beans(390g)",
    ],
  },
  {
    name: "Nachos",
    ingredients: [
      "tortillas chips",
      "salsa",
      "cheese",
      "guac",
      "soy mince",
      "onion",
      "cucumber",
      "tomato",
    ],
  },
  {
    name: "Lentil risotto",
    ingredients: [
      "onion",
      "pepper(red)",
      "garlic cloves(2)",
      "rocket",
      "vinegar(15ml)",
      "lentils(370g)",
      "oregano-dried(1tsp)",
      "bread crumbs",
      "veg stock(11g)",
      "creamy single oat(250ml)",
      "finely chopped tomatoes(200g)",
    ],
  },
  {
    name: "Gnocchi",
    ingredients: [
      "onion",
      "gnocchi",
      "pepper",
      "spinach",
      "nooch",
      "soy chunks",
      "pesto",
    ],
  },
  {
    name: "Butternut grain bowl",
    ingredients: [
      "onion(red)",
      "butternut(320g)",
      "punkin seeds(30g)",
      "tender stem broccoli(80g)",
      "kale(80g)",
      "agave(25g)",
      "vinegar(15ml)",
      "tahini(15g)",
      "bulgar wheat(75g)",
      "chilli flakes",
      "oregano-dried(1tsp)",
      "white miso paste(30g)",
      "toasted sesame oil(10ml)",
      "lentils(390g)",
    ],
  },
  {
    name: "chilli roasted squash",
    ingredients: [
      "onion",
      "lime",
      "basil(10g)",
      "roasted peanutes(50g)",
      "rocket(50g)",
      "corriander & mint",
      "bulgar wheat(130g)",
      "soy sauce(15ml)",
      "vinegar(15ml)",
      "chickpeas(185g)",
      "chilli flakes",
      "ginger-fresh(15g)",
      "butternut(320g)",
      "toaste sesame oil(20ml)",
    ],
  },
];

function getRandomRecipes(numRecipes) {
  const shuffledRecipes = recipes.sort(() => 0.5 - Math.random());
  return shuffledRecipes.slice(0, numRecipes);
}

// Number of recipes wanted for the week
//
//
//

function generateShoppingListAndDisplayRecipes() {
  const numRecipesToSelect = document.querySelector(".num-input").value; // Number of recipes to select
  const selectedRecipes = getRandomRecipes(numRecipesToSelect);

  // Define the days of the week
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // Save the selected recipes to local storage
  localStorage.setItem("selectedRecipes", JSON.stringify(selectedRecipes));

  // Display selected recipes with corresponding days of the week
  const recipesForWeekContainer = document.getElementById("recipeNamesForWeek");
  recipesForWeekContainer.innerHTML = "<h2>Recipes for the Week</h2>";
  const ul = document.createElement("ul");
  selectedRecipes.forEach((recipe, index) => {
    const li = document.createElement("li");
    li.textContent = `${daysOfWeek[index]}: ${recipe.name}`;
    ul.appendChild(li);
  });
  recipesForWeekContainer.appendChild(ul);

  // Generate the shopping list based on the selected recipes
  const shoppingList = {};
  selectedRecipes.forEach((recipe) => {
    recipe.ingredients.forEach((ingredient) => {
      const uppercaseIngredient = ingredient.toUpperCase(); // Convert to uppercase
      if (shoppingList[uppercaseIngredient]) {
        shoppingList[uppercaseIngredient]++;
      } else {
        shoppingList[uppercaseIngredient] = 1;
      }
    });
  });

  // Save the shopping list to local storage
  localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

  // Display the shopping list in uppercase and alphabetical order
  displayShoppingList(shoppingList);
}

// Load the selected recipes and shopping list from local storage on page load
window.addEventListener("load", () => {
  const storedSelectedRecipes = localStorage.getItem("selectedRecipes");
  const storedShoppingList = localStorage.getItem("shoppingList");

  if (storedSelectedRecipes) {
    const parsedSelectedRecipes = JSON.parse(storedSelectedRecipes);
    displayRecipesForWeek(parsedSelectedRecipes);
  }

  if (storedShoppingList) {
    const parsedShoppingList = JSON.parse(storedShoppingList);
    displayShoppingList(parsedShoppingList);
  }
});

function displayRecipesForWeek(selectedRecipes) {
  const recipesForWeekContainer = document.getElementById("recipeNamesForWeek");
  recipesForWeekContainer.innerHTML = "<h2>Recipes for the Week</h2>";
  const ul = document.createElement("ul");
  const daysOfWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  selectedRecipes.forEach((recipe, index) => {
    const li = document.createElement("li");
    li.textContent = `${daysOfWeek[index]}: ${recipe.name}`;
    ul.appendChild(li);
  });
  recipesForWeekContainer.appendChild(ul);
}

function displayShoppingList(shoppingList) {
  // Sort the ingredients in alphabetical order
  const sortedIngredients = Object.keys(shoppingList).sort();

  // Display the shopping list in uppercase and alphabetical order
  const shoppingListContainer = document.getElementById("shoppingList");
  shoppingListContainer.innerHTML = "<h2>Shopping List</h2>";
  const ulShoppingList = document.createElement("ul");
  sortedIngredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = `${ingredient}: ${shoppingList[ingredient]}`;
    ulShoppingList.appendChild(li);
  });
  shoppingListContainer.appendChild(ulShoppingList);
}

const numInput = document.querySelector(".num-input");
numInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    generateShoppingListAndDisplayRecipes();
  }
});