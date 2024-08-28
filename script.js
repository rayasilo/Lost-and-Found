// scripts.js
document.getElementById("itemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const itemType = document.getElementById("itemType").value;
    const itemDescription = document.getElementById("itemDescription").value;
    document.getElementById("itemLocation").value;
    const itemContact = document.getElementById("itemContact").value;

    // Create a new item entry
    const item = document.createElement("div");
    item.classList.add("item");

    // Set the content of the item
    item.innerHTML = `
        <h3>${itemType.charAt(0).toUpperCase() + itemType.slice(1)} Item</h3>
        <p><strong>Description:</strong> ${itemDescription}</p>
        <p><strong>Contact:</strong> ${itemContact}</p>
    `;

    // Append the new item to the items list
    document.getElementById("itemsList").appendChild(item);

    // Clear the form
    document.getElementById("itemForm").reset();
});