async function loadNews() {
    let storedNews = loadStoredNews();
    if (storedNews) return storedNews;
    const news = await getNews();
    storeNewsLocalstorage(news)
    return news
}

function loadStoredNews() {
    if (localStorage.getItem("news") && localStorage.getItem("news").length > 0) {
        return localStorage.news
    }
}

async function getNews() {
    const baseUrl = 'https://newsapi.org/v2/top-headlines?country=us&apiKey='
    try {
        const news = await fetch(baseUrl + config.NEWS_API_KEY).then(res => res.json())
        return news

    } catch (error) {
        console.log(`error`, error);
    }
}
