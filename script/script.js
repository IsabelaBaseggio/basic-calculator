let display = document.getElementById("display");

// clear 

document.getElementById("clear").addEventListener("click", ()=>{
    display.value = " ";
})

// backSpace

let backSpace = () => {
    const num = display.value.slice(0, -1);
    display.value = num;
}

