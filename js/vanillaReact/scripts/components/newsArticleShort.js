function genShortArticle({ urlToImage, title, author }) {
    const article = document.createElement("article")
    const h2Title = document.createElement("h2")
    const authorP = document.createElement("p")
    const img = document.createElement("img")

    img.setAttribute("src", urlToImage)
    img.setAttribute("width", 200)
    img.setAttribute("height", 200)
    h2Title.textContent = title
    authorP.textContent = author

    article.append(h2Title, authorP, img)
    article.classList.add("shortArticle")
    article.onclick = () => {
        loadPage("expandedNewsPage", { title, author })
    }

    return article
}