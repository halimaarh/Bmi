import { bmivalue} from "../services.js";
import bmiresult from "./bmresult.js"
//add event for submit
var submitbutton= document.getElementById("submit");
submitbutton.addEventListener("click", calbmi);
function calbmi(e){
    e.preventDefault();
//extract the value height
var  height= document.getElementById("h").value;
//extract the value of weight
var  weight= document.getElementById("w").value;
//calculate bmi
var bmi = bmivalue(weight,height);
//get the result for the calculate bmi
var result = bmiresult(bmi);
//add bmi to span element
var finalbmivalue=document.getElementById("bmival");
finalbmivalue.innerHTML=bmi;
// add result to  span
var finalresult=document.getElementById("bmivalresult");
finalresult.innerHTML=result;
}


