// Part 1


var x = 0;
var y = 0;
var a = 0;

for (i = 0; i <= list.length-1; i++){

    var splitString = list[i].split("");

    var distance = Number(splitString[splitString.length - 1]);

    if (splitString[0] === "f"){
        x = x + distance;
        y = y + (distance * a); //part 2
    }
    if (splitString[0] === "d"){
        //y = y + distance;
        a = a + distance; // part 2
    }
    if (splitString[0] === "u"){
        //y = y - distance;
        a = a - distance; // part 2
    }
}

console.log(x*y);

