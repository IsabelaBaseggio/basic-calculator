let display = document.getElementById("display");

// clear 

document.getElementById("clear").addEventListener("click", ()=>{
    display.value = " ";
})

// backSpace

const backSpace = () => {
    const num = display.value.slice(0, -1);
    display.value = num;
    
}

// dot

let dot = () =>{
    if(display.value == " "){
        display.value = ".";    
    }
    else{
        display.value = display.value + ".";
    }
}

// zero

let zero = () =>{
    if(display.value == " "){
        display.value = "0";    
    }
    else{
        display.value = display.value + "0";
    }
}

// one

let one = () =>{
    if(display.value == " "){
        display.value = "1";    
    }
    else{
        display.value = display.value + "1";
    }
}

// two

let two = () =>{
    if(display.value == " "){
        display.value = "2";    
    }
    else{
        display.value = display.value + "2";
    }
}

// three

let three = () =>{
    if(display.value == " "){
        display.value = "3";    
    }
    else{
        display.value = display.value + "3";
    }
}

// four

let four = () =>{
    if(display.value == " "){
        display.value = "4";    
    }
    else{
        display.value = display.value + "4";
    }
}

// five

let five = () =>{
    if(display.value == " "){
        display.value = "5";    
    }
    else{
        display.value = display.value + "5";
    }
}

// six

let six = () =>{
    if(display.value == " "){
        display.value = "6";    
    }
    else{
        display.value = display.value + "6";
    }
}

// seven

let seven = () =>{
    if(display.value == " "){
        display.value = "7";    
    }
    else{
        display.value = display.value + "7";
    }
}

// eight

let eight = () =>{
    if(display.value == " "){
        display.value = "8";    
    }
    else{
        display.value = display.value + "8";
    }
}

// nine

let nine = () =>{
    if(display.value == " "){
        display.value = "9";    
    }
    else{
        display.value = display.value + "9";
    }
}