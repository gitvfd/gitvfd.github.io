
function dForDuclos(){
var words = ['Debate', 'Death', 'Dummies', 'Drôle'], // 1
    element = document.getElementById("dForDuclos"), // 2
    currentWord = -1; //3

window.setInterval(function(){ // 4
   currentWord++; // 5
   if(currentWord > words.length) currentWord = 0; // 6
   element.textContent = words[currentWord]; // 7
}, 1000); // -- 4 
}