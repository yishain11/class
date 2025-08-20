function genNavbar(pagesNames) {
    const navbar = document.createElement("nav")
    pagesNames.forEach(pageName => {
        const a = document.createElement("a")
        a.textContent = pageName
        a.classList.add("navbarLink")
        navbar.appendChild(a)
    })
    const btn = document.createElement("button")
    btn.textContent = "refresh news"
    btn.onclick = loadNews
    navbar.appendChild(btn)
    return navbar
}