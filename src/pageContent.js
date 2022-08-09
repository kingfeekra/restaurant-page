const container = document.querySelector("#container");

const pageLoad = function() {
    const header = document.createElement("div");
    header.classList.add("header");
    container.appendChild(header);

    const main = document.createElement("main"); 
    container.appendChild(main);

    const mainSelect = document.querySelector("main");
    const contentDiv = document.createElement("div");
    contentDiv.classList.add("contentDiv");

    mainSelect.appendChild(contentDiv);

    const contentDivSelect = document.querySelector(".contentDiv");
    const restaurantTitle = document.createElement("h1");
    restaurantTitle.textContent = "Feekra's Pizza Express";
    restaurantTitle.classList.add("restaurantTitle");
    contentDivSelect.appendChild(restaurantTitle);

    const introDiv = document.createElement("div");
    introDiv.classList.add("introDiv");
    contentDivSelect.appendChild(introDiv);

    const introDivSelect = document.querySelector(".introDiv");
    const introPara = document.createElement("p");
    introPara.textContent = "Feekra's Pizza Express has the best \
    pizza in the universe. Truly tremendous pizza, the cheese is \
    so succulent and glorious, the tomato sauce sublime, and every \
    topping tastes simply incredible. A marvellous pizza establishment.";
    introPara.classList.add("introPara");
    introDivSelect.appendChild(introPara);

}


export {pageLoad};