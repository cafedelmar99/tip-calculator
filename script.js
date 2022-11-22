let bill = document.getElementById("total");
let buttons = document.querySelectorAll(".button")
let tipAmountElement = document.getElementById("tipAmount");
let totalAmountElement = document.getElementById("totalPerPerson");
let numPeople = document.getElementById("numPeople");
let customTipPercentage = document.getElementById("custom-tip-percentage");
let zeroPeople = document.getElementById("zero-people");
let resetButton = document.getElementById("reset");

let tipPercentage = 0;
let people = 0;
let billPrice = 0;
let totalPerPerson = 0;

bill.addEventListener('input', () =>{
    billPrice = bill.value;
    calculateTip(billPrice, tipPercentage, people);
    calculateTotal(billPrice,tipPercentage,people);
}) 

buttons.forEach((x, i) => {
    x.addEventListener("click",()=>{
        activeRemove();
        x.classList.add("active");
        tipPercentage = x.value;
        calculateTip(billPrice, tipPercentage, people);
        calculateTotal(billPrice,tipPercentage,people);
    })
})



numPeople.addEventListener('input', () => {
    people = numPeople.value;
    if(people == 0){
        zeroPeople.style.display = "block";
        numPeople.style.outline = "1px solid red"
    }else{
        numPeople.style.outline = "none";
        zeroPeople.style.display = "none";
        calculateTip(billPrice, tipPercentage, people);
        calculateTotal(billPrice,tipPercentage,people);
    }
})

customTipPercentage.addEventListener('input', () =>{
    tipPercentage = Number(customTipPercentage.value);
    activeRemove();
    calculateTip(billPrice, tipPercentage, people);
    calculateTotal(billPrice,tipPercentage,people);
})

resetButton.addEventListener("click",()=>{
    bill.value = 0;
    customTipPercentage.value = 0;
    numPeople.value = 0;
    activeRemove();
    totalAmountElement.textContent = "$0.00";
    tipAmountElement.textContent = "$0.00";
})

function activeRemove(){
    let active = document.querySelector(".active");
    if(active){
        active.classList.remove("active");
    }
}
function calculateTip(totalbill,tippercentage,people){
    if(totalbill > 0 && tippercentage > 0 && people > 0){
        if(tipPercentage <= 100){    
            let tipAmount = (totalbill * tippercentage/100) / people;
            tipAmountElement.textContent = "$" + tipAmount;
        }
    }
    
}

function calculateTotal(totalBill,totalTipAmount,people){
    if( totalBill > 0 && totalTipAmount > 0 && people > 0){
        if(tipPercentage <= 100){
            let totalAmount = ((Number(totalBill)+(totalBill*(totalTipAmount/100)))/people);
            totalAmountElement.textContent = "$" + totalAmount;
        }
    }
    
}



