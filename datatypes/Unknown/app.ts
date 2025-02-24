let num1:unknown;



num1 = "Dheeraj";
num1 = 5;
num1 = true;

if(typeof num1 === "number"){
  console.log(num1 + 4);

}else if(typeof num1 === "boolean"){
  console.log(num1);
}

