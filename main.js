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

// paralegal's tl and aa
function authorLeadAndAss(e) {
    switch (e.target.value) {
        case "ARD".toLowerCase():
        case "ARD".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "KED";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "CYS".toLowerCase():
        case "CYS".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "TMO".toLowerCase():
        case "TMO".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "IXC";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "MEF".toLowerCase():
        case "MEF".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "KXP";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "LMA".toLowerCase():
        case "LMA".toUpperCase():
            teamLeader.value = "   ";
            adminAssistant.value = "RXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "HXP".toLowerCase():
        case "HXP".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "IXC";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "KKM".toLowerCase():
        case "KKM".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "IXC";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "NVP".toLowerCase():
        case "NVP".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "KXP";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "SZT".toLowerCase():
        case "SZT".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "KXP";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "DMP".toLowerCase():
        case "DMP".toUpperCase():
            teamLeader.value = "LMA";
            adminAssistant.value = "RXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "SXB".toLowerCase():
        case "SXB".toUpperCase():
            teamLeader.value = "LMA";
            adminAssistant.value = "RXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "LAM".toLowerCase():
        case "LAM".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "NHM".toLowerCase():
        case "NHM".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "NXA".toLowerCase():
        case "NXA".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "JXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "RHH".toLowerCase():
        case "RHH".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "JXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "VSA".toLowerCase():
        case "VSA".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "JXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "RMF".toLowerCase():
        case "RMF".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "OXO";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "RYE".toLowerCase():
        case "RYE".toUpperCase():
            teamLeader.value = "TMO";
            adminAssistant.value = "OXO";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "BJT".toLowerCase():
        case "BJT".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "CYM".toLowerCase():
        case "CYM".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "KDB".toLowerCase():
        case "KDB".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "SXF".toLowerCase():
        case "SXF".toUpperCase():
            teamLeader.value = "MEF";
            adminAssistant.value = "NXL";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "BYC".toLowerCase():
        case "BYC".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "CZL".toLowerCase():
        case "CZL".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "JNT".toLowerCase():
        case "JNT".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "RXA".toLowerCase():
        case "RXA".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "SXH".toLowerCase():
        case "SXH".toUpperCase():
            teamLeader.value = "ARD";
            adminAssistant.value = "RXW";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        case "JML".toLowerCase():
        case "JML".toUpperCase():
            teamLeader.value = "CYS";
            adminAssistant.value = "AYF";
            teamLeader.classList.remove("text-red-500");
            adminAssistant.classList.remove("text-red-500");
            break;
        default:
            teamLeader.value = "Incorrect Initials of Paralegal";
            adminAssistant.value = "Incorrect Initials of Paralegal";
            teamLeader.classList.add("text-red-500");
            adminAssistant.classList.add("text-red-500");
    }
}
