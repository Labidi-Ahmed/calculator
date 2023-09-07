let currentNum="";
let previousNum="";
let operator="";


const display = document.querySelector(".display");
const previous = document.querySelector(".previous");
const current = document.querySelector(".current");
const numbers = document.querySelectorAll('.number');
const operators=document.querySelectorAll('.operator');
const clearButt=document.querySelector('#clear');
const deleteButt=document.querySelector('#delete');
const equal=document.querySelector('#equal');
const decimal=document.querySelector('.decimal');



decimal.addEventListener('click',()=>{
    if (currentNum.includes('.')){
        return;

    }
    else{
        currentNum+='.'
        current.innerText=currentNum;
    }
})
// calculate when we click on =
cle="0123456789"
equal.addEventListener('click',()=>{
    if(previousNum!=="" && currentNum!==""){
        calculate();
      }
    
    
})


//Clear the calculator
clearButt.addEventListener('click',(e)=>{
    current.innerText="";
    previous.innerText="";
    currentNum="";
    previousNum="";
    operator="";
    
})
//delte
deleteButt.addEventListener('click',()=>{
    if(currentNum!=""){
        currentNum=currentNum.slice(0,-1);

        current.innerText=currentNum;

    }
   
})


// adding numbers to display
numbers.forEach(number=>{
    number.addEventListener('click',(e)=>{
        handleNumber(e.target.innerText);
    })
})
// adding operators to display
operators.forEach(operator=>{
    operator.addEventListener('click',(e)=>{
        handleOperator(e.target.innerText);
       
    })
})




function handleNumber(num){
    
    if(currentNum.length<=9){
        currentNum+=num;
    current.innerText=currentNum;

    }
    


}

function handleOperator(op){
    
    operator=op;
  if(previousNum!=="" && currentNum!==""){
    calculate();
  }
    
    previousNum=currentNum;
    currentNum="";
    previous.innerText=previousNum+" "+op;
    current.innerText=currentNum;
        
    


}

function calculate(){
    previousNum=Number(previousNum);
    currentNum=Number(currentNum);
    if(operator=="+"){previousNum=add(previousNum,currentNum);}
    if(operator=="-"){previousNum=subtract(previousNum,currentNum);}
    if(operator=="x"){previousNum=multiply(previousNum,currentNum);}
    if(operator=="/"){previousNum=divide(previousNum,currentNum);}
    
    currentNum=previousNum.toString();
    previousNum="";

    previous.innerText="";
    current.innerText=currentNum;


}





function add(a,b) {
    return (a)+(b);
}
function subtract(a,b) {
    return a-b;
}
function multiply(a,b) {
    return a*b;
}
function divide(a,b) {
    return a/b;
}

const gitIcon = document.querySelector("#gitIcon");
gitIcon.addEventListener('click', () => {
    window.open("https://github.com/Labidi-Ahmed");
});
