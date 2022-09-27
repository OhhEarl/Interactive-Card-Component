const forms = document.getElementById("form");
const cvc = document.getElementById("cvc");
const cvcErrors = document.getElementById
("cvc-format");


const cardError = document.getElementById("number-error");
const cardInput = document.getElementById('cardNumber')

const mmyyError = document.getElementById("date-format");
const yearInput = document.getElementById("year");
const monthInput = document.getElementById("month");

const cleaveCC = new Cleave('.cardNumber', {
  blocks: [4, 4, 4, 4],
  delimiter: " ",
});

forms.addEventListener('submit', (e) => {
  let messages = []
  let okmessage = []
  let ccnumber = []

  if (cvc.value === '' || cvc.value == null || yearInput.value === '' || yearInput.value == null ||
  monthInput.value === '' || monthInput.value == null ||cleaveCC.value === '' || cleaveCC.value == null){

    messages.push("Can't be blank")
    okmessage.push(" ")
    ccnumber.push("Wrong format, numbers only")

    cvc.style.border = "1px solid #ff5252"
    yearInput.style.border = "1px solid #ff5252"
    monthInput.style.border = "1px solid #ff5252"
    cardInput.style.border = "1px solid #ff5252"


    if (messages.length > 0){
      e.preventDefault()
      cvcErrors.innerText = messages.join(', ')
      mmyyError.innerText = messages.join(', ')
    
    }

    if(yearInput.value != 0 ){
      yearInput.style.border = "1px solid hsl(270, 3%, 87%)"
    }

    if(yearInput.value != 0 ){
      yearInput.style.border = "1px solid hsl(270, 3%, 87%)"
    }
    if(monthInput.value != 0 ){
      monthInput.style.border = "1px solid hsl(270, 3%, 87%)"
    }

    if(cvc.value != 0){
      cvc.style.border = "1px solid hsl(270, 3%, 87%)"
      cvcErrors.innerText = okmessage.join()
    }

    if(monthInput.value != 0 && yearInput.value != 0){
      mmyyError.innerText = okmessage.join(', ')
    }

    if(cleaveCC.value === '' || cleaveCC.value == null || !phone.match(/^[0-9]$/)){
      cardError.innerText = ccnumber.join(', ')
    }
    if(cleaveCC.length != 0){
      cleaveCC.style.border = "1px solid hsl(270, 3%, 87%)"
      cardError.innerText = okmessage.join()
    }
    
  }



})


document.getElementById('cardNumber').oninput = () =>{

  document.getElementById("card-number").innerText = document.getElementById("cardNumber").value;
}



document.getElementById('name').oninput = () =>{

  document.getElementById("card-name").innerText = document.getElementById("name").value;
}

document.getElementById('cvc').oninput = () =>{

  document.getElementById("card-cvc").innerText = document.getElementById("cvc").value;
}

document.getElementById('month').oninput = () =>{

  document.getElementById("card-month").innerText = document.getElementById("month").value;
}
document.getElementById('year').oninput = () =>{

  document.getElementById("card-year").innerText = document.getElementById("year").value;
}


