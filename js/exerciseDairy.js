// let p = document.createElement("p")
// p.innerText = `Friday,May 27 ,2022 `

// document.getElementById("diplayDate").append(p);

function dateDec(ele){
    ele--;
    document.getElementById("displayDate").innerText =`Friday,May ${ele} ,2022 `;
return ele;
    // document.getElementById("displayDate").append(ele)
}
function dateInc(ele){
    ele++;
document.getElementById("displayDate").innerText =`Friday,May ${ele} ,2022 `;
return ele;
}
