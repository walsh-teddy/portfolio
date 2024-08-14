// Define variables
let subclassDisplay;
let subclassList;
let subclassFilterButtons;

let init = (json) => {
    // Point to the HTML elements
    subclassDisplay = document.querySelector("#subclassDisplay");
    subclassFilterButtons = document.querySelectorAll(".subclassFilterButton");
    
    // Save each project group's text
    subclassList = json.Subclasses;

    // Set up button functions
    for (let button of subclassFilterButtons) {
        button.onclick = () => {
            loadSubclasses(button.value);
        }
    }

    // Load all the projects by default
    loadSubclasses("All");
}

// 
let loadSubclasses = (DnDClass) => {
    // Clear currently displayed subclasses
    subclassDisplay.innerHTML = '<p>Subclasses loading...<p>';

    // Find which subclasses should be loaded
    subclassesToBeDisplayed = [];
    for (let subclass of subclassList) { // Loop through each subclass in the JSON

        // See if this subclass should be displayed
        if (subclass.class == DnDClass || DnDClass == "All") {
            subclassesToBeDisplayed.push(subclass);
        }
    }

    // Load the subclasses found
    html = ``;

    // Loop through each project
    for (let subclass of subclassesToBeDisplayed) {

        // Start HTML
        html += `<div class="itemBox"><a href=${subclass.link}>`;

            // Name
            html += `<h1>${subclass.name}</h1>`;

            // Class
            html += `<h2>${subclass.class} subclass</h2>`

            // Description
            html += `<p>${subclass.description}</p>`
            
        html += `</a></div>`;
    }

    if (subclassesToBeDisplayed == 0) {
        html += `<p>No subclasses made for ${DnDClass} yet</p>`
    }

    subclassDisplay.innerHTML = html;
}

window.onload = () => {
    // Fetch JSON data
    fetch('Homebrew.json')

        // Parse JSON
        .then((response) => response.json())

        // Call init()
        .then((json) => init(json));
}