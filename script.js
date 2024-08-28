// scripts.js

// Firebase configuration
const firebaseConfig = {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDqhvFzPO3iPxWQis4Hu_IrMl1Se6mMdA",
  authDomain: "lost-and-found-93a0c.firebaseapp.com",
  databaseURL: "https://lost-and-found-93a0c-default-rtdb.firebaseio.com/",
  projectId: "lost-and-found-93a0c",
  storageBucket: "lost-and-found-93a0c.appspot.com",
  messagingSenderId: "692970744338",
  appId: "1:692970744338:web:ae36825735be50f2ba46cb",
  measurementId: "G-5V5TV76WVV"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Now your existing JavaScript code can interact with Firebase
document.getElementById("itemForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get values from the form
    const itemType = document.getElementById("itemType").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const itemDescription = document.getElementById("itemDescription").value;
    const itemContact = document.getElementById("itemContact").value;

    // Create a new item in Firebase
    const newItemRef = database.ref('items').push();
    newItemRef.set({
        type: itemType,
        description: itemDescription,
        location: itemLocation,
        contact: itemContact
    });

    // Clear the form
    document.getElementById("itemForm").reset();
});

// Retrieve data from Firebase and display it
database.ref('items').on('child_added', function(snapshot) {
    const item = snapshot.val();

    const itemElement = document.createElement("div");
    itemElement.classList.add("item");
    itemElement.innerHTML = `
        <h3>${item.type.charAt(0).toUpperCase() + item.type.slice(1)} Item</h3>
        <p><strong>Description:</strong> ${item.description}</p>
        <p><strong>Location:</strong> ${item.location}</p>
        <p><strong>Contact:</strong> ${item.contact}</p>
    `;

    document.getElementById("itemsList").appendChild(itemElement);
});
