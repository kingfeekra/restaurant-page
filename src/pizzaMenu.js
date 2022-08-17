const menu = (() => {

    const createMenuDivs = function() {
        const contentDiv = document.querySelector(".contentDiv");
        contentDiv.textContent = "";
        for(let i = 0; i < 6; i++) {
            const menuDiv = document.createElement("div");
            menuDiv.classList.add("menuItem");
            contentDiv.appendChild(menuDiv);
        }
    }
    const createMenuItems = function() {
        const menuItemSelect = document.querySelectorAll(".menuItem");
            for(let i = 0; i < 6; i++) {
                const pizzaName = document.createElement("h2");
                pizzaName.classList.add("pizzaName");
                menuItemSelect[i].appendChild(pizzaName);

                const ingredients = document.createElement("p");
                ingredients.classList.add("ingredients");
                menuItemSelect[i].appendChild(ingredients);

                const price = document.createElement("p");
                price.classList.add("price");
                menuItemSelect[i].appendChild(price);
            }
    }

    const setPizzaNames = function() {
        const pizzaList = document.querySelectorAll(".pizzaName");
        pizzaList[0].textContent = "Margherita";
        pizzaList[1].textContent = "Pepperoni";
        pizzaList[2].textContent = "Hawaiian";
        pizzaList[3].textContent = "Meat Feast";
        pizzaList[4].textContent = "Doner Pizza";
        pizzaList[5].textContent = "Vegetarian Delight";
    }
    const setIngredients = function() {
        const ingredientsList = document.querySelectorAll(".ingredients");
        ingredientsList[0].textContent = "Cheese & tomato.";
        ingredientsList[1].textContent = "Pepperoni, green peppers & Italian herbs.";
        ingredientsList[2].textContent = "Ham & pineapple.";
        ingredientsList[3].textContent = "Pepperoni, salami, ham & donner meat.";
        ingredientsList[4].textContent = "Donner meat & onions.";
        ingredientsList[5].textContent = "Mushroom, peppers, onion, sweetcorn & olives.";
    }
    const setPrice = function() {
        const priceList = document.querySelectorAll(".price");
        priceList[0].textContent = "$7";
        priceList[1].textContent = "$9";
        priceList[2].textContent = "$9";
        priceList[3].textContent = "$10";
        priceList[4].textContent = "$10";
        priceList[5].textContent = "$10";
    }
    return {
        createMenuDivs: function() {
            createMenuDivs();
        },
        createMenuItems: function() {
            createMenuItems();
        },
        setPizzaNames: function() {
            setPizzaNames();
        },
        setIngredients: function() {
            setIngredients();
        },
        setPrice: function() {
            setPrice();
        }
    }
})()

function menuLoad() {
    menu.createMenuDivs();
    menu.createMenuItems();
    menu.setPizzaNames();
    menu.setIngredients();
    menu.setPrice();
}

export {menuLoad};