
document.getElementById("calculate").addEventListener('click', cal)
function cal() {
    event.preventDefault()
    
    var weigth;
    weigth = +document.getElementById('cweigth').value;


    var feet = +document.getElementById('feet').value
    var inch = +document.getElementById('inch').value
    
  var bmi=weigth/( ((feet*0.3048)+(inch*0.02))**2)

  console.log("bmi", bmi);

  var leftSpace;

  if(bmi>50){
    leftSpace = "605";
  }else{
    leftSpace = (600/50)*bmi;
  }

  console.log("leftspace", leftSpace);

    var arrow = document.createElement("div");
    arrow.style.width = "10px";
    arrow.style.height = "10px";
    arrow.style.backgroundColor = "black";
    arrow.style.position = "absolute";
    arrow.style.left = `${leftSpace}px`;
    arrow.style.top = "-10px";

    var line = document.createElement("div")
    line.style.width = "600px";
    line.style.height = "50px";
    line.style.backgroundColor = "red";
    line.style.position = "relative";

    line.appendChild(arrow);

    var button= document.createElement('button')
    button.innerText="Recalculate"
    var a =document.createElement('a')
    a.href="bmi.html"
    a.append(button)
    a.setAttribute("id","calculate")
    document.getElementById('main').remove()
    document.getElementById("container").append(line, a);
    
 console.log(bmi)
    // console.log(weigth, feet, inch, age, sex)
}