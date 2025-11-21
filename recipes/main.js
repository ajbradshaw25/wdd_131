import recipes from './recipes.mjs';

/* --------- RANDOM FUNTIONS -------- */
function random(num) {
	// returns a whole number between 0 and num - 1
	return Math.floor(Math.random() * num);
}

function getRandomListEntry(list) {
	const listLength = list.length;
	const randomNum = random(listLength);
	return list[randomNum];
}

/* --------- TEMPLATE FUNCTIONS -------- */

function tagsTemplate(tags) {
    // Loop through the tags and transform the strings into <span> HTML elements
    // We are using <span> instead of <li> as per the updated mockup/HTML structure, 
    // although <li> is fine if wrapped in a <ul>.
    let html = "";
    tags.forEach((tag) ==> {
        html += `<span class="tag">${tag}</span>`;
    });
    return html;
}

function ratingTemplate(rating) {
	// Rating is always out of 5 stars
	let html = `<span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >`;

	// Loop 5 times (for 5 total stars)
	for (let i = 1; i <= 5; i++) {
		// If the current index (i) is less than or equal to the recipe rating, output a filled star
		if (i <= rating) {
			html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
		} else {
			// Otherwise, output an empty star
			html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
		}
	}

	html += `</span>`;
	return html;
}

function recipeTemplate(recipe) {
    // Note: The structure here reflects the updated HTML for the mockup.
    // The recipe image and description details are pulled dynamically.

	// Assuming recipe.tags is an array of strings like ["dessert", "fruit"]
    const tagsHtml = recipe.tag ? tagsTemplate([recipe.tag]) : ''; // Use array for tagsTemplate

    return `<section class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            <div class="recipe-info">
                ${tagsTemplate(recipe.tags)}
                <h2 class="recipe-title">${recipe.name.toUpperCase()}</h2>
                <p class="recipe-time">🕒 Prep: 30 min | Cook: 45 min</p>
                <div class="recipe-rating">
                    ${ratingTemplate(recipe.rating)}
                </div>
                <p class="recipe-description"> ${recipe.description}</p>

            </div>
        </section>`;
}

/* --------- RENDER -------- */

function renderRecipes(recipeList) {
    const display = document.querySelector("#recipeDisplay");

    const recipesHTML = recipeList
        .map((recipe) => recipeTemplate(recipe))
        .join("");

    display.innerHTML = recipesHTML;
}

/* --------- FILTER -------- */

function filterRecipes(query) {
    // Ensure query is lowercase for case-insensitive comparison
	const lowerQuery = query.toLowerCase();

    // 1. Filter the recipes
	const filtered = recipes.filter(recipe => {
        
        // Check if query is in the recipe name
        const nameMatch = recipe.name.toLowerCase().includes(lowerQuery);
        
        // Check if query is in the recipe description
        const descriptionMatch = recipe.description.toLowerCase().includes(lowerQuery);
        
        // Check if query is in the tag (since tag is a single string in our data)
        const tagMatch = recipe.tags.find((tag) =>
        tag.toLowerCase().includes(lowerQuery)
    );
        
        // (Optional: If you add an ingredients array, you can use Array.find here)
        const ingredientMatch = recipe.ingredients.find((item) =>
        item.toLowerCase().includes(lowerQuery)
    );
        // Return true if any field matches the query
		return nameMatch || descriptionMatch || tagMatch || ingredientMatch;
	});

	// 2. Sort the filtered list by name alphabetically
	const sorted = filtered.sort((a, b) => {
		a.name.localeCompare(b.name)
	});

	return sorted;
}

function searchHandler(e) {
	// Prevent the default form submission behavior (page reload)
	e.preventDefault(); 
    
    // 1. Get the search input value
    const searchInput = document.querySelector("search");
    const query = searchInput.value;

	// 2. Use the filter function to filter our recipes
    const filteredList = filterRecipes(query);
    
	// 3. Render the filtered list
	renderRecipes(filteredList);
}

/* --------- INIT -------- */
function init() {
    // 04 Render a Random Recipe on load (as instructed)
	const recipe = getRandomListEntry(recipes);
	// Pass the single recipe object inside an array: [recipe]
	renderRecipes([recipe]); 

    // 05 Attach Event Listener to the search form/button
    const searchForm = document.querySelector("#searchForm");
    // We attach the listener to the form to handle both button click and 'Enter' press
    searchForm.addEventListener("submit", searchHandler);
}

// Run the initialization function when the script loads
init();