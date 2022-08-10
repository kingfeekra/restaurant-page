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

    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("hoursDiv");
    contentDivSelect.appendChild(hoursDiv);

    const hoursDivSelect = document.querySelector(".hoursDiv");
    const hoursHeading = document.createElement("h2");
    hoursHeading.textContent = "Opening Hours";
    hoursDivSelect.appendChild(hoursHeading);

    const hoursList = document.createElement("ul");
    for(let i = 0; i < 7; i++) {
        const day = document.createElement("li");
        hoursList.appendChild(day);
    }
    hoursDivSelect.appendChild(hoursList);

    const listItems = document.querySelectorAll("li");
    listItems[0].textContent = "Monday: 10am-9pm";
    listItems[1].textContent = "Tuesday: 10am-9pm";
    listItems[2].textContent = "Wednesday: 10am-9pm";
    listItems[3].textContent = "Thursday: 10am-9pm";
    listItems[4].textContent = "Friday: 10am-11pm";
    listItems[5].textContent = "Saturday: 10am-11pm";
    listItems[6].textContent = "Sunday: 10am-10pm";

    const infoDiv = document.createElement("div");
    infoDiv.classList.add("infoDiv");
    contentDivSelect.appendChild(infoDiv);

    const infoDivSelect = document.querySelector(".infoDiv");
    const infoHeading = document.createElement("h2");
    infoHeading.textContent = "Contact Info";
    infoDivSelect.appendChild(infoHeading);

    for(let i = 0; i < 3; i++) {
        const div = document.createElement("div");
        infoDivSelect.appendChild(div);
        const heading = document.createElement("h3");
        if(i == 2) {
            const divSelect = document.querySelectorAll(".infoDiv > div");
            for (let i = 0; i < 3; i++) {
                const heading = document.createElement("h3");
                divSelect[i].appendChild(heading);
            }
        }
        
    }
    
}


export {pageLoad};