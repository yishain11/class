function genFormFields(field) {
    const fieldSet = document.createElement("fieldset")
    const label = document.createElement("label")
    label.textContent = field
    label.setAttribute("for", field)
    const input = document.createElement("input")
    if (field !== "urlToImage") {
        input.setAttribute("type", "text")
    } else {
        input.setAttribute("type", "file")
        input.setAttribute("accept", "image/png, image/jpeg")
    }
    input.setAttribute("name", field)
    fieldSet.append(label, input)
    return fieldSet
}

function loadAddNewsStoryPage() {
    const main = document.createElement("main")
    const navbar = genNavbar()
    main.appendChild(navbar)
    const h1 = document.createElement("h1")
    h1.textContent = "Add Your Own News Story!"
    main.appendChild(h1)

    const form = document.createElement("form")

    const values = ["author", "title", "urlToImage", "description", "content"]
    values.forEach(value => {
        const fieldSet = genFormFields(value)
        form.appendChild(fieldSet)
    })

    const submitBtn = document.createElement("button")
    submitBtn.textContent = "Save New Story!"
    submitBtn.onclick = (e) => {
        e.preventDefault()
        const formData = new FormData(form);
        const dataObj = Object.fromEntries(formData.entries());
        dataObj.urlToImage = URL.createObjectURL(dataObj.urlToImage)
        const storedNews = JSON.parse(localStorage.getItem("news"))
        storedNews.push(dataObj)
        localStorage.setItem("news", JSON.stringify(storedNews))
        p.innerText = "Saved new story! thanks"
        setTimeout(() => {
            p.innerText = ""
            loadPage()
        }, 3000);
    }

    form.appendChild(submitBtn)

    main.append(form)

    const p = document.createElement("p")
    p.setAttribute("id", "newNewsMsg")
    main.appendChild(p)

    return main
}