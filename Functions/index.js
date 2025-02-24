// =========== Invocation Fun ===============
/*
function greet(name:string, id:number){
  console.log(`welcome ${name} your id is ${id}`);
}
greet("Dheeraj", 1); */
//============ Arrow Function ==============
/*
const greet = (name:string, id:number) => {

  console.log(`welcome ${name} your id is ${id}`);
  
}
greet("Dheeraj", 1);  */


// ======== Return Type ================

var greet3 = function (name, id) {
    return "welcome ".concat(name, " your id is ").concat(id);
};

var mygreet = greet3("Dheeraj", 1);
console.log(mygreet);


