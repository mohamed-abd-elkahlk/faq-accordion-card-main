let allButton = document.querySelectorAll(".button")
let allAnswer = document.querySelectorAll(".answer")
let button = Array.from(allButton)
let answer = Array.from(allAnswer)
document.addEventListener('click', (e) => {
    if (e.target.className === "button") {
        let buttonIndex = button.forEach((button, index) => {
            if (e.target == button) {
                answer[index].style.display = "block"
            }
        })
    }
    if (e.target.className === "answer") {
        e.target.style.display = "none"
    }
})