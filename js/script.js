document.addEventListener("DOMContentLoaded", function () {
    const flavoursLink = document.querySelector(".flavours-link");
    const funFactsLink = document.querySelector(".fun-facts-link");

    if (flavoursLink) {
        flavoursLink.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.getElementById("flavours");

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    }

    if (funFactsLink) {
        funFactsLink.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.getElementById("fun-facts");

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth",
                });
            }
        });
    }
});
