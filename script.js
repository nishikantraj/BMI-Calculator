btn = document.querySelector('.btn')


frm1= document.querySelector('.cheight');
frm1.addEventListener('submit',function(e){
    e.preventDefault();
})
frm2= document.querySelector('.cweight');
frm2.addEventListener('submit',function(e){
    e.preventDefault();
})


//Function to get BMI
function GetBmi(){
    feet = parseInt(document.querySelector('.feet').value);
    inch = parseInt(document.querySelector('.inch').value);
    if(inch=='' || isNaN(inch))
        inch =0;
    weight = parseInt(document.querySelector('.weight').value);
    result = document.querySelector('.presult');
    if(feet =='' || feet<0 || isNaN(feet))
        result.innerHTML = `<div class="cresult" style="color:red">Invalid feet</div>`;
    else if(weight =='' || weight<0 || isNaN(weight))
        result.innerHTML = `<div class="cresult" style="color:red">Invalid weight</div>`;
    else{
        bmi = (weight/(Math.pow(((feet*0.3048)+(inch*0.0254)),2))).toFixed(2);
       let clr= '';
        if(bmi<18.5)
            clr += 'rgb(248, 121, 121)'
        else if(bmi>=18.5 && bmi<=24.999)
            clr +='rgb(43, 201, 15)'
        else if(bmi>=25.0 && bmi<=29.999)
            clr +='orange'
        else if(bmi>=30.0)
            clr +='orangered'
        result.innerHTML = `<div class="cresult" style="background-color: ${clr};">BMI: ${bmi}</div>`;
    }
}


// Function call when user clcik the button
btn.addEventListener('click',GetBmi);

//Function call when user hit the enter key
window.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        GetBmi();
    }
});
