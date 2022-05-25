
document.getElementById("calculate").addEventListener('click', cal)
function cal() {
    event.preventDefault()
    
    var weigth;
    weigth = +document.getElementById('cweigth').value;


    var feet = +document.getElementById('feet').value
    var inch = +document.getElementById('inch').value
    var age = +document.getElementById('age').value
    var sex;
    var bmr;
    var ele = document.getElementsByName('gender')

    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked)
            sex = ele[i].value;
    }

    if(sex=="F"){
     bmr=(10*weigth)+(6.25*((feet*30.48)+(inch*2.54)))-(5*age)-161
     if(bmr<0){
         bmr=0
     }
    }
    else{
        console.log("M")
        bmr=(10*weigth)+(6.25*((feet*30.48)+(inch*2.54)))-(5*age)-5
        if(bmr<0){
            bmr=0
        }
    }
    var h= document.createElement("h3")
    h.innerText="Your estimated BMR is : "+bmr+" calories/day*"
    var button= document.createElement('button')
    button.innerText="Recalculate"
    var a =document.createElement('a')
    a.href="bmr.html"
    a.append(button)
    a.setAttribute("id","calculate")
    document.getElementById('main').remove()
    document.getElementById("container").append(h,a)
    
 console.log(bmr)
    // console.log(weigth, feet, inch, age, sex)
}