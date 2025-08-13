const btn = document.getElementsByTagName("button")[0]
const f = document.getElementsByTagName("form")[0]
f.addEventListener("submit", (e) => {
    e.preventDefault()
})

btn.addEventListener("click", () => {
    f.classList.toggle("dark")
})