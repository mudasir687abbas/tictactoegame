var ProgressBar = document.getElementById("ProgressBar");
var ProgressText = document.getElementById("ProgressText");
var LandingBox = document.getElementById("LandingBox");
var ChosingBox = document.getElementById("MoveChosingBox");
var ClickEventlistener;
var Boxes = document.getElementsByClassName("Boxes");
var ProgressWidthCounter=0;
var TokkenBoxes = document.getElementsByClassName("Tokken");
var ShowStaterInBox = document.getElementById("ShowStater");
var GameStater;
var tokken;
var Move = 0;
var ShowDrawnResultBox = document.getElementById("DrawnResultBox");
var ShowWinnerBox = document.getElementById("ShowWinnerBox");
var WinnerIs = document.getElementById("Winner");
//
var SetInterval = setInterval(()=>{
 ProgressWidthCounter +=20;
 ProgressText.innerHTML = ProgressWidthCounter + "%"; 
    ProgressBar.style.width=ProgressWidthCounter + "%";
    ProgressBar.style.backgroundColor='yellow';
  if(ProgressWidthCounter == 100){
    clearInterval(SetInterval);
    LandingBox.classList.add("MoveLandingBox");
    console.log("It is completed");
  }
},1000);


// Function for Moving Chosing LandingBox
function MoveChosingBox(){
  ChosingBox.classList.add("MoveUpChosingBox");
}
//Function for Showing Text in Boxes

function ShowTextInBox(e){
  Move++;
  e.target.innerText = tokken;
  
  e.target.removeEventListener("click",ShowTextInBox);
   ChangeTokken();
   Winner();
}

// Function for Stater of GameStater
for(UserSelectedTokken of TokkenBoxes){
  UserSelectedTokken.addEventListener("click",(e)=>{
    e.target.classList.toggle("BorderRadius");
    GameStater = e.target.innerText;
    ShowStaterInBox.innerText =GameStater;
    tokken = GameStater;
    
  });
}
// Function to Show Turn in Boxes


//Function for Changing tokkens

function ChangeTokken(){
  if(tokken == "X"){
    tokken = "O";
  }else {
    tokken = "X";
  }
ShowStaterInBox.innerText = tokken;  
}


//Function For Winner
function Winner(){
  let arr = Array.from(Boxes);
  if(arr[0].innerText != "" && arr[1].innerText != "" && arr[2].innerText != "" && arr[0].innerText == arr[1].innerText && arr[0].innerText == arr[2].innerText){

    ShowWinnerBox.style.transform = "translate(" + 0 + "%)";
    WinnerIs.innerText = arr[0].innerText;
    //Styling of WinnerBoxes
    arr[0].classList.add("GiveBorderRadiusToWinnerBoxes");
    arr[1].classList.add("GiveBorderRadiusToWinnerBoxes");
    arr[2].classList.add("GiveBorderRadiusToWinnerBoxes");
    for(box of Boxes){
     box.removeEventListener("click",ShowTextInBox);
    }
}else if(arr[3].innerText != "" && arr[4].innerText != "" && arr[5].innerText != "" && arr[3].innerText == arr[4].innerText && arr[3].innerText == arr[5].innerText){
  ShowWinnerBox.style.transform = "translate(" + 0 + "%)";
    WinnerIs.innerText = arr[3].innerText;
    //Styling of WinnerBoxes
    arr[3].classList.add("GiveBorderRadiusToWinnerBoxes");
    arr[4].classList.add("GiveBorderRadiusToWinnerBoxes");
    arr[5].classList.add("GiveBorderRadiusToWinnerBoxes");
  for(box of Boxes){
   box.removeEventListener("click",ShowTextInBox);
  }
}else if(arr[6].innerText != "" && arr[7].innerText != "" && arr[8].innerText != "" && arr[6].innerText == arr[7].innerText && arr[6].innerText == arr[8].innerText){
  ShowWinnerBox.style.transform = "translate(" + 0 + "%)";
    WinnerIs.innerText = arr[6].innerText;
    //Styling of WinnerBoxes
    arr[6].classList.add("GiveBorderRadiusToWinnerBoxes");
    arr[7].classList.add("GiveBorderRadiusToWinnerBoxes");
    arr[8].classList.add("GiveBorderRadiusToWinnerBoxes");
  for(box of Boxes){
   box.removeEventListener("click",ShowTextInBox);
  }
}else if(arr[0].innerText != "" && arr[3].innerText != "" && arr[6].innerText != "" && arr[0].innerText == arr[3].innerText && arr[0].innerText == arr[6].innerText){
  ShowWinnerBox.style.transform = "translate(" + 0 + "%)";
    WinnerIs.innerText = arr[0].innerText;
    //Styling of WinnerBoxes
    arr[0].classList.add("GiveBorderRadiusToWinnerBoxes");
    arr[3].classList.add("GiveBorderRadiusToWinnerBoxes");
    arr[6].classList.add("GiveBorderRadiusToWinnerBoxes");
for(box of Boxes){
 box.removeEventListener("click",ShowTextInBox);
}
}else if(arr[1].innerText != "" && arr[4].innerText != "" && arr[7].innerText != "" && arr[1].innerText == arr[4].innerText && arr[1].innerText == arr[7].innerText){
  ShowWinnerBox.style.transform = "translate(" + 0 + "%)";
  WinnerIs.innerText = arr[1].innerText;
  //Styling of WinnerBoxes
  arr[1].classList.add("GiveBorderRadiusToWinnerBoxes");
  arr[4].classList.add("GiveBorderRadiusToWinnerBoxes");
  arr[7].classList.add("GiveBorderRadiusToWinnerBoxes");
  for(box of Boxes){
   box.removeEventListener("click",ShowTextInBox);
  }


}else if(arr[2].innerText != "" && arr[5].innerText != "" && arr[8].innerText != "" && arr[2].innerText == arr[5].innerText && arr[2].innerText == arr[8].innerText){
  ShowWinnerBox.style.transform = "translate(" + 0 + "%)";
  WinnerIs.innerText = arr[2].innerText;
  //Styling of WinnerBoxes
  arr[2].classList.add("GiveBorderRadiusToWinnerBoxes");
  arr[5].classList.add("GiveBorderRadiusToWinnerBoxes");
  arr[8].classList.add("GiveBorderRadiusToWinnerBoxes");
  for(box of Boxes){
   box.removeEventListener("click",ShowTextInBox);
  }
}else if(arr[0].innerText != "" && arr[4].innerText != "" && arr[8].innerText != "" && arr[0].innerText == arr[4].innerText && arr[0].innerText == arr[8].innerText){
  ShowWinnerBox.style.transform = "translate(" + 0 + "%)";
  WinnerIs.innerText = arr[0].innerText;
  //Styling of WinnerBoxes
  arr[0].classList.add("GiveBorderRadiusToWinnerBoxes");
  arr[4].classList.add("GiveBorderRadiusToWinnerBoxes");
  arr[8].classList.add("GiveBorderRadiusToWinnerBoxes");
  for(box of Boxes){
   box.removeEventListener("click",ShowTextInBox);
  }

}else if(arr[2].innerText != "" && arr[4].innerText != "" && arr[6].innerText != "" && arr[2].innerText == arr[4].innerText && arr[2].innerText == arr[6].innerText){
  ShowWinnerBox.style.transform = "translate(" + 0 + "%)";
  WinnerIs.innerText = arr[2].innerText;
  //Styling of WinnerBoxes
  arr[2].classList.add("GiveBorderRadiusToWinnerBoxes");
  arr[4].classList.add("GiveBorderRadiusToWinnerBoxes");
  arr[6].classList.add("GiveBorderRadiusToWinnerBoxes");
  for(box of Boxes){
   box.removeEventListener("click",ShowTextInBox);
  }

}else {
  if(Move == 9){
    ShowDrawnResultBox.style.transform = "translate(" + 0 + "vh)";
  }
}
}


// Working For Borad Game

for(box of Boxes){
   box.addEventListener("click",ShowTextInBox);
   
  }
  
  
 

