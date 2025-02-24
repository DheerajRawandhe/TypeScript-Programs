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


const greet = (name:string, id:number):string => {

  return `welcome ${name} your id is ${id}`;
  
}
const mygreett = greet("Dheeraj", 1);
console.log(mygreett);
