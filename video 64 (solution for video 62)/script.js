//Solution for Business name generator exercise (Video 62)

let rand = Math.random();
if (rand < 0.33) {
  //0-0.33, 0.33-0.66, 0.66-1

  //let's generate the first word
  first = "Crazy";
} else if (rand < 0.66 && rand >= 0.33) {
  first = "Amazing";
} else {
  first = "Fire";
}

if (rand < 0.33) {
  //0-0.33, 0.33-0.66, 0.66-1

  //let's generate the second word
  second = "Engine";
} else if (rand < 0.66 && rand >= 0.33) {
  second = "Foods";
} else {
  second = "Garments";
}

if (rand < 0.33) {
  //0-0.33, 0.33-0.66, 0.66-1

  //let's generate the third word
  third = "Bros";
} else if (rand < 0.66 && rand >= 0.33) {
  third = "Limited";
} else {
  third = "Hub";
}
