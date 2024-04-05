function checkStudentId() {
    
    const existingIds = ['8220831', '8220831', '8220833'];

    
    const inputId = document.getElementById('studentID').value;

    // Check if the inputted ID exists in the list
    if (existingIds.includes(inputId)) {
      
      window.location.href = 'file:///C:/Users/dennt/Documents/ssg-system/home.html';
    } 
    else if(document.getElementById('studentID').value===''){
      document.getElementById('warning').innerHTML="*FIELD IS EMPTY";
    }
    else {
      document.getElementById('warning').innerHTML="*ID NUMBER DO NOT EXIST";
    }
  }