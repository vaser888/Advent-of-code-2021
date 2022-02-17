// part 1
var gammaTotal = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];



for (r = 0; r <= list.length - 1; r++){

    var a = list[r].split("");

    for (i = 0; i <= a.length - 1; i++){
        if (a[i] === "1"){
            gammaTotal[i] = gammaTotal[i] + 1;
        }
        if (a[i] === "0"){
            gammaTotal[i] = gammaTotal[i] - 1;
        }
    }
}
console.log(gammaTotal); // 111100111111

var aToBinary = [];

for (i = 0; i <= gammaTotal.length - 1; i++){
    if (gammaTotal[i] < 0){
        aToBinary.push(0);
    }
    if (gammaTotal[i] > 0){
        aToBinary.push(1);
    }
}
var binary = aToBinary.join("");
var digit = parseInt(binary, 2);
var inv = ~digit;
console.log(digit, inv, binary);

console.log("part 2 V");
// part 2

/*
list = [
"00100",
"11110",
"10110",
"10111",
"10101",
"01111",
"00111",
"11100",
"10000",
"11001",
"00010",
"01010"
]
*/

var oxygenArray = [];
oxygenArray = list;
console.log(oxygenArray);

function yes(){
for (i = 0; i <= 11; i++){
    
    var onesArray = [];
    var zerosArray = [];

    for (r = 0; r <= oxygenArray.length - 1; r++){
        var a = oxygenArray[r].split("");

        if (a[i] === "1"){
            onesArray.push(oxygenArray[r]);
        }
        if (a[i] === "0"){
            zerosArray.push(oxygenArray[r]);
        }
    }
    if (onesArray.length <= zerosArray.length){ // just flip the less than to greater than
        oxygenArray = onesArray;
        console.log("one")
    }
    else{
        oxygenArray = zerosArray;
        console.log("zero")
    }
    console.log(oxygenArray);
    if(oxygenArray.length === 2){
        return oxygenArray;
    }
}
}

var y = yes()
console.log(y);

function binToDec(input) {
    var bin = Number(input);
    var digit = parseInt(bin, 2);
    return digit
}

//111100011111
//001001100101
var x = binToDec("001001100101");
var y = binToDec("111100011111");

console.log(y*x);
