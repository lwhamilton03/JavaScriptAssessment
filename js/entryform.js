function entrySubmit(){
    console.log("in function");

    var checkVal = true; 
    console.log(checkVal);

    if(!checkName()) { 
          checkVal = false; 
      } 
    if(!checkAge()) { 
         checkVal= false; 
     } 
        if(!checkAddress())  { 
         checkVal= false; 
     } 
        if(!checkPostcode()) { 
         checkVal= false; 
     } 
     if(!checkEmail())  { 
         checkVal= false; 
     } 
    
    if(checkVal){
            return true;
        }

    window.alert("Please Fill in the Entry Form Correctly");
    return false;    
}

function checkName(){
    var getNameValue = document.getElementById("name").value;
    var check1 = /^[a-zA-Z]+$/; 

    if(getNameValue == ""){
        console.log("Field Empty: Name");
        document.getElementById("name").style.backgroundColor = "red"; 
        document.getElementById("nameOut").innerHTML = " Name Field is Empty";  
        
        //document.getElementById("nameOut") = "Name Field Empty";
        //window.alert("Name Field Empty"); 
    return false; 
    }

    if(!(getNameValue.match(check1))){
        console.log("Invalid Name Input");
        document.getElementById("name").style.backgroundColor = "red"; 
        document.getElementById("nameOut").innerHTML = " Name Field is Invalid"; 
        //document.write("Invalid Name Input"); 
        return false; 
    }
    return true; 
}

function checkAge(){
    var getAgeValue = document.getElementById("dob").value;
    var check2 = /^(\d{1,2}\/\d{1,2}\/\d{4})/; 
    if(getAgeValue == ""){
        console.log("Field Empty: DOB"); 
        document.getElementById("ageOut").innerHTML = "DOB Field is Empty"; 
        //window.alert("DOB Field Empty"); 
        return false; 
    }

    if(!(getAgeValue.match(check2))){
        console.log("Invalid DOB Input"); 
        //document.write("Invalid Input"); 
        document.getElementById("ageOut").innerHTML = "DOB Field is Invalid";
    }
    return true; 

}

function checkAddress(){
 var getAddValue = document.getElementById("address").value;
    var check3 = /^([A-Za-z0-9-]+$)/; 

    if(getAddValue == ""){
        console.log("Field Empty: Address"); 
        document.getElementById("addOut").innerHTML = "Address Field is Empty"; 
        //document.write("Address Field Empty"); 
        return false; 
    }

    if(!(getAddValue.match(check2))){
        console.log("Invalid Address Input"); 
        document.getElementById("addOut").innerHTML = "Address Field is Invalid"; 
        //document.write("Invalid Input"); 
    }
    return true; 

}
function checkPostcode(){
    var getPostValue = document.getElementById("postcode").value;
    var check4 = /^([A-Za-z0-9-]+$)/; 

    if(getPostValue == ""){
        console.log("Field Empty: Postcode"); 
        document.getElementById("postOut").innerHTML = "Postcode Field is Empty"; 
        //document.write("Postcode Field Empty"); 
        return false; 
    }

    if(!(getPostValue.match(check4))){
        console.log("Invalid Postcode Input"); 
        document.getElementById("postOut").innerHTML = "Postcode Field is Empty"; 
        //document.write("Invalid Input"); 
    }
    return true; 
}
function checkEmail(){
    var getEmailValue = document.getElementById("email").value;
    var check5 = /^(\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/; 

    if(getEmailValue == ""){
        console.log("Field Empty: Email"); 
        document.getElementById("emailOut").innerHTML = "Email Field is Empty"; 
        //document.write("Name Field Empty"); 
        return false; 
    }

    if(!(getEmailValue.match(check5))){
        console.log("Invalid Email Input"); 
        document.getElementById("emailOut").innerHTML = "Email Field is Invalid"; 
        //document.write("Invalid Input"); 
    }
    return true; 

}