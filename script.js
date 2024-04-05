function Clicked(){

      //ENTER KEY PRESSED
      var inputs = document.querySelectorAll('input[type="text"]');
      inputs.forEach(function(input, index) {
        input.addEventListener('keypress', function(event) {
            // Check if Enter key is pressed
            if (event.key === 'Enter') {
                // Focus on the next input field
                var nextIndex = index + 1;
                if (nextIndex < inputs.length) {
                    inputs[nextIndex].focus();
                }
            }
        });
    });

    var name = document.getElementById('Name').value;
    var course = document.getElementById('Course').value;
    var year = document.getElementById('Year').value;
    var section = document.getElementById('Section').value;
    var id = document.getElementById('StudentID').value;
    var phone = document.getElementById('PhoneNumber').value;
    var email = document.getElementById('Email').value;
    var color = document.getElementById('Color').value;
    var size = document.getElementById('Size').value;
    var quan = parseInt(document.getElementById('Quantity').value);
    var randomNumber = Math.floor(Math.random() * 100000000);
    var price = 220;

    // var div = document.getElementById('center');
    // if (div.style.display === 'none') {
    //     div.style.display = 'block'; // Change to 'block' to show div
    // } 
    
    if (name === "" || course === "" || year === "" || section === "" || id === "" || phone === "" || email === "") {
        document.getElementById('warn').innerHTML = "*All fields must be filled!";
    } else {
        document.getElementById('tracknum').innerHTML = randomNumber;
        document.getElementById('disName').innerHTML = "Name: " + name;
        document.getElementById('disCourse').innerHTML = "Course: " + course;
        document.getElementById('disYear').innerHTML = "Year: " + year;
        document.getElementById('disSection').innerHTML = "Section: " + section;
        document.getElementById('disID').innerHTML = "Student ID: " + id;
        document.getElementById('disPhone').innerHTML = "Phone Number: " + phone;
        document.getElementById('disEmail').innerHTML = "Email: " + email;
        document.getElementById('disColor').innerHTML = "Color: " + color;
        document.getElementById('disSize').innerHTML = "Size: " + size;
        document.getElementById('disQuan').innerHTML = "Quantity: " + quan;
        document.getElementById('tr').innerHTML="TRACKING  NUMBER";

        document.getElementById('note').innerHTML="*1(ONE) ITEM PER TRANSACTION";

        // Calculate total price
        var totalPrice = price * quan;
        document.getElementById('total').innerHTML = "TOTAL:₱ " + totalPrice;

        //BARCODE
        var textToBarcode = randomNumber;
        JsBarcode("#barcode", textToBarcode);
    }

    var div = document.getElementById('cent');
    if (div.style.display === 'none') {
        div.style.display = 'block'; // Change to 'block' to show div
    } else {
        div.style.display = 'none'; // Hide the div
    }


    var inputs = document.querySelectorAll('input[type="text"]');

    fetch('receipt.html')
    .then(response => response.text())
    .then(data => {
        // Insert the content into the receiptContainer div
        document.getElementById('right-div').innerHTML = data;
    })
    .catch(error => console.error('Error:', error));
            
  
}
