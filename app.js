   document.getElementById("searchButton").addEventListener("click", function() {
     const httpRequest = new XMLHttpRequest();
     let url = "http://localhost/info2180-lab4/superheroes.php";
 
     // Set the onreadystatechange callback properly
     httpRequest.onreadystatechange = function() {
         if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
                 // Successful request, display the response
                 let response = httpRequest.responseText;
                 alert(response);
             } else {
                 // Handle errors
                 alert('There was a problem with the request.');
             }
         }
     };
 
     // Open and send the GET request
     httpRequest.open('GET', url, true);
     httpRequest.send();
 });
 
 