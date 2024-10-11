const getLength = (lengthInput) => {
  let indexLength = 0
  for (let index = 0; index < lengthInput.length; index +=1 ) {
    if (Number(lengthInput[index]) === lengthInput[index]){
      indexLength ++;
    }
  }
  return indexLength;
}
const getSum = (sumInput) => {
  let arraySum = 0
  for (let index = 0; index < sumInput.length; index +=1 ) {
    arraySum = arraySum +sumInput[index];
  }
  return arraySum;
}
const getMean = (inputMean) => {
  let meanSum = 0
  for (let index = 0; index < inputMean.length; index +=1 ) {
    meanSum = meanSum +inputMean[index];
  }
  const arrayMean = meanSum/inputMean.length;
  return arrayMean;
}
const getMin = (inputMin) => {
  let arrayMin = inputMin[0];
  for (let index = 0; index < inputMin.length; index +=1 ){
    if (inputMin[index] < arrayMin) {
      arrayMin = inputMin[index];
    }
  }
  return arrayMin;
}
const getMax = (inputMax) => {
  let arrayMax = inputMax[0];
  for (let index = 0; index < inputMax.length; index +=1 ){
    if (inputMax[index] > arrayMax) {
      arrayMax = inputMax[index];
    }
  }
  return arrayMax;
}
const getRange = (inputRange) => {
  const arrayRange = getMax(inputRange) - getMin(inputRange)
  return arrayRange
}
const getEvens = (inputEvens) => {
  const arrayEvens = [];
  for (let index = 0; index < inputEvens.length; index +=1 ){
    if (inputEvens[index]%2 === 0) {
      arrayEvens.push(inputEvens[index]);
    }
  }
  return arrayEvens
}
const getOdds = (inputOdds) => {
  const arrayOdds = [];
  for (let index = 0; index < inputOdds.length; index +=1 ){
    if (inputOdds[index]%2 === 1) {
      arrayOdds.push(inputOdds[index]);
    }
  }
  return arrayOdds
}
const numbers = prompt(`Enter some numbers seperated by commas`);
const splitNumbers = numbers.split(`,`);
const numArray = [];
for (let index = 0; index < splitNumbers.length; index +=1 ) {
  numArray.push(Number(splitNumbers[index]));
}
