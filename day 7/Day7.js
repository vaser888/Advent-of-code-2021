
//part 1
var getmax = list;
var getmaxNum = list;

// get the highest value in the array 
var max = getmax.reduce(function(a, b) {
    return Math.max(a, b);
}, 0);

//get the total value of the array
var totalFuelRam = getmaxNum.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  }, 0)

var totalFuel = 0; // total fuel that will be used (start at zero)
var position;

for (x = 0; x <= max; x++){
    
    for(y = 0; y <= list.length-1; y++){
        var totalFuel = totalFuel + Math.abs(x - list[y]);
    }

    if (totalFuel < totalFuelRam){
        totalFuelRam = totalFuel;
        position = x;
    }
    totalFuel = 0;
}

console.log(totalFuelRam, position);


//part 2

var getmax = list;
var getmaxNum = list;

var max = getmax.reduce(function(a, b) {
    return Math.max(a, b);
}, 0);

var totalFuelRam2 = 1000000000000;

var totalFuel = 0; // total fuel that will be used (start at zero)
var position;

for (x = 0; x <= max; x++){
    
    for(y = 0; y <= list.length-1; y++){
        var fuel = 0;
        var newFuel = Math.abs(x - list[y]);
        for (z = 0; z <= newFuel; z++){
            fuel = fuel + z;
        }
        var totalFuel = totalFuel + fuel; 

    }

    if (totalFuel < totalFuelRam2){
        totalFuelRam2 = totalFuel;
        position = x;
    }

    totalFuel = 0;

}

console.log(totalFuelRam2, position);