const isPalindrome = (palin:string):boolean => {

  let myPalin = palin.split("").reverse().join("");
  return myPalin === palin;
}

console.log(isPalindrome("12321"));
