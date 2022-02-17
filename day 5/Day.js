fetch('data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){
    var d = [];
    d = splitDataToEachLine(data);
    d = structureData(d);
    //console.log(d); // data
    var sorted = findVerAndHorData(d);
    var diag = findDiagData(d);
    d = findArrayDimentions(d);
    var t = createBlank2DArray(d[0],d[1]);

    console.log(t);
    var p = plotPointsInArray(t, sorted);
    var r = plotDiagInArray(p, diag);

    for(i = 0; i <= p.length-1; i++){
        console.log(p[i]);
    }
    findAnswerPart1(p);
}

function splitDataToEachLine(data){
    var lines = data.split("\r\n");
    return lines;
}

function structureData(dataArray){
    var newArray1 = [];
    for (i = 0; i <= dataArray.length - 1; i++){
    var lines = dataArray[i].split(" -> ");
    newArray1.push(lines);   
}
    var newArray2 = [];
    for (i = 0; i <= newArray1.length - 1; i++){
        for (n = 0; n <= 1; n++){
            var lines = newArray1[i][n].split(",");
            newArray2.push(lines);
        }
    }
return newArray2;
}

function findVerAndHorData(coord){
    var combedArray = [];
    for (i = 0; i <= coord.length/2 - 1; i++){
        var t = Math.floor((i % 2)/2);
        var y = i + t;
        var x1 = coord[y+i][0];
        var x2 = coord[y+i+1][0];
        var y1 = coord[y+i][1];
        var y2 = coord[y+i+1][1];

        //console.log(x1,x2,y1,y2);
        if (x1 === x2){
            combedArray.push(coord[y+i]);
            combedArray.push(coord[y+i+1]);
        }
        if (y1 === y2){
            combedArray.push(coord[y+i]);
            combedArray.push(coord[y+i+1]);
        }
    }
    console.log(combedArray);
    return combedArray;
}

function findDiagData(coord){
    var combedArray = [];
    for (i = 0; i <= coord.length/2 - 1; i++){
        var t = Math.floor((i % 2)/2);
        var y = i + t;
        var x1 = coord[y+i][0];
        var x2 = coord[y+i+1][0];
        var y1 = coord[y+i][1];
        var y2 = coord[y+i+1][1];

        if (x1 != x2 && y1 != y2){
            combedArray.push(coord[y+i]);
            combedArray.push(coord[y+i+1]);
        }

    }
    console.log(combedArray);
    return combedArray;
}

function findArrayDimentions(array){
    var arr = [];
    var x = 0
    var y = 0
    for (i = 0; i <= array.length - 1; i++){

        if (x < Number(array[i][0])){
            x = array[i][0];
            arr[0] = x;
        }

        if (y < Number(array[i][1])){
            y = array[i][1];
            arr[1] = y;
        }
    }
    //console.log(arr, array.length);
    return arr;
}

function createBlank2DArray(xLength, yLength){
    var arr1 = [];

    for (y = 0; y <= yLength; y++){
        var arr2 = [];
        for (i = 0; i <= xLength; i++){
            arr2[i] = 0;
        }
        arr1[y] = arr2;
    }
    return arr1;
}

function plotPointsInArray(array, pointsArray){

    for (i = 0; i <= pointsArray.length/2 - 1; i++){
        var t = Math.floor((i % 2)/2);
        var y = i + t;
        var x1 = Number(pointsArray[y+i][0]);
        var x2 = Number(pointsArray[y+i+1][0]);
        var y1 = Number(pointsArray[y+i][1]);
        var y2 = Number(pointsArray[y+i+1][1]);
        console.log(x1,x2,y1,y2);

        var testX = x1 - x2;
        var testY = y1 - y2;
        if (testX < 0){
            console.log("f " + x1,x2);
            var v = x1;
            for(v = x1; v <= x2; v++){
                array[y1][v] = array[y1][v] + 1;
            }
        }
        if (testX > 0){
            console.log("b " + x1,x2);
            for (v = x1; v >= x2; v--){
                array[y1][v] = array[y1][v] + 1;
            }
        }
        if (testY < 0){
            console.log("d " + y1,y2);
            for (v = y1; v <= y2; v++){
                array[v][x1] = array[v][x1] + 1;
            }
        }
        if (testY > 0){
            console.log("u " + y1,y2);
            for (v = y1; v >= y2; v--){
                array[v][x1] = array[v][x1] + 1;
            }
        }
    }
    
    console.log(array);
    return array;
}

function plotDiagInArray(array, pointsArray){
    for (i = 0; i <= pointsArray.length/2 - 1; i++){
        var t = Math.floor((i % 2)/2);
        var y = i + t;
        var x1 = Number(pointsArray[y+i][0]);
        var x2 = Number(pointsArray[y+i+1][0]);
        var y1 = Number(pointsArray[y+i][1]);
        var y2 = Number(pointsArray[y+i+1][1]);
        

        var testX = x1 - x2;
        var testY = y1 - y2;
        if (Math.abs(testX) == Math.abs(testY)){ //make sure that the data is actaully 45 degrees
            if(testX>0 && testY<0){
                //console.log(x1,y1,x2,y2);
                for (t = 0; t <= testX; t++){
                    var xx1 = x1-t;
                    var yy1 = y1+t;
                    //console.log(xx1,yy1);
                    array[yy1][xx1] = array[yy1][xx1] + 1;
                }
            }
            if(testX<0 && testY<0){
                //console.log(x1,y1,x2,y2);
                for (t = 0; t <= Math.abs(testX); t++){
                    var xx1 = x1+t;
                    var yy1 = y1+t;
                    //console.log(xx1,yy1);
                    array[yy1][xx1] = array[yy1][xx1] + 1;
                }
            }
            if(testX>0 && testY>0){
                //console.log(x1,y1,x2,y2);
                for (t = 0; t <= Math.abs(testX); t++){
                    var xx1 = x1-t;
                    var yy1 = y1-t;
                    //console.log(xx1,yy1);
                    array[yy1][xx1] = array[yy1][xx1] + 1;
                }
            }
            if(testX<0 && testY>0){
                //console.log(x1,y1,x2,y2);
                for (t = 0; t <= Math.abs(testX); t++){
                    var xx1 = x1+t;
                    var yy1 = y1-t;
                    //console.log(xx1,yy1);
                    array[yy1][xx1] = array[yy1][xx1] + 1;
                }
            }
        }
    }
}

function findAnswerPart1(array){
    array = array.flat();
    array = array.filter(isBigEnough);
    console.log(array.length);
}

function isBigEnough(value){
    return value >=2;
}

