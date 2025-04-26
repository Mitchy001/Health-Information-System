// Wait for the DOM to fully load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    const registerForm = document.getElementById("register-form");
  
    // Add event listener to handle form submission
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission behavior (page reload)
  
      // Get the form field values
      const fullname = document.getElementById("client-fullname").value;
      const age = document.getElementById("client-age").value;
      const gender = document.getElementById("client-gender").value;
      const address = document.getElementById("client-address").value;
  
      // Create a client object to hold the data
      const newClient = {
        fullname: fullname,
        age: age,
        gender: gender,
        address: address,
      };
  
      // Display the client data in the console (for now)
      console.log("New Client Registered:", newClient);
  
      // You can replace the following with your actual backend logic to save the client data
      // For example, you could send the data to a server API:
      // fetch('/api/clients', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(newClient)
      // });
  
      // Reset the form fields after submission
      registerForm.reset();
  
      // Optionally, show a success message
      alert("Client Registered Successfully!");
    });
  });


  // Dummy data for client records (For demo purposes)
const clients = [
  { id: "123", fullname: "Mitchell Kemunto", age: 30, gender: "Male", address: "123 Main St", programs: ["TB", "HIV"] },
  { id: "124", fullname: "Mathews Mayenga", age: 25, gender: "Female", address: "456 Elm St", programs: ["Malaria"] }
];

// Search for existing client
function searchClient() {
  const query = document.getElementById('search-query').value.toLowerCase();

  const client = clients.find(c => c.fullname.toLowerCase().includes(query) || c.id.includes(query));

  if (client) {
    alert(`Client Found: ${client.fullname}`);
  } else {
    alert("No client found with that name or ID.");
  }
}

// Handle form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Gather form data
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const address = document.getElementById('address').value;
  const programs = document.getElementById('programs').value;

  // Here you can add the client to your database or collection
  console.log('Client Registered:', { name, age, gender, address, programs });

  // Notify the user that registration was successful
  alert('Client Registered Successfully!');
});

  