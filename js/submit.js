function submitName(){
    
    // var requestName = "js/data.js"; 
    // var request = new XMLDocument(); 

    // request.open('GET', requestName);
    // request.responseType = 'JSON';
    // request.send(); 
    // request.onload = function(){

    //     var names = request.response; 
    // names = JSON.parse(names); 
        console.log(names);
        var checks = true; 
        if(document.getElementById("nameInput").value == ""){
            document.getElementById("nameInput").style.backgroundColor = "red";
            window.alert("The Name Field is Empty");
            return false; 
        }
        //document.write(names.squadName);
       // console.log(names.squadName)
        var count = 0; 

        console.log(count);
             for(squad in names.members){
               // document.write("<br/>");
                console.log("in the for loop");
                   if(names.members[squad].name == document.getElementById('nameInput').value){
                    // var newPara = document.createElement('p');
                    // var info = "<br/> Name: " + names.members[squad].name + "<br/> Age: " + names.members[squad].age + "<br/> Secret Identity: " + names.members[squad].secretIdentity;
                    // var text = document.createTextNode(info);
                    // newPara.appendChild(text); 
                    // document.getElementById('showInfo').appendChild(newPara); 
               document.write("<br/> Name: " + names.members[squad].name);
               document.write("<br/> Age: " + names.members[squad].age);
               document.write("<br/> Secret Identity: " + names.members[squad].secretIdentity);
                
                for(skill in names.members[squad].skills){
                  count += 1;
                    console.log(count); 
                    document.write("<br/> Skill: " + count + "is " + names.members[squad].skills[skill]);
                
                   }
                   }
             }
                window.alert("There are no Trainers by the name " + document.getElementById('nameInput').value);
                document.getElementById("nameInput").style.backgroundColor = "red";
                return false;  
            }     
       
        
function findSkills(){
    if(document.getElementById("skillInput").value == ""){
            window.alert("The Skill Field is Empty");
            document.getElementById("skillInput").style.backgroundColor = "red";
            return false; 
        }
    
    console.log(names); 
    //coming out as soon as found, or not looping through all the different skills, look into why 
    for(squad in names.members){
        for(sk in names.members[squad].skills){
            if(names.members[squad].skills[sk] == document.getElementById('skillInput').value){
               document.write(names.members[squad].name); 
            }
        }
    }
    window.alert("No Trainer has that skill");
    document.getElementById("skillInput").style.backgroundColor = "red";
    console.log("no such skill")
    return false; 
}

// function findSkills(){
//     if(document.getElementById("skillInput").value == ""){
//             window.alert("The Skill Field is Empty");
//             document.getElementById("skillInput").style.backgroundColor = "red";
//             return false; 
//         }
//     //CODE NEEDS LOOKING AT TO ENSURE THAT ACTUALLY CHECKING THE SKILL AND OUTPUTTING ALL NAMES
//     console.log(names); 
//     var newPara = document.createElement('p');
//     var list = ""; 
//     var newText = document.createTextNode(list); 
//     newPara.appendChild(newText); 
//     var words = document.getElementById('showNames');
//     words.appendChild(newPara); 

//     for(squad in names.members){
//         for(sk in names.members[squad].skills){
//             if(names.members[squad].skills[sk] == document.getElementById('skillInput').value){
//                list += names.members[squad].name; 
//                // document.write(names.members[squad].name); 
//             }
//         }
//     }
//     window.alert("No Trainer has that skill");
//     document.getElementById("skillInput").style.backgroundColor = "red";
//     console.log("no such skill")
//     return false; 
// }

/*
function para()
{
    var words = document.getElementById("showInfo");
    if(words != undefined)
        {
            para.innerHTML = input; 
        }
}
*/ 

// function createText(input){
//         var newPara = document.createElement('p');
//         var textt = document.createTextNode(input); 
//         newPara.className = "details"; 
//         newPara.appendChild(textt); 

//         var words = document.getElementById('showInfo');
//         words.appendChild(newPara); 
// }
