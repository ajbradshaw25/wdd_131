// 03. Cleanup/Add a new post. (The final articles array with three objects)
const articles = [
    {
        id: 1,
        title: "Pride and Prejudice",
        date: "October 15, 2025",
        description: "The timeless classic continues to enchant readers with its witty dialogue and memorable characters. The novel follows the spirited Elizabeth Bennet as she navigates societal expectations and misjudgments in 19th-century England.",
        imgSrc: "Pride_and_Prejudice.jpg",
        imgAlt: "Book cover of Pride and Prejudice",
        ages: "14+",
        genre: "Classic",
        stars: "⭐️⭐️⭐️⭐️"
    },
    {
        id: 2,
        title: "Foundation: A Masterpiece of Sci-Fi",
        date: "October 8, 2025",
        description: "Foundation is the inaugural novel in Isaac Asimov's seminal series. It introduces the concept of psychohistory, a predictive science that foretells the decline of the Galactic Empire.",
        imgSrc: "Foundation.jpg",
        imgAlt: "Book cover of Foundation",
        ages: "16+",
        genre: "Science Fiction",
        stars: "⭐️⭐️⭐️⭐️⭐️"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

// Function to generate the HTML for a single article
function buildArticleHtml(article) {
    // 2. Create a template literal string (copy/paste of the article structure)
    // Replace hardcoded values with template literal variables (${article.property})
    return `
        <div class="article-grid">
            <div class="article-details">
                <span class="article-date">Published: <time datetime="${article.date}">${article.date}</time></span>
                <p>Author: ${article.author || 'N/A'}</p>
                <p>Category: ${article.genre}</p>
                <p>Rating: ${article.stars} (${article.stars.length}/5)</p>
                <p>Ages: ${article.ages}</p>
            </div>
            <div class="article-content">
                <h3>${article.title}</h3>
                <figure>
                    <img src="${article.imgSrc}" alt="${article.imgAlt}" loading="lazy">
                    <figcaption>${article.title}</figcaption>
                </figure>
                <p>${article.description}</p>
                <a href="#">Read More...</a>
            </div>
        </div>
    `;
}

// Function to display all articles
function displayArticles() {
    // 1. Get a reference to the element we want to insert our articles into.
    const articleListElement = document.querySelector('#article-list');
    
    // Check if the element exists
    if (!articleListElement) {
        console.error("The article list container was not found.");
        return;
    }

    // Clear any existing content (besides the <h2>Recent Reviews</h2>)
    // We will append to it, but this is a good practice if you ever want to re-render.
    
    // Process each article in the array
    articles.forEach(article => {
        // 2. Create a new article element.
        const newArticle = document.createElement('article');
        
        // Add any necessary classes to match the CSS (no specific class needed here)
        
        // Set the innerHTML of the new article to the template literal string we just built.
        newArticle.innerHTML = buildArticleHtml(article);

        // Append the new article to the output element so it will show on the page.
        articleListElement.appendChild(newArticle);
    });
}

// Ensure the code runs once the page is ready (since we used 'defer')
displayArticles();