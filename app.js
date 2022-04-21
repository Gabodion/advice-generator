const randomBtn = document.querySelector(".generate-advice");
const adviceText = document.querySelector(".advice-text");
const adviceTitle = document.querySelector(".advice-title");

// fetch advice when document loads
window.addEventListener("DOMContentLoaded", (e) => {
    fetchAdvice();
})


// fetch advice when button click
randomBtn.addEventListener("click", () => {
    fetchAdvice();
})



// fetch advice
function fetchAdvice(){
    const randomAdviceApi = "https://api.adviceslip.com/advice?callback";
    fetch(randomAdviceApi).then((res) => {
        return res.json();
    }).then((data) => {
        const randomAdviceId = data["slip"].id;
        const randomAdvice = data["slip"].advice;
        adviceTitle.innerHTML =`advice #${randomAdviceId}`
        adviceText.innerHTML = randomAdvice;
    }).catch((error) => {
        console.log(error);
    })
}
   



