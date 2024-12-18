// index.js

function submitData(name, email) {
    // Create the data object to send in the request body
    const data = { name, email };
  
    // Return the fetch chain
    return fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        // Check if the response is successful
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json(); // Parse JSON from response
      })
      .then(parsedResponse => {
        // Append the new ID to the DOM
        const newId = parsedResponse.id;
        const body = document.querySelector('body');
        const idElement = document.createElement('p');
        idElement.textContent = `New ID: ${newId}`;
        body.appendChild(idElement);
      })
      .catch(error => {
        // Handle errors and append the error message to the DOM
        const body = document.querySelector('body');
        const errorElement = document.createElement('p');
        errorElement.textContent = `Error: ${error.message}`;
        body.appendChild(errorElement);
      });
  }
  
