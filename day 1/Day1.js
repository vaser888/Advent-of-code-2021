
//part1
/*
var total = 0;
console.log(list);
for (x=0; x<=list.length-1;x++){
    //console.log(list[x], list[x+1]);
    if (list[x]<list[x+1]){
         total = total + 1;
         //console.log(total);
    }
}
console.log(total);
*/
//part 2

var totalTwo = 0;
for (x=0; x<=list.length-3;x++){
    var sweep1 = list[x] + list [x+1] + list [x+2];
    var sweep2 = list[x+1] + list [x+2] + list [x+3];
    //console.log(sweep1);
    if (sweep1<sweep2){
        totalTwo = totalTwo +1;
    }

}
console.log(totalTwo);