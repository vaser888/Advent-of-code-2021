/*
async function getData(){
  const response = await fetch('data.txt');
  const text = await response.text();
  //console.log(text);
  main(text)
  return text;
}
*/

//part 1

fetch('data.txt') // get the data from text file. 
  .then(response => response.text())
  .then(text => { 
    main(text); // do main function
})



function main(data){
  var decData = decodeData(data); // splits the text file into an array
  var numList = decData.shift(); // gets the list of numbers as a string and removes it from the rest of the array
  var numList = breakNumbers(numList); // breaks the list of numbers into their own array so they are split up
  decData = checkForEmptyStingsAndDelete(decData);

  //console.log(decData, numList);
  var t = findSmallestCard(decData, numList);

  //console.log(t);
  findSolution(decData, numList, t);
}



function findSolution(decData, numList, cardStuff){

  var card = getCardData(cardStuff[1], decData);
  //var actualCard = cardArrayToCard(card);
  //console.log(actualCard);

 var answerCard = removeCalledNumbersFromCard(card, cardStuff[0], numList);
//console.log(answerCard);
 var answerCardTotal = 0;
 for (i = 0; i <= answerCard.length - 1; i++){
  answerCardTotal = answerCardTotal + Number(answerCard[i]);
 }
 console.log("answer: " + answerCardTotal * numList[cardStuff[0]]);
}

function removeCalledNumbersFromCard(cardArray, maxcount, numList){
  for (i = 0; i <= 24; i++){
    for (g = 0; g <= maxcount; g++){
      if (cardArray[i] === numList[g]) {
        cardArray[i] = 0;
      }
    }

  }
  return cardArray;
}

function findSmallestCard(decData, numList){

  var lowestLineInCards = [];

  for (a = 0; a <= (decData.length/5) - 1; a++){

    var card = getCardData(a, decData);
    //console.log(card);
    var dummyCard = [];
    for (i = 0; i <= card.length - 1; i++){
      for(n = 0; n <= numList.length - 1; n++){
        if(card[i] === numList[n]){
          dummyCard.push(n);
        }
      }
    }
    //console.log(dummyCard);
    var h = checkHorizonatal(dummyCard);
    var v = checkVertical(dummyCard);
    //console.log(h,v);
    var totalScores = h.concat(v);
  
    var g = findSmallestNum(totalScores, false);
    lowestLineInCards.push(g);
  }
  var i = lowestLineInCards.flat();
  var y = findBiggestNum(i,true); // change this to findBiggest or findSmallest for the answer
  //console.log(i)
  return y;
}


function decodeData(text){ // splits up the data into an array
    var lines = text.split("\r\n");
    return lines;
}

function breakNumbers(string){ // splits up the numberlist data
  var list = string.split(",");
  return list;
}

function getCardData(cardNumber,dataList){ // get the data for a specific card
  var cardArray = []
  for (i = 0 + (cardNumber * 5); i <= 4 + (cardNumber * 5); i++){
    cardArray.push(dataList[i]);
  }

  var t = cardArray.join(" ");
  t = t.split(" ");
  var cardString = checkForEmptyStingsAndDelete(t);

  return cardString;
}

function checkForEmptyStingsAndDelete(data){ // get rid of any "" in an array
  for (c = 0; c <= data.length - 1; c++){
    if (data[c] === ''){
      delete data[c];
    }
  }
  data = data.flat();
  return data;
}

function checkHorizonatal(data){ // finds the highest number in horizontal from the dummy cards
  var count = 0;
  var horArray = [];
  for (i = 0; i <= data.length - 1; i++){
    if (count <= data[i]){
      count = data[i];
    }
    if (i % 5 === 4){
      horArray.push(count);
      count = 0;
    }
  }
  return horArray;
}

function checkVertical(data){ // finds the highest number in vertical from the dummy card
  var count = 0;
  var verArray = [];
  for (i = 0; i <= data.length - 1; i++){
    var h = Math.floor(i/5) % 5;
    var s = i % 5;
    if (count <= data[(s*5) + h]){
      count = data[(s*5) + h];
    }
    if (i % 5 === 4){
      verArray.push(count);
      count = 0;
    }
  }
  return verArray;
}

function findSmallestNum(array, boul){ // find the smallest number in an array and display position if boul is true
  var smallestVal = [];
  smallestVal[0] = array[0];

  for (n = 1; n <= array.length-1; n++){ 
    if (smallestVal[0] >= array[n]){
      smallestVal[0] = array[n];
      if (boul == true){
        smallestVal[1] = n; // location in the array
      }
    }
  }
  return smallestVal;
}

function cardArrayToCard(array){ // converts an array of 25 numbers to a bingo card
  var tmp1 = [];
  var tmp2 = [];
  for (i = 0; i <= 24 ; i++){
      tmp2.push(array[i])
    if (i % 5 === 4){
      tmp1.push(tmp2);
      tmp2 = [];
    }
  }
  return tmp1;
}

//part 2

function findBiggestNum(array, boul){ // find the smallest number in an array and display position if boul is true
  var biggestVal = [];
  biggestVal[0] = array[0];
for (f = 1; f <= array.length - 1; f++){
  if (biggestVal[0] <= array[f]){
      biggestVal[0] = array[f];
      if (boul == true){
        biggestVal[1] = f;
      }
  }
}
  return biggestVal;
}
