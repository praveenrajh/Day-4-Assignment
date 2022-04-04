//Day 4 Assignment 1

var obj1 = { 
  name: "Person 1", 
  age:5 
};
var obj2 = { 
  age:5, 
  name: "Person 1" 
};

var str1=JSON.stringify(obj1);
var str2=JSON.stringify(obj2) ;     
 
if(str1===str2){
  console.log(true)
}else{
  console.log(false)
}
 


 