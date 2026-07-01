

document.addEventListener('DOMContentLoaded', () => {
    
    let input=document.getElementById("result")
let string="";
let buttons=document.querySelectorAll("button")
let arr=Array.from(buttons)
arr.forEach(buttons =>{
    buttons.addEventListener('click',(e)=>{
        if (e.target.closest('.bgchange')) return;

        if(e.target.innerHTML=='='){
            string=eval(string);
            input.value=string;
        }
        else if(e.target.innerHTML=='CE'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
            string+=e.target.innerHTML
            input.value=string;
        }
    })
})

let bgButton = document.querySelector(".bgchange button")
bgButton.addEventListener('click',(evt)=>{
        let currentBg = document.body.style.background
    if(currentBg.includes('rgb(47, 41, 78')){
        document.body.style.background='linear-gradient(45deg, rgb(0, 0, 0), rgb(90, 86, 112))';
    }else{
        document.body.style.background = 'linear-gradient(45deg, rgb(47, 41, 78), rgb(0, 0, 0))';

    }
})

});
