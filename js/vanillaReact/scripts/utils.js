
function storeNewsLocalstorage(news) {
    localStorage.setItem("news", JSON.stringify(news.articles))
}