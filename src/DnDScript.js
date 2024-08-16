// Define variables
// Subclasses
let subclassList;
let subclassDisplay;
let subclassFilterButtons;
let subclassClearButton;
// Spells
let spellList;
let spellDisplay;
let spellFilterButtons;
let spellClearButton;
// Races
let raceList;
let raceDisplay;
// Full Classes (can't use the keyword "class")
let fullClassList;
let fullClassDisplay;

let init = (json) => {
    // SUBCLASSES

    // Point to the HTML elements
    subclassDisplay = document.querySelector("#subclassDisplay");
    subclassFilterButtons = document.querySelectorAll(".subclassFilterButton");
    subclassClearButton = document.querySelector("#subclassClearButton");
    
    // Save each project group's text
    subclassList = json.Subclasses;

    // Set up button functions
    for (let button of subclassFilterButtons) {
        button.onclick = loadSubclasses;
    }
    subclassClearButton.onclick = clearSubclasses;

    // SPELLS

    // Point to the HTML elements
    spellDisplay = document.querySelector("#spellDisplay");
    spellFilterButtons = document.querySelectorAll(".spellFilterButton");
    spellClearButton = document.querySelector("#spellClearButton");

    // Save each project group's text
    spellList = json.Spells;

    // Set up button functions
    for (let button of spellFilterButtons) {
        button.onclick = loadSpells;
    }
    spellClearButton.onclick = clearSpells;

    // RACES
    
    // Point to the HTML elements
    raceDisplay = document.querySelector("#raceDisplay");

    // Save the list of races
    raceList = json.Races;

    // Automatically load all races by default (TODO: Maybe make this a button if there are too many and it gets crowded)
    loadRaces();


    // FULL CLASSES
    
    // Point to the HTML elements
    fullClassDisplay = document.querySelector("#fullClassDisplay");

    // Save the list of classes
    fullClassList = json.FullClasses;

    // Automatically load all classes by default (TODO: Maybe make this a button if there are too many and it gets crowded)
    loadFullClasses();
}

let loadSubclasses = (e) => {
    // Clear currently displayed subclasses
    subclassDisplay.innerHTML = '<p>Subclasses loading...<p>';

    // Find which subclasses should be loaded
    subclassesToBeDisplayed = [];
    for (let subclass of subclassList) { // Loop through each subclass in the JSON

        // See if this subclass should be displayed
        if (subclass.class == e.target.value || e.target.value == "All") {
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
        html += `<p>No subclasses made for ${e.target.value} yet</p>`
    }

    subclassDisplay.innerHTML = html;
}

let clearSubclasses = () => {
    subclassDisplay.innerHTML = "";
}

let spellLevelText = [
    "Cantrips",
    "1st level",
    "2nd level",
    "3rd level",
    "4th level",
    "5th level",
    "6th level",
    "7th level",
    "8th level",
    "9th level"
];

let loadSpells = (e) => {
    // Clear currently displayed spells
    spellDisplay.innerHTML = '<p>Spells loading...<p>';

    // Find which spells should be loaded
    spellsToBeDisplayed = [];
    for (let spell of spellList) { // Loop through each subclass in the JSON

        // See if this subclass should be displayed
        if (spell.classes.includes(e.target.value)|| e.target.value == "All") {
            spellsToBeDisplayed.push(spell);
        }
    }

    // Load the spells found
    html = ``;

    // Go through each spell level
    for (let level = 0; level <= 9; level ++) {
        htmlThisLevel = '';
        spellsThisLevel = false; // Only add this level's HTML if there is at least 1 spell for it

        // Start the HTML for this box
        htmlThisLevel += `<div class="itemBox">
            <h1>${spellLevelText[level]}</h1>
            <ul>
        `;

        // Loop through each spell and add it if its of this level
        for (let spell of spellsToBeDisplayed) {
            if (spell.level == level) {
                spellsThisLevel = true;

                htmlThisLevel += `<li><a href="${spell.link}">${spell.name}</a></li>`;
            }
        }

        htmlThisLevel += `</ul></div>`

        // Only add the HTML if there was at least 1 spell for this spell level
        if (spellsThisLevel) {
            html += htmlThisLevel;
        }

    }

    if (spellsToBeDisplayed == 0) {
        html += `<p>No spells made for ${e.target.value} yet</p>`
    }

    spellDisplay.innerHTML = html;
}

let clearSpells = () => {
    spellDisplay.innerHTML = "";
}

let loadRaces = () => {
    // Load the subclasses found
    html = ``;

    // Loop through each race
    for (let race of raceList) {

        // Start HTML
        html += `<div class="itemBox"><a href=${race.link}>`;

            // Name
            html += `<h1>${race.name}</h1>`;

            // Description
            html += `<p>${race.description}</p>`
            
        html += `</a></div>`;
    }

    raceDisplay.innerHTML = html;
}

let loadFullClasses = () => {
    // Load the class found
    html = ``;

    // Loop through each race
    for (let fullClass of fullClassList) {

        // Start HTML
        html += `<div class="itemBox"><a href=${fullClass.link}>`;

            // Name
            html += `<h1>${fullClass.name}</h1>`;

            // Description
            html += `<p>${fullClass.description}</p>`
            
        html += `</a></div>`;
    }

    fullClassDisplay.innerHTML = html;
}


window.onload = () => {
    // Fetch JSON data
    fetch('Homebrew.json')

        // Parse JSON
        .then((response) => response.json())

        // Call init()
        .then((json) => init(json));
}