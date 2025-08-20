const root = document.getElementById("root")
const news = JSON.parse(await loadNews())

let currentPage = "mainNewsPage"

window.loadPage = (pageType = "mainNewsPage", data) => {
    let main = document.querySelector("main")
    if (main) {
        main.remove()
    }
    switch (pageType) {
        case "mainNewsPage":
            main = loadMainNewsPage(news, main, currentPage)
            break;
        case "expandedNewsPage":
            main = loadExpandedPage(news, main, currentPage, data)
            break
        default:
            main = loadMainNewsPage(news, main, currentPage)
            break;
    }
    root.append(main)
}


loadPage()