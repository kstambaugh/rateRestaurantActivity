//jennifer buttons

let jennifer = 0
let j_tot = 0
let j_num = 0

jenniferScoreBtn1 = document.getElementById('jennifer-1')
jenniferScoreBtn1.addEventListener('click',function(){
    j_tot = j_tot + 1
    j_num = j_num + 1
    jennifer = j_tot / j_num
    console.log(jennifer)
})

jenniferScoreBtn2 = document.getElementById('jennifer-2')
jenniferScoreBtn2.addEventListener('click',function(){
    j_tot = j_tot + 2
    j_num = j_num + 1
    jennifer = j_tot / j_num
    console.log(jennifer)
})

jenniferScoreBtn3 = document.getElementById('jennifer-3')
jenniferScoreBtn3.addEventListener('click',function(){
    j_tot = j_tot + 3
    j_num = j_num + 1
    jennifer = j_tot / j_num
    console.log(jennifer)
})

jenniferScoreBtn4 = document.getElementById('jennifer-4')
jenniferScoreBtn4.addEventListener('click',function(){
    j_tot = j_tot + 4
    j_num = j_num + 1
    jennifer = j_tot / j_num
    console.log(jennifer)
})

//paul buttons
let paul = 0
let p_tot = 0
let p_num = 0

paulScoreBtn1 = document.getElementById('paul-1')
paulScoreBtn1.addEventListener('click',function(){
    p_tot = p_tot + 1
    p_num = p_num + 1
    paul = p_tot / p_num
    console.log(paul)
})

paulScoreBtn2 = document.getElementById('paul-2')
paulScoreBtn2.addEventListener('click',function(){
    p_tot = p_tot + 2
    p_num = p_num + 1
    paul = p_tot / p_num
    console.log(paul)
})

paulScoreBtn3 = document.getElementById('paul-3')
paulScoreBtn3.addEventListener('click',function(){
    p_tot = p_tot + 3
    p_num = p_num + 1
    paul = p_tot / p_num
    console.log(paul)
})

paulScoreBtn4 = document.getElementById('paul-4')
paulScoreBtn4.addEventListener('click',function(){
    p_tot = p_tot + 4
    p_num = p_num + 1
    paul = p_tot / p_num
    console.log(paul)
})




//overall buttons

let overall = 0
let o_tot = 0
let o_num = 0

overallScoreBtn1 = document.getElementById('overall-1')
overallScoreBtn1.addEventListener('click',function(){
    o_tot = o_tot + 1
    o_num = o_num + 1
    overall = o_tot / o_num
    console.log(overall)
})

overallScoreBtn2 = document.getElementById('overall-2')
overallScoreBtn2.addEventListener('click',function(){
    o_tot = o_tot + 2
    o_num = o_num + 1
    overall = o_tot / o_num
    console.log(overall)
})

overallScoreBtn3 = document.getElementById('overall-3')
overallScoreBtn3.addEventListener('click',function(){
    o_tot = o_tot + 3
    o_num = o_num + 1
    overall = o_tot / o_num
    console.log(overall)
})

overallScoreBtn4 = document.getElementById('overall-4')
overallScoreBtn4.addEventListener('click',function(){
    o_tot = o_tot + 4
    o_num = o_num + 1
    overall = o_tot / o_num
    console.log(overall)
})

//show hide button

let cashierScore = document.getElementById("cashierScore")
let overallScore = document.getElementById("overallScore")

let showHide = document.getElementById("show-hide")
showHide.addEventListener('click',function(){
  let scoresDiv = document.getElementById("show-scores")

  cashierScore.textContent = cashier
  overallScore.textContent = overall

  let btnText = showHide.textContent
  if(btnText === "Display Ratings"){
	scoresDiv.style.display = "block"
	showHide.innerHTML = "Hide Ratings"
  }
  else{
	scoresDiv.style.display = "none"
	showHide.innerHTML = "Display Ratings"
  }
})