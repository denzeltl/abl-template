let latagHeader = document.querySelector("#latag-header");
latagHeader.textContent = " - ";
const matterNumber = document.querySelector("#matter-number");
const borrowerContainerArr = [];
for (let i = 1; i < 7; i++) {
    let borrower = document.querySelector(`#borrower-${i}-container`);
    borrowerContainerArr.push(borrower);
}
let borrowerNamesArr = [];
for (let i = 1; i < 7; i++) {
    let borrowerName = document.querySelector(`#borrower-${i}-name`);
    borrowerNamesArr.push(borrowerName);
}
let borrowerFullNamesArr = [];
const addBorrowerBtn = document.querySelector("#add-borrower-button");
const removeBorrowerBtn = document.querySelector("#remove-borrower-button");
const caseflowTabs = document.querySelectorAll(".caseflow-tab");
const caseflowTabsContents = document.querySelectorAll(
    ".caseflow-tabs-content"
);
const inputParalegal = document.querySelector("#paralegal-name");

// matter number event listener
matterNumber.addEventListener("change", e => {
    let matter = e.target.value;
    latagHeader.textContent = matter + " - ";
});

// borrower names event listener
for (let i = 0; i < 6; i++) {
    let obj = {};
    borrowerNamesArr[i].addEventListener("change", function(e) {
        let borrowerFullName = e.target.value
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1));
        obj["firstName"] = borrowerFullName.shift();
        obj["lastName"] = borrowerFullName.pop();
        obj["middleName"] = borrowerFullName.join(" ");
        if (this == document.querySelector("#borrower-1-name")) {
            pasteBorrowerOneName();
        }
    });
    borrowerFullNamesArr.push(obj);
}

function pasteBorrowerOneName() {
    latagHeader.textContent += borrowerFullNamesArr[0].lastName;
    document.title = `${
        borrowerFullNamesArr[0].lastName
    }, ${borrowerFullNamesArr[0].firstName.charAt(0)}`;
}

// borrower buttons event listener
addBorrowerBtn.addEventListener("click", () => {
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
removeBorrowerBtn.addEventListener("click", () => {
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

// tabs contents functions
caseflowTabs.forEach(tab => {
    tab.addEventListener("click", selectTab);
});

function selectTab() {
    hideContentsOfTabs();
    removeSelectedTabClass();
    this.classList.add("selected-tab");
    document.querySelector(`#${this.id}-content`).classList.remove("hidden");
}

// remove selected tab class
function removeSelectedTabClass() {
    caseflowTabs.forEach(tab => {
        tab.classList.remove("selected-tab");
    });
}

// remove contents of tabs
function hideContentsOfTabs() {
    caseflowTabsContents.forEach(content => {
        content.classList.add("hidden");
    });
}

// input paralegal function

inputParalegal.addEventListener("change", function(e) {
    if (e.target.value.toUpperCase() == "ARD") {
        document.querySelector("#team-leader").value = "   ";

        document.querySelector("#admin-assistant").value = "KED";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "CYS") {
        document.querySelector("#team-leader").value = "   ";

        document.querySelector("#admin-assistant").value = "AYF";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "TMO") {
        document.querySelector("#team-leader").value = "   ";

        document.querySelector("#admin-assistant").value = "IXC";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "MEF") {
        document.querySelector("#team-leader").value = "   ";

        document.querySelector("#admin-assistant").value = "KXP";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "LMA") {
        document.querySelector("#team-leader").value = "   ";

        document.querySelector("#admin-assistant").value = "RXW";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "HXP") {
        document.querySelector("#team-leader").value = "TMO";

        document.querySelector("#admin-assistant").value = "IXC";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "KKM") {
        document.querySelector("#team-leader").value = "TMO";

        document.querySelector("#admin-assistant").value = "IXC";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "NVP") {
        document.querySelector("#team-leader").value = "MEF";

        document.querySelector("#admin-assistant").value = "KXP";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "DMP") {
        document.querySelector("#team-leader").value = "LMA";

        document.querySelector("#admin-assistant").value = "RXW";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "SXB") {
        document.querySelector("#team-leader").value = "LMA";

        document.querySelector("#admin-assistant").value = "RXW";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "LAM") {
        document.querySelector("#team-leader").value = "CYS";

        document.querySelector("#admin-assistant").value = "AYF";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "NHM") {
        document.querySelector("#team-leader").value = "CYS";

        document.querySelector("#admin-assistant").value = "AYF";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "NXA") {
        document.querySelector("#team-leader").value = "TMO";

        document.querySelector("#admin-assistant").value = "JXW";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "RHH") {
        document.querySelector("#team-leader").value = "TMO";

        document.querySelector("#admin-assistant").value = "JXW";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "VSA") {
        document.querySelector("#team-leader").value = "TMO";

        document.querySelector("#admin-assistant").value = "JXW";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "RMF") {
        document.querySelector("#team-leader").value = "TMO";

        document.querySelector("#admin-assistant").value = "OXO";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "RYE") {
        document.querySelector("#team-leader").value = "TMO";

        document.querySelector("#admin-assistant").value = "OXO";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "BJT") {
        document.querySelector("#team-leader").value = "MEF";

        document.querySelector("#admin-assistant").value = "NXL";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "CYM") {
        document.querySelector("#team-leader").value = "MEF";

        document.querySelector("#admin-assistant").value = "NXL";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "KDB") {
        document.querySelector("#team-leader").value = "MEF";

        document.querySelector("#admin-assistant").value = "NXL";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "SXF") {
        document.querySelector("#team-leader").value = "MEF";

        document.querySelector("#admin-assistant").value = "NXL";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "BYC") {
        document.querySelector("#team-leader").value = "CYS";

        document.querySelector("#admin-assistant").value = "AYF";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "CZL") {
        document.querySelector("#team-leader").value = "CYS";

        document.querySelector("#admin-assistant").value = "AYF";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "JNT") {
        document.querySelector("#team-leader").value = "CYS";

        document.querySelector("#admin-assistant").value = "AYF";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "RXA") {
        document.querySelector("#team-leader").value = "CYS";

        document.querySelector("#admin-assistant").value = "AYF";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "SXH") {
        document.querySelector("#team-leader").value = "ARD";

        document.querySelector("#admin-assistant").value = "RXW";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "JML") {
        document.querySelector("#team-leader").value = "CYS";

        document.querySelector("#admin-assistant").value = "AYF";

        document.querySelector("#team-leader").classList.remove("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else {
        document.querySelector("#team-leader").value =
            "Incorrect Initials of Paralegal";

        document.querySelector("#admin-assistant").value =
            "Incorrect Initials of Paralegal";

        document.querySelector("#team-leader").classList.add("text-red-500");

        document
            .querySelector("#admin-assistant")
            .classList.add("text-red-500");
    }
});
