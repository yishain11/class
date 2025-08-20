function genNavbar() {
    const navbar = document.createElement("nav")
    window.pages.forEach(pageName => {
        const a = document.createElement("a")
        a.textContent = pageName
        a.classList.add("navbarLink")
        navbar.appendChild(a)
    })
    const btn = document.createElement("button")
    btn.textContent = "refresh news"
    btn.onclick = loadNews
    navbar.appendChild(btn)

    navbar.onclick = (e) => {
        switch (e.target.innerText.toLowerCase()) {
            case "add story":
                loadPage("addNewsStoryPage")
                break;

            default:
                loadPage("mainNewsPage")
                break;
        }
    }

    return navbar
}