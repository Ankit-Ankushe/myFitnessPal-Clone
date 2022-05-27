 let welcomeContainer = document.querySelector("#welcomeContainer");
 let borderFixed = document.querySelector("#signupBorder");
 let borderMove = document.querySelector("#signupBorder>div");
 let weightGoalContaner = document.querySelector("#weightGoalContainer");
 let baselineContainer =document.querySelector("#baselineContainer");
 let sexCalorieContainer = document.querySelector("#sexCalorieContainer");
 let tallAndWeightContainer = document.querySelector("#tallAndWeightContainer");
 let btnContainer = document.querySelector("#btnContainer");
 let backBtn = document.querySelector("#backBtn");
 let nextBtn = document.querySelector("#nextBtn");
document.getElementById("continueBtn").addEventListener( "click" ,function(){
    welcomeContainer.style.display = "none";
    borderFixed.style.display = "block";
    weightGoalContaner.style.display = "block";
    btnContainer.style.display = "block";
})

let weightArrEle = document.querySelectorAll("#weightGoalContainer>div:nth-child(2)>div");
let baselineArrEle = document.querySelectorAll("#baselineContainer>div:nth-child(2)>div");
console.log(baselineArrEle)

weightArrEle.forEach(function(eachWeight , index){
          eachWeight.addEventListener("click" , function(){
            document.querySelector("#weightGoalContainer>div:nth-child(2)>div.lmgweight").classList.remove("lmgweight");
            weightArrEle[index].classList.add("lmgweight");
          }) 
})

baselineArrEle.forEach(function(eachActive , index){
    eachActive.addEventListener("click" , function(){
        document.querySelector("#baselineContainer>div:nth-child(2)>div.baselineActive").classList.remove("baselineActive");
        baselineArrEle[index].classList.add("baselineActive");
      }) 
})


 let i = 1;
document.getElementById("nextBtn").addEventListener("click" , function next(){
if(i == 7){
   i = 7;
}else { 
    i++;
   }
    borderMove.style.width = `${14.2899*i}%`;
    borderMove.style.borderRadius = "5px";
    weightGoalContaner.style.display = "none";
    if( i == 2){  
    baselineContainer.style.display = "block";
    }
    if(i == 3){  
    baselineContainer.style.display = "none";
    sexCalorieContainer.style.display = "block";
    }
    if(i == 4){
        sexCalorieContainer.style.display = "none";
        tallAndWeightContainer.style.display = "block";

    }
    
})

document.getElementById("backBtn").addEventListener("click" , function back(){
    if(i == 1){
       i = 1
    }else { 
      i--;
    }
    
    borderMove.style.width = `${14.2899*i}%`;
    if(i == 1){  
    weightGoalContaner.style.display = "block";
    baselineContainer.style.display = "none";
    }
    if(i == 2){  
        baselineContainer.style.display = "block";
        sexCalorieContainer.style.display = "none";
        }
   if(i == 3){
    sexCalorieContainer.style.display = "block"
    tallAndWeightContainer.style.display = "none";
     }
})
