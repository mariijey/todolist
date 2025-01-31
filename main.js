const foods = [
    { category: "breakfast", name: "Pancakes", price: 5.99 },
    { category: "breakfast", name: "Eggs and Bacon", price: 6.99 },
    { category: "breakfast", name: "Waffles", price: 7.49 },
    { category: "breakfast", name: "Avocado Toast", price: 6.49 },
    { category: "breakfast", name: "French Toast", price: 5.49 },
    { category: "breakfast", name: "Omelette", price: 8.99 },
    { category: "breakfast", name: "Granola with Yogurt", price: 4.99 },
    { category: "breakfast", name: "Bagel with Cream Cheese", price: 3.49 },
    { category: "lunch", name: "Caesar Salad", price: 4.99 },
    { category: "lunch", name: "Grilled Chicken Sandwich", price: 8.99 },
    { category: "lunch", name: "Veggie Burger", price: 7.49 },
    { category: "lunch", name: "BLT Sandwich", price: 6.99 },
    { category: "lunch", name: "French Fries", price: 2.49 },
    { category: "lunch", name: "Iced Tea", price: 2.99 },
    { category: "lunch", name: "Club Sandwich", price: 9.49 },
    { category: "lunch", name: "Chicken Tenders", price: 8.49 },
    { category: "dinner", name: "Steak with Mashed Potatoes", price: 15.99 },
    { category: "dinner", name: "Grilled Salmon", price: 13.99 },
    { category: "dinner", name: "Spaghetti Bolognese", price: 12.99 },
    { category: "dinner", name: "Vegetable Stir Fry", price: 11.49 },
    { category: "dinner", name: "Chicken Alfredo", price: 14.99 }
];

var btnBreakfast = document.getElementById("btnBreakfast");
var btnDinner = document.getElementById("btnDinner");
var btnLunch = document.getElementById("btnLunch");
var list = document.getElementById("list")
var uniqueCategory = ["all"];
// create list unique categories
function findUniqueCategory() {
    let isAlreadyInArray = false;
    foods.forEach(function(item,i){
        for (var i = 0; i < uniqueCategory.length; i++) {
            if(uniqueCategory[i] === item.category){
                isAlreadyInArray = false;
                return
            }
        }
        if(!isAlreadyInArray){
            uniqueCategory.push(item.category)
           
        }      
    })   
}
// filter items menu based on categories unique
function filterFoodsFn(foods, cat) {
    list.innerHTML = "";
    filterFoods = [];
    if(cat === "all"){
        foodsFiltered = foods
    }else{
         foodsFiltered = foods.filter(function (item, i) {
            return item.category === cat;
        })
    }
   
    foodsFiltered.forEach(function (item, i) {
        var li = document.createElement("LI");
        li.innerHTML = item.name;
        console.log(li)
        list.appendChild(li);
    })
}

//show buttons
function showCategories(uniqueCategory){
    findUniqueCategory()
    console.log(uniqueCategory)
    uniqueCategory.forEach(function(item,i){
        var menu = document.getElementById("menu")
        var btnMenu = document.createElement("BUTTON");
        btnMenu.setAttribute("data_category",item);
        btnMenu.innerHTML = item; 
        btnMenu.addEventListener("click",function(e){
            filterFoodsFn(foods,item)
        })      
        menu.appendChild(btnMenu);
    })
}
showCategories(uniqueCategory)


// btnBreakfast.addEventListener("click", function (e) {
//     filterFoods(foods, "breakfast");
// });

// btnLunch.addEventListener("click", function (e) {
//     filterFoods(foods, "lunch");
// });

// btnDinner.addEventListener("click", function (e) {
//     filterFoods(foods, "dinner");
// });