// Inro screen scripting
const Name = document.querySelectorAll('#Name path');
const introScreen = document.querySelector('.introScreen');

for(let i=0; i<Name.length; i++) {
    console.log(`Letter ${i} is ${Name[i].getTotalLength()}`);
}
console.log(Name.length)

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        introScreen.style.top = "-100vh";
    }, 3900)
})

// Login Form scripting
const inputs = document.querySelectorAll('.inputField');

inputs.forEach((inp)=>{
    inp.addEventListener('focus', ()=>{
        inp.classList.add("active");
    });
    inp.addEventListener("blur", ()=>{
        if(inp.value != "") return
        inp.classList.remove("active");
    })
})
// Slider Scripting
const toggleBtn = document.querySelectorAll(".toggle");
const Main = document.querySelector(".Main");

toggleBtn.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        Main.classList.toggle("signUPMode")
    });
});
