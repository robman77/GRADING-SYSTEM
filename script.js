function checkResult(){
    const scoreOfUser =  Number(userScore.value)
    if (scoreOfUser==""){
    R.value = "INVALID"
 }
  else if (scoreOfUser>=0 & scoreOfUser<40){
    R.value = "F- You have Failed"
  }

  else if (scoreOfUser>=40 & scoreOfUser<45){
    R.value = "E - Fair enough"
  }
  else if (scoreOfUser>=45 & scoreOfUser<50){
    R.value = "D - Average"
  }
  else if(scoreOfUser>=50 & scoreOfUser<60){
    R.value = "C - Credit(Mid)"
  }
  else if(scoreOfUser>=60 & scoreOfUser<70){
    R.value = "B - Good "
  }
  else if (scoreOfUser>=70 & scoreOfUser<=100){
    R.value = "A - Excellent"
  }
  else{
    R.value = "Not recongnized"
  }
}