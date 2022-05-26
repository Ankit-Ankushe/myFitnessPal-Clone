
document.getElementById("calculate").addEventListener('click', cal)
function cal() {
    event.preventDefault()
    
    var weigth;
    weigth = +document.getElementById('cweigth').value;


    var feet = +document.getElementById('feet').value
    var inch = +document.getElementById('inch').value
    
  var bmi=weigth/( ((feet*0.3048)+(inch*0.02))**2)
    var h= document.createElement("h3")
    h.innerText="Your estimated BMI is : "+bmi+" calories/day*"
    var button= document.createElement('button')
    button.innerText="Recalculate"
    var a =document.createElement('a')
    a.href="bmi.html"
    a.append(button)
    a.setAttribute("id","calculate")
    document.getElementById('main').remove()
    document.getElementById("container").append(h,a)
    
 console.log(bmi)
    // console.log(weigth, feet, inch, age, sex)
}