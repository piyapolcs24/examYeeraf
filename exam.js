///////////////////challenge 1- ThreeFive.md/////////////////////
var i ;
for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0){
    console.log("ThreeFive");
  } else if (i % 3 === 0) {
    console.log("Three");
  } else if (i % 5 === 0) {
    console.log("Five");
  } else {
    console.log(i);
  }
}

///////////////////challenge 2 - Sum2Elements.md/////////////////////

let nums = [2,7,11,15];
let sum = 9;

const findIndexInArr = () => {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == sum) {
        console.log(`Input: nums = ${nums}, sum = ${sum}`);
        console.log("Output:", i, j);
        console.log(`Explanation: Because nums[${i}] + nums[${j}]`);
        return true;
      }
    }
  }
};

if(findIndexInArr()){
  console.log("success")
}else{
  console.log(`Input: nums = ${nums}, sum = ${sum}`)
  console.log("Output: no output")
  console.log(`Explanation: The are no two numbers that add up to ${sum}`)
}
