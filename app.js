   
   document.addEventListener("DOMContentLoaded", function () {
   document.getElementById("searchButton").addEventListener("click", function() {
    console.log("Button clicked!")
    const searchField = document.getElementById("searchField");
    const resultDiv = document.getElementById("result");
    const searchQuery = searchField.value.trim(); // Get and trim the input 
    const httpRequest = new XMLHttpRequest();
    let url = `http://localhost/info2180-lab4/superheroes.php?query=${query}`;


     if (!searchQuery) {
        resultDiv.innerHTML = "Please enter a superhero name or alias."; //validate input
        return;
    }
 
     // Set the onreadystatechange callback properly
     httpRequest.onreadystatechange = function() {
         if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
                 // Successful request, display the response
                 let response = httpRequest.responseText;
                 alert(response);
             } else {
                resultDiv.innerHTML = response; // Display response in the result div
                 // Handle errors
                 resultDiv.innerHTML = "There was a problem with the request.";
             }
         }
     };
 
     // Open and send the GET request
     httpRequest.open('GET', url, true);
     httpRequest.send();


   })});
