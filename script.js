btn = document.querySelector('.btn')
// feet = parseInt(document.querySelector('.feet').value);
btn.addEventListener('click',function(e){
    feet = parseInt(document.querySelector('.feet').value);
    inch = parseInt(document.querySelector('.inch').value);
    if(inch=='' || isNaN(inch))
        inch =0;
    weight = parseInt(document.querySelector('.weight').value);
    result = document.querySelector('.presult');
    if(feet =='' || feet<0)
        result.innerHTML = `Please give a valid feet.`;
    else if(weight =='' || weight<0)
        result.innerHTML = `Please give a valid weight.`;
    else{
        bmi = (weight/(Math.pow(((feet*0.3048)+(inch*0.0254)),2))).toFixed(2);
       let clr= '';
        if(bmi<18.5)
            clr += 'rgb(248, 121, 121)'
        else if(bmi>=18.5 && bmi<=24.9)
            clr +='rgb(43, 201, 15)'
        else if(bmi>=25.0 && bmi<=29.9)
            clr +='orange'
        else if(bmi>=30.0)
            clr +='orangered'
        result.innerHTML = `<div class="cresult" style="background-color: ${clr};">${bmi}</div>`;
    }
});