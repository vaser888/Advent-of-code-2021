fetch('data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})

function main(data){
    
    var d = splitDataToEachLine(data); 
    d = breakDataDownMore(d);
    findLowestPoints(d);
    
    const xLength = d[0].length;
    const yLength = d.length;

    for (y = 0; y <= yLength - 1; y++){

            for(x = 0; x <= xLength - 1; x++){
                var chk = Number(d[y][x]) 
                if (chk <= 8){
                    d[y][x] = "0";
                }
            }
            //console.log(d[y]);

        }
    //console.log(d);
/* 
    // copy an array to a new array
    var copy = [];
    for (y = 0; y <= yLength - 1; y++){
        var co =[];
        for(x = 0; x <= xLength - 1; x++){
                co[x] = d[y][x];
            }
        copy.push(co);
        }
    console.log(copy);
*/
    var tracker = [];
    for (y = 0; y <= yLength - 1; y++){ // checking algorythm 
        for (x = 0; x <= xLength - 1; x++){
            var cor = [];
            if ( d[y][x] == "0"){  
                cor.push(y);
                cor.push(x);
                findArea(d, cor, tracker);
            }
        }
    }
    tracker = tracker.sort((a,b) => a-b);
    //console.log(tracker);
    var u = tracker.length;
    console.log("Part 2:",tracker[u-1]*tracker[u-2]*tracker[u-3])

}

function findArea (data, currentCor, tracker){
    //console.log(currentCor);
    var track = 1;
    var counter = 0;

    for (f = 0; f <= track-1; f++){
        
        //console.log(currentCor);


        //console.log("y",2*counter, "x", 2*counter+1);
        var y2 = Number(currentCor[2*counter]);
        var x2 = Number(currentCor[2*counter+1]);
        //console.log("y/x:",y2,x2);
        //var chk = data[y2][x2];
        var chkU = data[y2-1];
        var chkD = data[y2+1];
        var chkR = data[y2][x2+1];
        var chkL = data[y2][x2-1];
        //console.log(chkU,chkD,chkR,chkL);
        if (chkR == null){
            chkR = 9;
        }else{
            chkR = Number(data[y2][x2+1]);
        }
        if (chkL == null){
            chkL = 9;
        }else{
            chkL = Number(data[y2][x2-1]);
        }
        if (chkD == null){
            chkD = 9;    
        }else{
            chkD = Number(data[y2+1][x2]);
        }
        if (chkU == null){
            chkU = 9;
        }else{
            chkU = Number(data[y2-1][x2]);
        }
        //console.log(chkU,chkD,chkR,chkL);
        var dupeQ;
        if (chkR == "0"){
            
            var var1 = y2;
            var var2 = x2+1;
            dupeQ = NoDupesInArray(currentCor, var1, var2);

            if (dupeQ == false){
                currentCor.push(var1);
                currentCor.push(var2);
                //console.log("to the right",var1,var2);
                track = track + 1;
            }

        }
        if (chkL == "0"){
            var var1 = y2;
            var var2 = x2-1;
            dupeQ = NoDupesInArray(currentCor, var1, var2);

            if (dupeQ == false){
                currentCor.push(var1);
                currentCor.push(var2);
                //console.log("to the left",var1,var2);
                track = track + 1;
            }
        }
        if (chkU == "0"){
            var var1 = y2-1;
            var var2 = x2;
            dupeQ = NoDupesInArray(currentCor, var1, var2);
            
            if (dupeQ == false){
                currentCor.push(var1);
                currentCor.push(var2);
                //console.log("to the up",var1,var2);
                track = track + 1;
            }
        }
        if (chkD == "0"){
            var var1 = y2+1;
            var var2 = x2;
            dupeQ = NoDupesInArray(currentCor, var1, var2);

            if (dupeQ == false){
                currentCor.push(var1);
                currentCor.push(var2);
                //console.log("to the down",var1,var2);
                track = track + 1;
            }
        }


        data[y2][x2] = "1";
        //console.log("tracker",track)

        counter = counter + 1;
    }

    if (track == "1"){
        track = 0;
    }
//console.log("done checking area");
//console.log("area is: ", track);
tracker.push(track);

}

function NoDupesInArray(array, y3, x3){

    for (h = 0; h <= (array.length/2)-1; h++){
        var t1 = array[h*2];
        var t2 = array[h*2+1];
        if (t1 == y3 && t2 == x3){
            return true;
        }
    }
    return false;
}

function splitDataToEachLine(data){
    var lines = data.split("\r\n");
    return lines;
}

function breakDataDownMore(data){
    var newArray1 = [];
    for (i = 0; i <= data.length - 1; i++){
        newArray1[i] = data[i].split("");
    }
    return newArray1;
}

function findLowestPoints(d){
    const xLength = d[0].length;
    const yLength = d.length;
    //console.log(xLength,yLength);
    var storage = 0;
    for (y = 0; y <= yLength - 1; y++){
        for(x = 0; x <= xLength - 1; x++){
            var chk = d[y][x];
            var chkU = d[y-1];
            var chkD = d[y+1];
            var chkR = d[y][x+1];
            var chkL = d[y][x-1];
            if (chkR == null){
                chkR = 9;
            }
            if (chkL == null){
                chkL = 9;
            }
            if (chkU == null){
                if (
                    chk < Number(chkD[x]) &&
                    chk < Number(chkL) &&
                    chk < Number(chkR)
                ){
                    storage = Number(storage + Number(chk) + 1);
                }
                //console.log("main:"+d[y][x],chkL, chkD[x], chkR);
            }
            else if (chkD == null){
                if (
                    chk < Number(chkU[x]) &&
                    chk < Number(chkL) &&
                    chk < Number(chkR)
                ){
                    storage = Number(storage + Number(chk) + 1);
                }
                //console.log("main:"+d[y][x],chkL, chkU[x], chkR);
            }
            else{
                if (chk < Number(chkD[x]) &&
                    chk < Number(chkU[x])&&
                    chk < Number(chkL) &&
                    chk < Number(chkR)
                    ){
                       //console.log(d[y][x]);
                       storage = Number(storage + Number(chk) + 1);
                    }
                //console.log("main:"+d[y][x],chkL, chkU[x], chkD[x], chkR);
            }
        }
    }
    console.log("part 1: "+storage);
}