function navbarFunc(ele) {
    console.log(ele);
    if (ele == 1) {
        // document.getElementById("p").innerText = "10"
        document.getElementById("a1").innerText = "Home";
        document.getElementById("a2").innerText = "Goals";
        document.getElementById("a3").innerText = "Check-In";
        document.getElementById("a4").innerText = "Mail";
        document.getElementById("a5").innerText = "Profile";
        document.getElementById("a6").innerText = "My Blog";
        document.getElementById("a7").innerText = "Friends";
        document.getElementById("a8").innerText = "Setting";
    }
    if (ele == 2) {
        document.getElementById("a1").innerHTML = "Food Diary";
        document.getElementById("a2").innerText = "Database";
        document.getElementById("a3").innerText = "My Foods";
        document.getElementById("a4").innerText = "My Meals";
        document.getElementById("a5").innerText = "Recipes";
        document.getElementById("a6").innerText = "Setting";
        document.getElementById("a7").innerText = "";
        document.getElementById("a8").innerText = "";
    }
    if (ele == 3) {
        document.getElementById("a1").innerHTML = "Exercise Diary";
        document.getElementById("a2").innerText = "Database";
        document.getElementById("a3").innerText = "My Excercises";
        document.getElementById("a4").innerText = "Setting";
        document.getElementById("a5").innerText = "";
        document.getElementById("a6").innerText = "";
        document.getElementById("a7").innerText = "";
        document.getElementById("a8").innerText = "";
    } if (ele == 4) {
        document.getElementById("a1").innerHTML = "Charts";
        document.getElementById("a2").innerText = "Export Data";
        document.getElementById("a3").innerText = "Weekly  Digest";
        document.getElementById("a4").innerText = "";
        document.getElementById("a5").innerText = "";
        document.getElementById("a6").innerText = "";
        document.getElementById("a7").innerText = "";
        document.getElementById("a8").innerText = "";
    } if (ele == 5) {
        document.getElementById("a1").innerHTML = "App Gallery";
        document.getElementById("a2").innerText = "Mobile";
        document.getElementById("a3").innerText = "Tickers";
        document.getElementById("a4").innerText = "Badges";
        document.getElementById("a5").innerText = "BMR";
        document.getElementById("a6").innerText = "BMI";
        document.getElementById("a7").innerText = "";
        document.getElementById("a8").innerText = "";
    }
}
function likeFunc(){
   document.getElementById("like").innerText = ""
}
function commentFunc(){
   document.getElementById("feedText").innerText= "write"
}