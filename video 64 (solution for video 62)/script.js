//Solution for Business name generator exercise (Video 62)

let rand = Math.random()
if(rand < 0.33){
    //0-0.33, 0.33-0.66, 0.66-1
    first = "Crazy"
}
else if(rand < 0.66 && rand >= 0.33){
    first = "Amazing"
}
else{
    first = "Fire"
}