document.addEventListener("DOMContentLoaded", function () {
    // Function to view invoice history
    window.viewInvoiceHistory = function () {
        var historySection = document.getElementById("invoice-history");
        if (historySection.style.display === "none" || historySection.style.display === "") {
            historySection.style.display = "block";
        } else {
            historySection.style.display = "none";
        }
    };

    // Form input validation
    const inputFields = document.querySelectorAll(".input-field");
    inputFields.forEach(input => {
        input.addEventListener("input", function () {
            if (this.value.trim() === "") {
                this.style.border = "2px solid red";
            } else {
                this.style.border = "2px solid green";
            }
        });
    });

    // Dropdown validation
    const dropdown = document.querySelector(".dropdown");
    dropdown.addEventListener("change", function () {
        if (this.value === "") {
            this.style.border = "2px solid red";
        } else {
            this.style.border = "2px solid green";
        }
    });
});
