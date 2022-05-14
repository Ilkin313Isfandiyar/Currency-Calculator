
// let btns_left = document.querySelectorAll(".left_btn")
// let btns_right = document.querySelectorAll(".right_btn")


// let leftSide = document.querySelector(".left")
// let leftRight = document.querySelector(".right")

// let left_AZN = document.querySelector('#left_AZN')
// left_AZN.classList.add('active_left')

// let right_USD = document.querySelector('#right_USD')
// right_USD.classList.add('active_right')


// let firstval = left_AZN.innerText;
// let secondval = right_USD.innerText;

// let leftinput = document.querySelector('.leftinput')
// let rightinput = document.querySelector('.rightinput')




// let link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=$//{secondval}`;
// let link2 = `https://api.exchangerate.host/latest?base=${secondval}&symbols=$//{firstval}`;



// btns_left.forEach(btn => {

//  btn.addEventListener("click",(e) => {
//      btns_left.forEach(item=>{
//        item.classList.remove('active_left')
//    })

//      btn.classList.add('active_left')
//      firstval=e.target.innerText

//      link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=$//{secondval}//`
//      link2 = `https://api.exchangerate.host/latest?base=${secondval}&symbols=$//{firstval}//`;

     
//  })
// })

// btns_right.forEach(btn => {

//  btn.addEventListener("click",(e) => {
//      btns_right.forEach(item=>{
//        item.classList.remove('active_right')
//    })

//      btn.classList.add('active_right')
//      secondval=e.target.innerText

//      link = `https://api.exchangerate.host/latest?base=${firstval}&symbols=$//{secondval}//`
//     link2 = `https://api.exchangerate.host/latest?base=${secondval}&symbols=$//{firstval}//`;

    
//  })
// })





// function left(){

// //
//  leftinput.addEventListener("keyup",()=>{
//  fetch(link)
//  .then(response=>response.json())
//  .then(data => {
//          rightinput.value = data.rates[secondval]*leftinput.value
//          document.querySelector('.left_valyuta').innerHTML = `1 ${firstval} = $//{data.rates[secondval]} ${secondval} `
         
//  })
//  })

//  leftinput.addEventListener("click",()=>{
//      fetch(link)
//      .then(response=>response.json())
//      .then(data => {
//              rightinput.value = data.rates[secondval]*leftinput.value
//              document.querySelector('.left_valyuta').innerHTML = `1 ${firstval} = //${data.rates[secondval]} ${secondval} `
//      })
//      })

     

  
// }
 

// function right(){
 
//  rightinput.addEventListener("keyup",()=>{
//  fetch(link2)
//  .then(response=>response.json())
//  .then(data => {
//          leftinput.value = data.rates[firstval]*rightinput.value
//          document.querySelector('.right_valyuta').innerText = `1 ${secondval} = $//{data.rates[firstval]} ${firstval}`
//  })
//  })

//  rightinput.addEventListener("click",()=>{
//      fetch(link2)
//      .then(response=>response.json())
//      .then(data => {
//              leftinput.value = data.rates[firstval]*rightinput.value
//              document.querySelector('.right_valyuta').innerText = `1 ${secondval} //= ${data.rates[firstval]} ${firstval}`
//      })
//      })

//     }
     
// left()
// right()

// leftinput.addEventListener('keyup',left)
// rightinput.addEventListener('keyup',right)

// btns_left.addEventListener('change',left)
// btns_right.addEventListener('change',right)

curt1buttons = document.querySelectorAll('.left_btn');
curt2buttons = document.querySelectorAll('.right_btn');
firstinput = document.querySelector('.leftinput');
secondinput = document.querySelector('.rightinput');
display1 = document.querySelector('.left_valyuta');
display2 = document.querySelector('.left_valyuta');


let left_AZN = document.querySelector('#left_AZN')
left_AZN.classList.add('active1')

let right_USD = document.querySelector('#right_USD')
right_USD.classList.add('active2')
cur1val = 'AZN';
cur2val = 'USD';
checker = 0;

function convert(cur1val, cur2val, checker) {
    
    let a = cur1val;
    let b = cur2val;
    let c = checker;

    if (c == 0 || c == 1) {
        fetch(`https://api.exchangerate.host/latest?base=${a}&symbols=${b}`)
            .then(res => res.json())
            .then(data => {
                if (firstinput.value.includes(',') == true) {
                    firstinput.value = firstinput.value.split(',').join('.');
                }
                if (isNaN(firstinput.value)) {
                    alert('Please include a number');
                    
                }
                secondinput.value = firstinput.value * data.rates[b];
            })
            .catch(error => {
                alert('Something went wrong');
                console.log(error);
            })

    } else if (c == 2) {
        fetch(`https://api.exchangerate.host/latest?base=${b}&symbols=${a}`)
            .then(res => res.json())
            .then(data => {
                if (secondinput.value.includes(',') == true) {
                    secondinput.value = secondinput.value.split(',').join('.');
                }
                if (isNaN(secondinput.value)) {
                    alert('Please include a number');
                }
                firstinput.value = secondinput.value * data.rates[a];
            })
            .catch(error => {
                alert('Something went wrong');
                console.log(error);
            })
    }
}
convert(cur1val, cur2val, checker);

function displaycur(cur1val, cur2val) {

    let a = cur1val;
    let b = cur2val;

    fetch(`https://api.exchangerate.host/latest?base=${b}&symbols=${a}`)
        .then(res => res.json())
        .then(data => {
            display2.innerHTML = `1 ${b} = ${data.rates[a]} ${a}`;
        })
        .catch(error => {
            alert('Something went wrong');
            console.log(error);
        })

    fetch(`https://api.exchangerate.host/latest?base=${a}&symbols=${b}`)
        .then(res => res.json())
        .then(data => {
            display1.innerHTML = `1 ${a} = ${data.rates[b]} ${b}`;
        })
        .catch(error => {
            alert('Something went wrong');
            console.log(error);
        })
}
displaycur(cur1val, cur2val)

firstinput.addEventListener('keyup', () => {
    checker = 1;
    convert(cur1val, cur2val, checker);

})
secondinput.addEventListener('keyup', () => {
    checker = 2;
    convert(cur1val, cur2val, checker)
})

curt1buttons.forEach(but1 => {
    but1.addEventListener('click', () => {
        
            cur1val = but1.innerText;

            
            curt1buttons.forEach(btn1 => {
                btn1.classList.remove('active1')
            })
            but1.classList.add('active1');
    
        convert(cur1val, cur2val, checker);
        displaycur(cur1val, cur2val);
    })
});

curt2buttons.forEach(but2 => {
    but2.addEventListener('click', () => {
        
            cur2val = but2.innerText;

            
            curt2buttons.forEach(btn2 => {
                btn2.classList.remove('active2')
            })
            but2.classList.add('active2');
        
        convert(cur1val, cur2val, checker);
        displaycur(cur1val, cur2val);
    })
});