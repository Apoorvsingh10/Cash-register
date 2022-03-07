const billAmount=document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkBtn= document.querySelector("#check-btn");
const  message=document.querySelector("#error-message");
const noOfNotes    =document.querySelectorAll(".number-of-notes")
const  availableNumberOfNotes=[2000,500,100,20,10,5,1]
function  functionValidation(){
    // hideMessage();
    if(billAmount.value>0){
        if(cashGiven.value>billAmount.value){
            difference=cashGiven.value-billAmount.value
            methodFunction( difference);
        }
        else{
            // showMessage("do u want to wash dishes?");
            message.style.display="block";
            message.innerText="Do u want to wash dishes????";
        }
              
    }
    else{
        // showMessage("what do u want ")
        message.style.display="block";
        message.innerText="what r u here for??";
    }
}


// function showMessage(msg){

//     message.style.display="block";
//     msg=message.innerText;
//     console.log("showMessage")}


function  hideMessage(){
    message.style.display= "none";
}

function methodFunction(){ 
    for(i=0;i<availableNumberOfNotes.length;i++)
    {
        const NumberOfNotes=Math.trunc( difference/availableNumberOfNotes[i]);
      difference=  difference%availableNumberOfNotes[i];
        
        
        noOfNotes[i].innerText=NumberOfNotes;
        console.log("hwyuu");

    }

}


checkBtn.addEventListener("click",functionValidation);













