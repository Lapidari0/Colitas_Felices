let buttonToTop = document.getElementById("btnTop")

buttonToTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

window.addEventListener("scroll", () => {
    if (window.scrollY <= 200) {
        buttonToTop.classList.add("d-none")
    } else {
        buttonToTop.classList.remove("d-none")
    }
})