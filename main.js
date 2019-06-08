const borrowerContainerArr = [];
const addBorrowerBtn = document.querySelector("#add-borrower-button");
const removeBorrowerBtn = document.querySelector("#remove-borrower-button");

for (let i = 1; i < 7; i++) {
    let borrower = document.querySelector(`#borrower-${i}-container`);
    borrowerContainerArr.push(borrower);
}

addBorrowerBtn.addEventListener("click", function() {
    if (borrowerContainerArr[1].classList.contains("hidden")) {
        borrowerContainerArr[1].classList.remove("hidden");
        borrowerContainerArr[1].classList.add("not-hidden");
        removeBorrowerBtn.classList.remove("disable-button");
    } else if (borrowerContainerArr[2].classList.contains("hidden")) {
        borrowerContainerArr[2].classList.remove("hidden");
        borrowerContainerArr[2].classList.add("not-hidden");
    } else if (borrowerContainerArr[3].classList.contains("hidden")) {
        borrowerContainerArr[3].classList.remove("hidden");
        borrowerContainerArr[3].classList.add("not-hidden");
    } else if (borrowerContainerArr[4].classList.contains("hidden")) {
        borrowerContainerArr[4].classList.remove("hidden");
        borrowerContainerArr[4].classList.add("not-hidden");
    } else if (borrowerContainerArr[5].classList.contains("hidden")) {
        borrowerContainerArr[5].classList.remove("hidden");
        borrowerContainerArr[5].classList.add("not-hidden");
        addBorrowerBtn.classList.add("disable-button");
    }
});

removeBorrowerBtn.addEventListener("click", function() {
    if (borrowerContainerArr[5].classList.contains("not-hidden")) {
        borrowerContainerArr[5].classList.add("hidden");
        borrowerContainerArr[5].classList.remove("not-hidden");
        addBorrowerBtn.classList.remove("disable-button");
    } else if (borrowerContainerArr[4].classList.contains("not-hidden")) {
        borrowerContainerArr[4].classList.add("hidden");
        borrowerContainerArr[4].classList.remove("not-hidden");
    } else if (borrowerContainerArr[3].classList.contains("not-hidden")) {
        borrowerContainerArr[3].classList.add("hidden");
        borrowerContainerArr[3].classList.remove("not-hidden");
    } else if (borrowerContainerArr[2].classList.contains("not-hidden")) {
        borrowerContainerArr[2].classList.add("hidden");
        borrowerContainerArr[2].classList.remove("not-hidden");
    } else if (borrowerContainerArr[1].classList.contains("not-hidden")) {
        borrowerContainerArr[1].classList.add("hidden");
        borrowerContainerArr[1].classList.remove("not-hidden");
        removeBorrowerBtn.classList.add("disable-button");
    }
});
