// ==================================================
// ELEMENTS REFERENCE
// ==================================================

const loader = document.querySelector(".loader");
const sections = document.querySelectorAll(".section");
const mainMockup = document.getElementById("mainMockup");

// ==================================================
// OBSERVER STATE
// ==================================================

let sectionObserver;
let mainMockupObserver;

// ==================================================
// FUNCTIONS
// ==================================================

function createSectionObserver() {
    return new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.2,
    });
}

function createMockupObserver() {
    return new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.8,
    });
}


function startSectionObserver() {
    if (sectionObserver || sections.length === 0) {
        return;
    }

    sectionObserver = createSectionObserver();
    mainMockupObserver = createMockupObserver();
    sections.forEach((section) => sectionObserver.observe(section));
    mainMockupObserver.observe(mainMockup);
}

// * FUNCTION TO HIDE THE LOADER AFTER 5 SECONDS
function hideLoader() {
    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
        startSectionObserver();
    }, 4500);
}

// ==================================================
// EVENT LISTENERS
// ==================================================

document.addEventListener("DOMContentLoaded", hideLoader);
