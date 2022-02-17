
//83 51 58 54 54 300
var days = 5000;

var babyFishArray = [0, 0, 0, 0, 0, 0, 0, 0, 0]; // 0,1,2,3,4,5,6,7,8
var oldFishArray = [0, 83, 51, 58, 54, 54, 0]; // 0,1,2,3,4,5,6
var accumulatorSmall = 0;
var accumulatorBig = 0;

for (i=1; i<=days; i++){
    accumulatorBig = oldFishArray[0];
    accumulatorSmall = babyFishArray[0];

    for (x=0; x<=oldFishArray.length-1;x++){
        oldFishArray[x] = oldFishArray[x+1];
    }
    for (x=0; x<=babyFishArray.length-1; x++){
        babyFishArray[x] = babyFishArray[x+1];
    }
    babyFishArray[8] = accumulatorBig + accumulatorSmall;
    oldFishArray[6] = accumulatorBig + accumulatorSmall;
    console.log("day"+ i);
    console.log(oldFishArray);
    console.log(babyFishArray);
    
}
var total = 0
for (i=0; i<=babyFishArray.length-1;i++){
    total = total + babyFishArray[i]; 
}
for (i=0; i<=oldFishArray.length-1;i++){
    total = total + oldFishArray[i]; 
}
console.log(total);
/*
var numb1=0;
var numb2=0;
var numb3=0;
var numb4=0;
var numb5=0;

function sort (){
    for (i=0; i <= fish.length-1; i++){
        if (fish[i] === 1){
            numb1 = numb1+1;
        }
        if (fish[i] === 2){
            numb2 = numb2+1;
        }
        if (fish[i] === 3){
            numb3 = numb3+1;
        }
        if (fish[i] === 4){
            numb4 = numb4+1;
        }
        if (fish[i] === 5){
            numb5 = numb5+1;
        }
    }
}
sort();
var totalnum = numb1+numb2+numb3+numb4+numb5
console.log(numb1,numb2,numb3,numb4,numb5, totalnum);
*/