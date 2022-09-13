const contact = (() => {

    const createDivs = function() {
        const contentDiv = document.querySelector(".contentDiv");
        contentDiv.textContent = "";

        const heading = document.createElement("h1");
        heading.textContent = "Contact Us";
        contentDiv.appendChild(heading);

        for(let i = 0; i < 3; i++) {
            const div = document.createElement("div");
            div.classList.add("contactUsItem");
            contentDiv.appendChild(div);
        }
    }
    const createItems = function() {
        const itemSelect = document.querySelectorAll(".contactUsItem");
            for(let i = 0; i < 3; i++) {
                const contactType = document.createElement("h2");
                itemSelect[i].appendChild(contactType);

                const contactDescription = document.createElement("p");
                itemSelect[i].appendChild(contactDescription);
            }
    }

    const setContact = function() {
        const contactList = document.querySelectorAll(".contactUsItem > h2");
        contactList[0].textContent = "Phone Number";
        contactList[1].textContent = "Email";
        contactList[2].textContent = "Location";
    }
    const setDescription = function() {
        const descriptionList = document.querySelectorAll(".contactUsItem > p");
        descriptionList[0].textContent = "0861234567";
        descriptionList[1].textContent = "info@feekraspizzaexpress.com";
        descriptionList[2].textContent = "123 Pizza Street, Galway, Ireland";
    }

    return {
        createDivs: function() {
            createDivs();
        },
        createItems: function() {
            createItems();
        },
        setContact: function() {
            setContact();
        },
        setDescription: function() {
            setDescription();
        },
    }
})()

function contactLoad() {
    contact.createDivs();
    contact.createItems();
    contact.setContact();
    contact.setDescription();
}

export {contactLoad};