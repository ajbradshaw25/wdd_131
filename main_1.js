 return `<section class="recipe-card">
        <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        <div class="recipe-info">
            ${tagsHtml}
            <h2 class="recipe-title">${recipe.name.toUpperCase()}</h2>
            <div class="recipe-rating">
                ${ratingTemplate(recipe.rating)}
            </div>
            <p class="recipe-description">
                ${recipe.description}
            </p>
        </div>
    </section>
    `;