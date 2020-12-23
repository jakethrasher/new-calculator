const input1=document.getElementById('input-1');
const input2=document.getElementById('input-2');
const resultDisplay=document.getElementById('result-display');


const buttonsArray=document.querySelectorAll('button');

for(let button of buttonsArray){

    button.addEventListener('click',()=>{
        
        let num1=Number(input1.value);
        let num2=Number(input2.value);
        let result;
        
        if(button.id==="add-button"){
            result = num1 + num2;
        }else if(button.id==="subtract-button"){
            result= num1 - num2;
        }else if(button.id==="multiply-button"){
            result= num1 * num2;
        }else if(button.id==="divide-button"){
            result= num1 / num2;
        }else if(button.id==='clear-button'){
            input1.value='';
            input2.value='';
            result='';
        }
        resultDisplay.innerHTML = result;

    })
}