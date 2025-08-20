const root = document.getElementById("root")
window.pages = ["Main Page", "Add Story"]
let currentPage = "mainNewsPage"

window.loadPage = async (pageType = "mainNewsPage", data) => {
    let main = document.querySelector("main")
    if (main) {
        main.remove()
    }
    switch (pageType) {
        case "mainNewsPage":
            const news = JSON.parse(await loadNews())
            main = loadMainNewsPage(news, main, currentPage)
            break;
        case "expandedNewsPage":
            main = loadExpandedPage(news, main, currentPage, data)
            break
        case "addNewsStoryPage":
            main = loadAddNewsStoryPage()
            break;
        default:
            main = loadMainNewsPage(news, main, currentPage)
            break;
    }
    root.append(main)
}


loadPage()