function generateMainNewsPage(shortNewsData) {
    const main = document.createElement("main")
    const navbar = genNavbar(["main", "addStory"])
    main.appendChild(navbar)
    const articleContainer = document.createElement("section")
    articleContainer.setAttribute("id", "articleContainer")
    main.appendChild(articleContainer)
    populateArticles(shortNewsData, articleContainer)
    main.setAttribute("id", "mainPage")

    return main
}

function populateArticles(shortNewsData, articleContainer) {
    shortNewsData.forEach(data => {
        const article = genShortArticle(data)
        articleContainer.appendChild(article)
    })
}

function loadMainNewsPage(news, main, currentPage) {
    const shortNewsData = news.map(({ title, author, urlToImage }) => {
        return {
            title,
            author,
            urlToImage
        }
    })
    main = generateMainNewsPage(shortNewsData)
    currentPage = "mainNewsPage"
    return main
}