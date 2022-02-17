// part 1
var one = 0;
var four = 0;
var seven = 0;
var eight = 0;

for (x = 0; x <= list.length - 1; x++){
    var lineData = list[x].slice(61, list.length);
    lineData = lineData.split(' ');
    for (y = 0; y <= 3; y++){
        var displayValue = lineData[y].length;
        switch(displayValue){
            case 2:
                one = one + 1;
                break;
            case 4:
                four = four + 1;
                break;
            case 3:
                seven = seven + 1;
                break;
            case 7:
                eight = eight + 1;
                break;
        } 
    }
}

console.log("part 1: "+(one + four + seven + eight));


// part 2

var total = 0;

for (s = 0; s <= list.length - 1; s++){

    var p = list[s].slice(0,58)
    var l = p.split(' ');
    //console.log(l);


    for (y = 0; y <= 9; y++){ //  sorts the data in the array so that they are in order from smallest to longest
        for (x = 0; x <= 8; x++){//  I know bubble sort is not great but im lazy 
            if (l[x].length >= l[x+1].length) {
                var holdMem = l[x];
                l[x] = l[x+1];
                l[x+1] = holdMem;
            }
        }
    }
    //console.log(l);

    var sortedArray = [];

    for (x = 0; x <= 9; x++){ // sort all the data in the individual arrays
        var dataEntry =  l[x].split("");
        dataEntry.sort();
        
        var temp = "";
        for(y = 0; y <= dataEntry.length - 1; y++){
            temp = temp + dataEntry[y];
        }
        sortedArray.push(temp);
    }
    //console.log(sortedArray);

    // 0 = /6/, 1 = /2/, 2 = /5/, 3 = /5/, 4 = /4/ 
    // 5 = /5/, 6 = /6/, 7 = /3/, 8 = /7/, 9 = /6/ 

    //   0
    // 5   1
    //   6 
    // 4   2
    //   3

    //   b
    // f   a
    //   e
    // d   c
    //   g

    //[ "ac", "abc", "acef", "abdeg", "bcefg", "abceg", "abcdfg", "bcdefg", "abcefg", "abcdefg" ]

    // ac - abc = b is top
    // acef - ac = ef // zero does not have e or f but 6 and 9 have both
    // 0 = abcdfg
    // abcdefg - abcdfg = e is middle
    // ef - e = f is left top
    // use bfe and ac to test for 9
    // 9 = abcefg // g is bottom
    // since 9 and 0 are know, 6 is now known
    // 6 = bcdefg 
    // compair bcdefg with ac => c is bottom right and a is top right
    // compair 9 with 8 // abcefg - abcdefg = d // d is bottom left

    var sevenSegArray = [0,0,0,0,0,0,0]
    
    var arr1 = sortedArray[1].split(''); // 7
    var arr2 = sortedArray[0].split(''); // 1
    var intersection = arr1.filter(x => !arr2.includes(x));
    sevenSegArray[0] = intersection[0]; //store data

    arr1 = sortedArray[2].split(''); // 4
    var intersection2 = arr1.filter(x => !arr2.includes(x));
    var zeroPlace = 0;
    for (i = 0; i <= 2; i++){
        arr2 = sortedArray[i+6];
        var intersection3 = intersection2.filter(x => arr2.includes(x));
        if (intersection3.length === 1){
            zeroPlace = (i+6);
        }
    }
    arr1 = sortedArray[9].split('');
    arr2 = sortedArray[zeroPlace].split('');
    intersection = arr1.filter(x => !arr2.includes(x));
    sevenSegArray[6] = intersection[0]; // store data
    var intersection4 = intersection3.filter(x=> !sevenSegArray[6].includes(x));
    sevenSegArray[5] = intersection4[0]; // store data

    var testNine = sortedArray[0] + sevenSegArray[0] + sevenSegArray[5] + sevenSegArray[6];

    testNine = testNine.split('');
    var ninePlace = 0;
    var imDumb = 0;
    for (i = 0; i <= 2; i++){
        arr2 = sortedArray[i+6].split('');
        var intersection5 = arr2.filter(x=> !testNine.includes(x));

        if (intersection5.length === 1){
            ninePlace = (i+6);
            imDumb = intersection5[0]
        }
    }
    sevenSegArray[3] = imDumb; // store data

    var testForSix = [6,7,8];
    var sixPos = [zeroPlace, ninePlace];
    var intersection6 = testForSix.filter(x => !sixPos.includes(x));

    arr1 = sortedArray[intersection6[0]].split('');
    arr2 = sortedArray[0].split('');
    var intersection7 = arr2.filter(x=> !arr1.includes(x));

    sevenSegArray[1] = intersection7[0]; // store data

    var intersection8 = arr2.filter(x => !intersection7.includes(x));

    sevenSegArray[2] = intersection8[0]; // store data

    arr1 = sortedArray[9].split('');
    arr2 = sortedArray[ninePlace].split('');

    var intersection9 = arr1.filter(x=> !arr2.includes(x));

    sevenSegArray[4] = intersection9[0]; // store data

    //console.log(sevenSegArray); // decoded complete 

    // create decode array 

    var decodedSevenSeg = [];

    for (i = 0; i <= 9; i++){
        var letterGroup = "";
        switch(i){
            case 0:
                letterGroup = sevenSegArray[0] + sevenSegArray[1] + sevenSegArray[2] + sevenSegArray[3] + sevenSegArray[4] + sevenSegArray[5];
                decodedSevenSeg[0] = letterGroup;
                break;
            case 1:
                letterGroup = sevenSegArray[1] + sevenSegArray[2];
                decodedSevenSeg[1] = letterGroup;
                break;
            case 2:
                letterGroup = sevenSegArray[0] + sevenSegArray[1] + sevenSegArray[6] + sevenSegArray[4] + sevenSegArray[3];
                decodedSevenSeg[2] = letterGroup;
                break;
            case 3:
                letterGroup = sevenSegArray[0] + sevenSegArray[1] + sevenSegArray[6] + sevenSegArray[2] + sevenSegArray[3];
                decodedSevenSeg[3] = letterGroup;
                break;
            case 4:
                letterGroup = sevenSegArray[5] + sevenSegArray[6] + sevenSegArray[1] + sevenSegArray[2];
                decodedSevenSeg[4] = letterGroup;
                break;
            case 5:
                letterGroup = sevenSegArray[0] + sevenSegArray[5] + sevenSegArray[6] + sevenSegArray[2] + sevenSegArray[3];
                decodedSevenSeg[5] = letterGroup;
                break;
            case 6:
                letterGroup = sevenSegArray[0] + sevenSegArray[5] + sevenSegArray[4] + sevenSegArray[3] + sevenSegArray[2] + sevenSegArray[6];  
                decodedSevenSeg[6] = letterGroup;
                break;
            case 7:
                letterGroup = sevenSegArray[0] + sevenSegArray[1] + sevenSegArray[2];
                decodedSevenSeg[7] = letterGroup;
                break;
            case 8:
                letterGroup = sevenSegArray[0] + sevenSegArray[1] + sevenSegArray[2] + sevenSegArray[3] + sevenSegArray[4] + sevenSegArray[5] + sevenSegArray[6];
                decodedSevenSeg[8] = letterGroup;
                break;
            case 9:
                letterGroup = sevenSegArray[0] + sevenSegArray[5] + sevenSegArray[6] + sevenSegArray[1] + sevenSegArray[2] + sevenSegArray[3];  
                decodedSevenSeg[9] = letterGroup;
                break;
        }
    }

    //console.log(decodedSevenSeg);


    var displayData = list[s].slice(61, list.length);
    displayData = displayData.split(' ');

    var displayedNumbers = '';
    for(i = 0; i <= 3; i++){
        for(v = 0; v <= 9; v++){
            arr1 = displayData[i].split('');
            arr2 = decodedSevenSeg[v].split('');
            var difference = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)));
            if (difference.length === 0){
                displayedNumbers = displayedNumbers + v;   
                //console.log(displayedNumbers);
            }
        }
    }
    if (displayedNumbers === ""){
        //console.log(s,displayData, sortedArray,decodedSevenSeg);

    }
    //console.log(displayedNumbers);
    total = total + Number(displayedNumbers);
}
console.log("part 2: " + total);
