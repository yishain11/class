const p = document.getElementsByTagName("p")[0]
const btn = document.getElementsByTagName("button")[0]
const section = document.getElementsByTagName("section")[0]

const elArr = [p, btn, section]

elArr.forEach(el => {
    el.addEventListener("click", () => {
        console.log(`${el.innerText} was clicked!`);
    })
})