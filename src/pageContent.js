import { menuLoad } from "./pizzaMenu";
import { contactLoad } from "./contact-us";

const container = document.querySelector("#container");

const page = (() => {
    
    const clearPage = function() {
        if(container.textContent !== "") {
            container.textContent = "";
        }
    }

    const createHeader = function() {
        if(document.querySelector(".contentDiv")) {
            const contentDiv = document.querySelector(".contentDiv");
            contentDiv.textContent = "";
        }
        
        const header = document.createElement("div");
        header.classList.add("header");
        container.appendChild(header);
    }
    const createNavMenu = function() {
        const headerSelect = document.querySelector(".header");
        const nav = document.createElement("nav");
        nav.classList.add("navMenu");
        headerSelect.appendChild(nav);

        const navSelect = document.querySelector(".navMenu");
        const navList = document.createElement("ul");
        navList.classList.add("navList");
        navSelect.appendChild(navList);

        const navListSelect = document.querySelector(".navList");
        for(let i = 0; i < 3; i++) {
            const navItem = document.createElement("li");
            navListSelect.appendChild(navItem);
            if(i == 2) {
                const navItemSelect = document.querySelectorAll(".navList > li");
                navItemSelect[0].textContent = "Home";
                navItemSelect[1].textContent = "Menu";
                navItemSelect[2].textContent = "Contact Us";

                navItemSelect[0].onclick = function() {
                    pageLoad();
                };
                navItemSelect[1].onclick = function() {
                    menuLoad();
                };
                navItemSelect[2].onclick = function() {
                    contactLoad();
                };
                
            }
        }
    }
    const createContentSection = function() {
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
    }

    const createIntroSection = function() {
        const introDiv = document.createElement("div");
        introDiv.classList.add("introDiv");
        const contentDivSelect = document.querySelector(".contentDiv");
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
    const createOpeningHours = function() {
        const hoursDiv = document.createElement("div");
        hoursDiv.classList.add("hoursDiv");
        const contentDivSelect = document.querySelector(".contentDiv");
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
        const listItems = document.querySelectorAll(".hoursDiv > ul > li");
        listItems[0].textContent = "Monday: 10am - 9pm";
        listItems[1].textContent = "Tuesday: 10am - 9pm";
        listItems[2].textContent = "Wednesday: 10am - 9pm";
        listItems[3].textContent = "Thursday: 10am - 9pm";
        listItems[4].textContent = "Friday: 10am - 11pm";
        listItems[5].textContent = "Saturday: 10am - 11pm";
        listItems[6].textContent = "Sunday: 10am - 10pm";
        }
    const createContactSection = function() {
        const infoDiv = document.createElement("div");
        infoDiv.classList.add("infoDiv");
        const contentDivSelect = document.querySelector(".contentDiv");
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
                const headingSelect = document.querySelectorAll("h3");
                headingSelect[0].textContent = "Location";
                headingSelect[1].textContent = "Phone Number";
                headingSelect[2].textContent = "Email Address";

                const address = document.createElement("address");
                address.textContent = "123 Pizza Street, Galway, Ireland";
                divSelect[0].appendChild(address);

                const phoneNumber = document.createElement("p");
                phoneNumber.textContent = "0861234567";
                divSelect[1].appendChild(phoneNumber);

                const email = document.createElement("p");
                email.textContent = "info@feekraspizzaexpress.com";
                divSelect[2].appendChild(email);
            }
            
        }
    }
    return {
        clearPage : function() {
            clearPage();
        },
        createHeader: function() {
            createHeader();
        },
        createNavMenu: function() {
            createNavMenu();
        },
        createContentSection: function() {
            createContentSection();
        },
        createIntroSection: function() {
            createIntroSection();
        },
        createOpeningHours: function() {
            createOpeningHours();
        },
        createContactSection: function() {
            createContactSection();
        }
    }
})()

function pageLoad() {
    page.clearPage();
    page.createHeader();
    page.createNavMenu();
    page.createContentSection();
    page.createIntroSection();
    page.createOpeningHours();
    page.createContactSection();
}

export {pageLoad};