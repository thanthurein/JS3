var aungaungOfMass = 200
var aungaungOfHeight = 5
var aungaungOfBMI = aungaungOfMass / aungaungOfHeight **2
console.log(aungaungOfBMI)

var mgmgOfMass = 250
var mgmgOfHeight = 6
var mgmgOfBMI = mgmgOfMass / mgmgOfHeight **2;
console.log(mgmgOfBMI)

if(aungaungOfBMI <= mgmgOfBMI){
     
   console.log("aungaung is win")

}else if(mgmgOfBMI <= aungaungOfBMI){
    
    console.log("mgmg is lost")
    
}

(aungaungOfBMI <= mgmgOfBMI) ? console.log("Win") : console.log("lose")


let job = "Developer"


switch(job){
   case "Developer" : console.log("My job is" + ' ' + job)
   break;

   case "Teacher" : console.log("My job is" + ' ' + job)
   break;

   default:
       console.log("My job is" + ' ' + "109 110")
}