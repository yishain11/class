function genExpandedNewsPage({ description, content, urlToImage }) {
    console.log(`content`, content);
    const main = document.createElement("main")
    const btn = document.createElement("button")
    btn.textContent = "return to main page"
    btn.onclick = loadPage;
    main.setAttribute("id", "expandedPageMain")
    main.appendChild(btn)
    const expandedArticle = document.createElement("article")

    const h1 = document.createElement("h1")
    h1.textContent = description
    expandedArticle.appendChild(h1)

    const img = document.createElement("img")
    img.setAttribute("width", 300)
    img.setAttribute("height", 300)
    img.setAttribute("src", urlToImage)
    expandedArticle.appendChild(img)

    const p = document.createElement("p")
    p.textContent = content
    expandedArticle.appendChild(p)

    expandedArticle.setAttribute("id", "newsArticle")

    main.appendChild(expandedArticle)

    return main
}

function loadExpandedPage(news, main, currentPage, data) {
    const specificNewsStory = news.filter(newsStory => {
        return newsStory.title === data.title && newsStory.author === data.author
    })
    if (specificNewsStory) {
        main = genExpandedNewsPage(specificNewsStory[0])
    }
    currentPage = "expandedNewsPage"
    return main
}