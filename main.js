let matterNumberHeader = document.querySelector("#matter-number-header");
let lastNameHeader = document.querySelector("#last-name-header");
const matterNumber = document.querySelector("#matter-number");

// borrower variables
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

// security variables
const securityContainerArr = [];
for (let i = 1; i < 7; i++) {
    let security = document.querySelector(`#security-${i}-container`);
    securityContainerArr.push(security);
}
const securityAddressArr = [];
for (let i = 1; i < 7; i++) {
    let securityAddress = document.querySelector(`#security-${i}-address`);
    securityAddressArr.push(securityAddress);
}
const securityFullAddressArr = [];
const addSecurityBtn = document.querySelector("#add-security-button");
const removeSecurityBtn = document.querySelector("#remove-security-button");

// security purpose
const securityPurpose = [];
const securityPurposeRefinance = [];
for (let i = 1; i < 7; i++) {
    let securityPurpose = document.querySelector(
        `#security-${i}-radio-refinance`
    );
    securityPurposeRefinance.push(securityPurpose);
}
const securityPurposePurchase = [];
for (let i = 1; i < 7; i++) {
    let securityPurpose = document.querySelector(
        `#security-${i}-radio-purchase`
    );
    securityPurposePurchase.push(securityPurpose);
}
const securityPurposeFurther = [];
for (let i = 1; i < 7; i++) {
    let securityPurpose = document.querySelector(
        `#security-${i}-radio-further`
    );
    securityPurposeFurther.push(securityPurpose);
}
const securityPurposeClear = [];
for (let i = 1; i < 7; i++) {
    let securityPurpose = document.querySelector(`#security-${i}-radio-clear`);
    securityPurposeClear.push(securityPurpose);
}

// caseflow variables
const inputParalegal = document.querySelector("#paralegal-name");
const caseflowTabs = document.querySelectorAll(".caseflow-tab");
const caseflowTabsContents = document.querySelectorAll(
    ".caseflow-tabs-content"
);
const loanAmount = document.querySelector("#loan-amount");
const loanPurpose = document.querySelector("#loan-purpose");

// matter number event listener
matterNumber.addEventListener("change", e => {
    let matter = e.target.value;
    matterNumberHeader.textContent = matter;
});

// left content inputs event listers
loanAmount.addEventListener("change", function(e) {
    document.querySelector("#loan-amount-content").value = e.target.value;
});
loanPurpose.addEventListener("change", function(e) {
    document.querySelector("#loan-purpose-content").value = e.target.value;
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
            document.querySelector("#borrower-1-mailing-name").value = `${obj[
                "firstName"
            ].charAt(0)}${obj["middleName"]
                .split(" ")
                .map(s => s.charAt(0))
                .join("")} ${obj["lastName"]}`;
            document.querySelector("#borrower-1-first-name").value =
                obj["firstName"];
            document.querySelector("#borrower-1-middle-name").value =
                obj["middleName"];
            document.querySelector("#borrower-1-surname").value =
                obj["lastName"];
        } else if (this == document.querySelector("#borrower-2-name")) {
            pasteBorrowerOneName();
            document.querySelector("#borrower-2-mailing-name").value =
                obj["firstName"];
            document.querySelector("#borrower-2-first-name").value =
                obj["firstName"];
            document.querySelector("#borrower-2-middle-name").value =
                obj["middleName"];
            document.querySelector("#borrower-2-surname").value =
                obj["lastName"];
        }
    });
    borrowerFullNamesArr.push(obj);
}

// borrower p containers
const borrowerPContainersArr = [];
for (let i = 1; i < 7; i++) {
    let borrowerP = document.querySelector(`#borrower-${i}-p-container`);
    borrowerPContainersArr.push(borrowerP);
}

// security existing containers
const securityExistingContainers = [];
for (let i = 1; i < 7; i++) {
    let securityExisting = document.querySelector(
        `#security-${i}-existing-container`
    );
    securityExistingContainers.push(securityExisting);
}

// securities address event listener
for (let i = 0; i < 6; i++) {
    let obj = {};
    securityAddressArr[i].addEventListener("change", function(e) {
        let securityAddress = e.target.value
            .toLowerCase()
            .split(" ")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1));
        obj["postalCode"] = securityAddress.pop();
        obj["state"] = securityAddress.pop().toUpperCase();
        if (securityAddress.includes("Alley")) {
            const pattern = "Alley";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Arcade")) {
            const pattern = "Arcade";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Avenue")) {
            const pattern = "Avenue";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Boulevard")) {
            const pattern = "Boulevard";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Bypass")) {
            const pattern = "Bypass";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Circuit")) {
            const pattern = "Circuit";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Close")) {
            const pattern = "Close";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Corner")) {
            const pattern = "Corner";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Court")) {
            const pattern = "Court";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Crescent")) {
            const pattern = "Crescent";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Cul-de-sac")) {
            const pattern = "Cul-de-sac";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Drive")) {
            const pattern = "Drive";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Esplanade")) {
            const pattern = "Esplanade";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Green")) {
            const pattern = "Green";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Grove")) {
            const pattern = "Grove";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Highway")) {
            const pattern = "Highway";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Junction")) {
            const pattern = "Junction";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Lane")) {
            const pattern = "Lane";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Link")) {
            const pattern = "Link";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Mews")) {
            const pattern = "Mews";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Parade")) {
            const pattern = "Parade";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Place")) {
            const pattern = "Place";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Ridge")) {
            const pattern = "Ridge";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Road")) {
            const pattern = "Road";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Square")) {
            const pattern = "Square";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Street")) {
            const pattern = "Street";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        } else if (securityAddress.includes("Terrace")) {
            const pattern = "Terrace";
            obj["suburb"] = securityAddress
                .splice(securityAddress.indexOf(pattern) + 1)
                .join(" ");
        }
        obj["secAddress"] = securityAddress.join(" ");
        if (obj.secAddress.includes("Unit")) {
            obj.secAddress;
        } else if (obj.secAddress.includes("/")) {
            obj.secAddress = `Unit ${obj.secAddress}`;
        }
    });
    securityFullAddressArr.push(obj);
}

// securities purpose
for (let i = 0; i < 6; i++) {
    securityPurposeRefinance[i].addEventListener("change", e => {
        if ((e.target.checked = true)) {
            securityPurpose[i] = "Refinance";
            if (securityPurpose.includes("Purchase")) {
                document
                    .querySelector("#solicitor-details-container")
                    .classList.remove("hidden");
                document
                    .querySelector("#contract-date-container")
                    .classList.remove("hidden");
            } else if (!securityPurpose.includes("Purchase")) {
                document
                    .querySelector("#solicitor-details-container")
                    .classList.add("hidden");
                document
                    .querySelector("#contract-date-container")
                    .classList.add("hidden");
            }
        }
    });
    securityPurposePurchase[i].addEventListener("change", e => {
        if ((e.target.checked = true)) {
            securityPurpose[i] = "Purchase";
            if (securityPurpose.includes("Purchase")) {
                document
                    .querySelector("#solicitor-details-container")
                    .classList.remove("hidden");
                document
                    .querySelector("#contract-date-container")
                    .classList.remove("hidden");
            } else if (!securityPurpose.includes("Purchase")) {
                document
                    .querySelector("#solicitor-details-container")
                    .classList.add("hidden");
                document
                    .querySelector("#contract-date-container")
                    .classList.add("hidden");
            }
        }
    });
    securityPurposeFurther[i].addEventListener("change", e => {
        if ((e.target.checked = true)) {
            securityPurpose[i] = "Further Advance";
            if (securityPurpose.includes("Purchase")) {
                document
                    .querySelector("#solicitor-details-container")
                    .classList.remove("hidden");
                document
                    .querySelector("#contract-date-container")
                    .classList.remove("hidden");
            } else if (!securityPurpose.includes("Purchase")) {
                document
                    .querySelector("#solicitor-details-container")
                    .classList.add("hidden");
                document
                    .querySelector("#contract-date-container")
                    .classList.add("hidden");
            }
        }
    });
    securityPurposeClear[i].addEventListener("change", e => {
        if ((e.target.checked = true)) {
            securityPurpose[i] = "Clear Title";
            if (securityPurpose.includes("Purchase")) {
                document
                    .querySelector("#solicitor-details-container")
                    .classList.remove("hidden");
                document
                    .querySelector("#contract-date-container")
                    .classList.remove("hidden");
            } else if (!securityPurpose.includes("Purchase")) {
                document
                    .querySelector("#solicitor-details-container")
                    .classList.add("hidden");
                document
                    .querySelector("#contract-date-container")
                    .classList.add("hidden");
            }
        }
    });
}
function pasteBorrowerOneName() {
    lastNameHeader.textContent = borrowerFullNamesArr[0].lastName;
    document.title = `${
        borrowerFullNamesArr[0].lastName
    }, ${borrowerFullNamesArr[0].firstName.charAt(0)}`;
}

// borrower buttons event listener
addBorrowerBtn.addEventListener("click", () => {
    if (borrowerContainerArr[1].classList.contains("hidden")) {
        borrowerContainerArr[1].classList.remove("hidden");
        borrowerContainerArr[1].classList.add("not-hidden");
        borrowerPContainersArr[1].classList.remove("hidden");
        removeBorrowerBtn.classList.remove("disable-button");
    } else if (borrowerContainerArr[2].classList.contains("hidden")) {
        borrowerContainerArr[2].classList.remove("hidden");
        borrowerContainerArr[2].classList.add("not-hidden");
        borrowerPContainersArr[2].classList.remove("hidden");
    } else if (borrowerContainerArr[3].classList.contains("hidden")) {
        borrowerContainerArr[3].classList.remove("hidden");
        borrowerContainerArr[3].classList.add("not-hidden");
        borrowerPContainersArr[3].classList.remove("hidden");
    } else if (borrowerContainerArr[4].classList.contains("hidden")) {
        borrowerContainerArr[4].classList.remove("hidden");
        borrowerContainerArr[4].classList.add("not-hidden");
        borrowerPContainersArr[4].classList.remove("hidden");
    } else if (borrowerContainerArr[5].classList.contains("hidden")) {
        borrowerContainerArr[5].classList.remove("hidden");
        borrowerContainerArr[5].classList.add("not-hidden");
        borrowerPContainersArr[5].classList.remove("hidden");
        addBorrowerBtn.classList.add("disable-button");
    }
});
removeBorrowerBtn.addEventListener("click", () => {
    if (removeBorrowerBtn.classList.contains("disable-button")) {
    } else if (confirm("Remove Borrower?")) {
        if (borrowerContainerArr[5].classList.contains("not-hidden")) {
            borrowerContainerArr[5].classList.add("hidden");
            borrowerContainerArr[5].classList.remove("not-hidden");
            borrowerPContainersArr[5].classList.add("hidden");
            document.querySelector("#borrower-6-name").value = "";
            document.querySelector("#borrower-6-salutation").value =
                "select-na";
            borrowerFullNamesArr.pop();
            addBorrowerBtn.classList.remove("disable-button");
        } else if (borrowerContainerArr[4].classList.contains("not-hidden")) {
            borrowerContainerArr[4].classList.add("hidden");
            borrowerContainerArr[4].classList.remove("not-hidden");
            borrowerPContainersArr[4].classList.add("hidden");
            document.querySelector("#borrower-5-name").value = "";
            document.querySelector("#borrower-5-salutation").value =
                "select-na";
            borrowerFullNamesArr.pop();
        } else if (borrowerContainerArr[3].classList.contains("not-hidden")) {
            borrowerContainerArr[3].classList.add("hidden");
            borrowerContainerArr[3].classList.remove("not-hidden");
            borrowerPContainersArr[3].classList.add("hidden");
            document.querySelector("#borrower-4-name").value = "";
            document.querySelector("#borrower-4-salutation").value =
                "select-na";
            borrowerFullNamesArr.pop();
        } else if (borrowerContainerArr[2].classList.contains("not-hidden")) {
            borrowerContainerArr[2].classList.add("hidden");
            borrowerContainerArr[2].classList.remove("not-hidden");
            borrowerPContainersArr[2].classList.add("hidden");
            document.querySelector("#borrower-3-name").value = "";
            document.querySelector("#borrower-3-salutation").value =
                "select-na";
            borrowerFullNamesArr.pop();
        } else if (borrowerContainerArr[1].classList.contains("not-hidden")) {
            borrowerContainerArr[1].classList.add("hidden");
            borrowerContainerArr[1].classList.remove("not-hidden");
            borrowerPContainersArr[1].classList.add("hidden");
            document.querySelector("#borrower-2-name").value = "";
            document.querySelector("#borrower-2-salutation").value =
                "select-na";
            borrowerFullNamesArr.pop();
            removeBorrowerBtn.classList.add("disable-button");
        }
    }
});

// security buttons event listener
addSecurityBtn.addEventListener("click", () => {
    if (securityContainerArr[1].classList.contains("hidden")) {
        securityContainerArr[1].classList.remove("hidden");
        securityContainerArr[1].classList.add("not-hidden");
        securityExistingContainers[1].classList.remove("hidden");
        removeSecurityBtn.classList.remove("disable-button");
    } else if (securityContainerArr[2].classList.contains("hidden")) {
        securityContainerArr[2].classList.remove("hidden");
        securityContainerArr[2].classList.add("not-hidden");
        securityExistingContainers[2].classList.remove("hidden");
    } else if (securityContainerArr[3].classList.contains("hidden")) {
        securityContainerArr[3].classList.remove("hidden");
        securityContainerArr[3].classList.add("not-hidden");
        securityExistingContainers[3].classList.remove("hidden");
    } else if (securityContainerArr[4].classList.contains("hidden")) {
        securityContainerArr[4].classList.remove("hidden");
        securityContainerArr[4].classList.add("not-hidden");
        securityExistingContainers[4].classList.remove("hidden");
    } else if (securityContainerArr[5].classList.contains("hidden")) {
        securityContainerArr[5].classList.remove("hidden");
        securityContainerArr[5].classList.add("not-hidden");
        securityExistingContainers[5].classList.remove("hidden");
        addSecurityBtn.classList.add("disable-button");
    }
});
removeSecurityBtn.addEventListener("click", () => {
    if (removeSecurityBtn.classList.contains("disable-button")) {
    } else if (confirm("Remove Security?")) {
        if (securityContainerArr[5].classList.contains("not-hidden")) {
            securityContainerArr[5].classList.add("hidden");
            securityContainerArr[5].classList.remove("not-hidden");
            securityExistingContainers[5].classList.add("hidden");
            document.querySelector("#security-6-address").value = "";
            securityFullAddressArr.pop();
            document.querySelector(
                "#security-6-radio-refinance"
            ).checked = false;
            document.querySelector(
                "#security-6-radio-purchase"
            ).checked = false;
            document.querySelector("#security-6-radio-further").checked = false;
            document.querySelector("#security-6-radio-clear").checked = false;
            securityPurpose.pop();
            console.log(securityPurpose);
            addSecurityBtn.classList.remove("disable-button");
        } else if (securityContainerArr[4].classList.contains("not-hidden")) {
            securityContainerArr[4].classList.add("hidden");
            securityContainerArr[4].classList.remove("not-hidden");
            securityExistingContainers[4].classList.add("hidden");
            document.querySelector("#security-5-address").value = "";
            securityFullAddressArr.pop();
            document.querySelector(
                "#security-5-radio-refinance"
            ).checked = false;
            document.querySelector(
                "#security-5-radio-purchase"
            ).checked = false;
            document.querySelector("#security-5-radio-further").checked = false;
            document.querySelector("#security-5-radio-clear").checked = false;
            securityPurpose.pop();
        } else if (securityContainerArr[3].classList.contains("not-hidden")) {
            securityContainerArr[3].classList.add("hidden");
            securityContainerArr[3].classList.remove("not-hidden");
            securityExistingContainers[3].classList.add("hidden");
            document.querySelector("#security-4-address").value = "";
            securityFullAddressArr.pop();
            document.querySelector(
                "#security-4-radio-refinance"
            ).checked = false;
            document.querySelector(
                "#security-4-radio-purchase"
            ).checked = false;
            document.querySelector("#security-4-radio-further").checked = false;
            document.querySelector("#security-4-radio-clear").checked = false;
            securityPurpose.pop();
        } else if (securityContainerArr[2].classList.contains("not-hidden")) {
            securityContainerArr[2].classList.add("hidden");
            securityContainerArr[2].classList.remove("not-hidden");
            securityExistingContainers[2].classList.add("hidden");
            document.querySelector("#security-3-address").value = "";
            securityFullAddressArr.pop();
            document.querySelector(
                "#security-3-radio-refinance"
            ).checked = false;
            document.querySelector(
                "#security-3-radio-purchase"
            ).checked = false;
            document.querySelector("#security-3-radio-further").checked = false;
            document.querySelector("#security-3-radio-clear").checked = false;
            securityPurpose.pop();
        } else if (securityContainerArr[1].classList.contains("not-hidden")) {
            securityContainerArr[1].classList.add("hidden");
            securityContainerArr[1].classList.remove("not-hidden");
            securityExistingContainers[1].classList.add("hidden");
            document.querySelector("#security-2-address").value = "";
            securityFullAddressArr.pop();
            document.querySelector(
                "#security-2-radio-refinance"
            ).checked = false;
            document.querySelector(
                "#security-2-radio-purchase"
            ).checked = false;
            document.querySelector("#security-2-radio-further").checked = false;
            document.querySelector("#security-2-radio-clear").checked = false;
            securityPurpose.pop();
            removeSecurityBtn.classList.add("disable-button");
        }
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
        document.querySelector("#team-leader").value = "  ";
        document.querySelector("#admin-assistant").value = "KED";
        document.querySelector("#team-leader").classList.remove("text-red-500");
        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "CYS") {
        document.querySelector("#team-leader").value = "  ";
        document.querySelector("#admin-assistant").value = "AYF";
        document.querySelector("#team-leader").classList.remove("text-red-500");
        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "TMO") {
        document.querySelector("#team-leader").value = "  ";
        document.querySelector("#admin-assistant").value = "IXC";
        document.querySelector("#team-leader").classList.remove("text-red-500");
        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "MEF") {
        document.querySelector("#team-leader").value = "  ";
        document.querySelector("#admin-assistant").value = "KXP";
        document.querySelector("#team-leader").classList.remove("text-red-500");
        document
            .querySelector("#admin-assistant")
            .classList.remove("text-red-500");
    } else if (e.target.value.toUpperCase() == "LMA") {
        document.querySelector("#team-leader").value = "  ";
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
