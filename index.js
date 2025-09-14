const srcHome = document.getElementById("homeipt");
const scrGuest = document.getElementById("gustipt");

function updateScore(team,points){
   let element = team;
   if(team==="home"){
    element=srcHome;
   }else{
    element=scrGuest;
   }
    element.textContent=Number(element.textContent)+points;
}
function resetScores(){
    srcHome.textContent = 0;
    scrGuest.textContent = 0;
}