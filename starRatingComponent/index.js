const starSelected = document.querySelectorAll(".fa-star"); 
const starValue = document.querySelector(".star-value");

let currentTotal = -1; 

starSelected.forEach((currentEle, index) => {
    currentEle.dataset.rating = index + 1; 
    currentEle.addEventListener('mouseover', handleMouseOver); 
    currentEle.addEventListener('click', handleOnClick); 
    currentEle.addEventListener('mouseleave', handleMouseLeave); 
});

function handleMouseOver(event) {
    const currentRating = event.target.dataset.rating; 
    if(!currentRating) return
    else handleRatingState(currentRating);
}

function handleRatingState(getCurrentRatingValue) {
    for(let i=0; i<5; i++) {
        if(i<getCurrentRatingValue) {
            starSelected[i].classList.add('stars')
        } else {
            starSelected[i].classList.remove('stars')
        }
    }
}

function handleOnClick(event) {
    const currentRatingValue = event.target.dataset.rating; 
    currentTotal = currentRatingValue; 
    handleRatingState(currentTotal);
    starValue.textContent = currentTotal;
    
}

function handleMouseLeave() {
    handleRatingState(currentTotal)
}