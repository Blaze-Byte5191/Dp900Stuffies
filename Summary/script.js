// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Map button text to section IDs
  const buttonMap = {
    "OLTP vs OLAP": "oltp-olap",
    "Relational vs Non-Relational Databases(NoSQL)": "relational-nosql",
    "Azure SQL Database vs Managed Instance vs SQL VM": "azure-sql",
    "Blob Storage vs Files vs Table Storage": "blob-files-table",
    "Cosmos DB API's": "cosmos-db",
    "Data Warehouse vs Data Lake": "warehouse-lake",
    "Batch vs Streaming": "batch-streaming",
    "Azure Databricks": "databricks",
    "Power BI": "power-bi",
    "Core Data Concepts": "cdc",
    "DP-900 Quick Memory Sheet":"memory-sheet",
    "SQL Basics":"sql-basics",
    "Data Roles":"roles"
  };

  // Attach event listeners to all buttons
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      const targetId = buttonMap[button.textContent.trim()];
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
});

const backToTopBtn = document.getElementById("backToTop");

// Show button after scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Scroll to top when clicked
backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
