let slideDivBox = document.getElementById("slideDivBox");
let rightArrow = document.querySelector(".fa-angle-right");
let leftArrow = document.querySelector(".fa-angle-left");
leftArrow.style.color = "grey";

let circleParent = document.querySelector("#circularBox");

var i = 0;

document.querySelectorAll("#circularBox div").forEach(function(circle , index){
    circle.addEventListener("click" , function(){
        i = index;
        leftArrow.style.color = "black";
        rightArrow.style.color = "black";
        document.querySelector("#circularBox .selected").classList.remove("selected");
        circle.classList.add("selected");
        slideDivBox .style.transform = `translate(${-16.92*i}%)`;

        if(i == 0){
            leftArrow.style.color = "grey";
        }
        if(i == 4){
            rightArrow.style.color = "grey";
        }
        
    })
});


leftArrow.addEventListener("click" , function(){
    rightArrow.style.color = "black";
    if(i > 0){
        i  = i-1;
    }else {
        i = 0;
    }
    document.querySelector("#circularBox .selected").classList.remove("selected");
    circleParent.children[i].classList.add("selected");
    slideDivBox .style.transform = `translate(${-16.92*i}%)`;

    if(i == 0){
        leftArrow.style.color = "grey";
    }
})

rightArrow.addEventListener("click" , function(){
    leftArrow.style.color = "black";
    if(i < 4){
        i  = i+1;
    }else {
        i = 4;
    }
    document.querySelector("#circularBox .selected").classList.remove("selected");
    circleParent.children[i].classList.add("selected");

    slideDivBox .style.transform = `translate(${-16.92*i}%)`;

    if(i == 4){
        rightArrow.style.color = "grey";
    }
})




