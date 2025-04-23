document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#searchMenu");
    const searchButton = document.querySelector("#searchBtn");
    const jobCards = document.querySelectorAll(".job-card");

    searchButton.addEventListener("click", () => {
        const searchTerm = searchInput.value.toLowerCase();
        jobCards.forEach(jobCard => {
            const jobTitle = jobCard.querySelector("h3").textContent.toLowerCase();
            if (jobTitle.includes(searchTerm)) {
                jobCard.style.display = "block"; // Show matching jobs
            } else {
                jobCard.style.display = "none"; // Hide non-matching jobs
            }
        });
    });
});

// document.addEventListener("DOMContentLoaded", () => {
//     const locationDropdown = document.getElementById("location");
//     const categoryDropdown = document.getElementById("category");
//     const jobCards = document.querySelectorAll(".job-card");

//     const filterJobs = () => {
//         const selectedLocation = locationDropdown.value.toLowerCase();
//         const selectedCategory = categoryDropdown.value.toLowerCase();

//         jobCards.forEach(jobCard => {
//             const jobLocation = jobCard.querySelector("p:nth-child(2)").textContent.toLowerCase(); // Assuming "Location" is the second <p>
//             const jobCategory = jobCard.querySelector("h3").textContent.toLowerCase(); // Assuming job title represents category

//             const matchesLocation = selectedLocation === "all" || jobLocation.includes(selectedLocation);
//             const matchesCategory = selectedCategory === "all" || jobCategory.includes(selectedCategory);

//             if (matchesLocation && matchesCategory) {
//                 jobCard.style.display = "block"; // Show matching jobs
//             } else {
//                 jobCard.style.display = "none"; // Hide non-matching jobs
//             }
//         });
//     };

//     locationDropdown.addEventListener("change", filterJobs);
//     categoryDropdown.addEventListener("change", filterJobs);
// });



// updated code here 
document.addEventListener("DOMContentLoaded", () => {
    const locationDropdown = document.getElementById("location");
    const categoryDropdown = document.getElementById("category");
    const jobCards = document.querySelectorAll(".job-card");

    // Separate filtering by location
    const filterByLocation = () => {
        const selectedLocation = locationDropdown.value.toLowerCase();

        jobCards.forEach(jobCard => {
            const jobLocation = jobCard.querySelector("p:nth-child(2)").textContent.toLowerCase(); // "Location" is in the second <p> tag

            if (selectedLocation === "all" || jobLocation.includes(selectedLocation)) {
                jobCard.style.display = "block"; // Show jobs matching location
            } else {
                jobCard.style.display = "none"; // Hide non-matching jobs
            }
        });
    };

    // Separate filtering by category
    const filterByCategory = () => {
        const selectedCategory = categoryDropdown.value.toLowerCase();

        jobCards.forEach(jobCard => {
            const jobCategory = jobCard.querySelector("h3").textContent.toLowerCase(); // Assuming job title represents category

            if (selectedCategory === "all" || jobCategory.includes(selectedCategory)) {
                jobCard.style.display = "block"; // Show jobs matching category
            } else {
                jobCard.style.display = "none"; // Hide non-matching jobs
            }
        });
    };

    // Add event listeners for separate filtering
    locationDropdown.addEventListener("change", filterByLocation);
    categoryDropdown.addEventListener("change", filterByCategory);
});
