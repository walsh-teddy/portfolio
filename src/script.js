// Define variables
let projectDisplay;
let projectList;
let tagSelectors;
let sortButton;
let clearButton;
let selectAllButton;

let init = (json) => {
    // Point to the HTML elements
    projectDisplay = document.querySelector("#projectDisplay");
    tagSelectors = document.querySelectorAll(".tagCheckbox");
    sortButton = document.querySelector("#sortButton");
    //clearButton = document.querySelector("#clearButton");
    //selectAllButton = document.querySelector("#selectAllButton")
    
    // Save each project group's text
    projectList = json.projects;

    // Set up button functions
    sortButton.onclick = loadProjects;
    //clearButton.onclick = clearTags;
    //selectAllButton.onclick = selectAllTags;

    // Load all the projects by default
    loadProjects();
}

let clearTags = () => {
    for (let tagSelector of tagSelectors) {
        tagSelector.checked = false;
    }
}

let selectAllTags = () => {
    for (let tagSelector of tagSelectors) {
        tagSelector.checked = true;
    }
}

// 
let loadProjects = () => {
    // Clear currently displayed projects
    projectDisplay.innerHTML = '<p>Projects Loading...<p>';

    // Get tags from selectors
    selectedTags = [];
    for (let tagSelector of tagSelectors) { // Loop through each tag selector
        if (tagSelector.checked) { // This tag selector is checked
            selectedTags.push(tagSelector.value);
        }
    }

    // TODO: Find which projects should be loaded
    projectsToBeDisplayed = [];
    for (let project of projectList) { // Loop through each project
        // Test if this project has any tag within selectedTags
        let shouldBeDisplayed = false; // Let this be proven true
        for (let tag of project.tags) { // Loop through each tag on the project
            if (selectedTags.includes(tag)) {
                shouldBeDisplayed = true;
            }
        }
        if (shouldBeDisplayed) { // This project has a tag contained
            // Add the project to the list
            projectsToBeDisplayed.push(project);
        }
    }

    // Load the projects found (loading every project right now)
    html = ``;

    // Loop through each project
    for (let project of projectsToBeDisplayed) {

        // Start HTML
        html += `<div class="project">`;
            
            // Description
            html += `<div class="description">`;
            
                // Name
                html += `<h4>
                    <a href="${project.link}" target="_blank"
                    rel="noopener noreferrer">${project.name}</a>
                </h4>`;

                // Tags
                html += `<h5>Tags: `;
                for (j = 0; j < project.tags.length; j ++) { // (Using for loop instead of for let because we need to know if there are more)
                    html += project.tags[j];
                    if (j != project.tags.length - 1) { // There are more tags after this one
                        html+= `, `;
                    }
                }
                html += `</h5>`;

                // Paragraphs
                for (let paragraph of project.paragraphs) {
                    html += `<p>${paragraph}</p>`;
                }
            
            // End of Description
            html += `</div>`;

            // Gallery
            html += `<div class="gallery">`;
                
                // Pictures
                for (let picture of project.gallery) {

                    // Format the HTML
                    html += `<div class=picture>
                        <img src="${picture.src}" alt="${picture.alt}">
                        <h5>${picture.caption}</h5>
                    </div>`;
                }
            html += `</div>
        </div>`;
    }

    if (projectsToBeDisplayed == 0) {
        html += '<p>No projects found! Did you select any tags?</p>'
    }

    projectDisplay.innerHTML = html;
}

window.onload = () => {
    // Fetch JSON data
    fetch('src/projects.json')

        // Parse JSON
        .then((response) => response.json())

        // Call init()
        .then((json) => init(json));
}