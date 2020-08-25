// Named ftn
function add(a,b){
    return a+b;
}
console.log(add(1,1));


//Annonyms ftn
var result =function(c,d){
    return c+d;
}
console.log(result(2,2));
setTimeout(function(){console.log("This is annonyms ftn")},2000);

 
//ftn constructor
var multiply = new Function("a","b","c","return a*b*c")
    console.log(multiply(1,1,1));

function employee(n,s){
    this.name =n;
    this.salary = s
}    
var emp1 = new employee("devi",10)
var emp2 = new employee("devi2",20)

console.log("emp1 details :" + emp1.name + '\xa0\xa0' + "salary" +"\xa0" +emp1.salary);

//self invoking ftn
(function(a,b){
    addResult= a+b;
})(2,2)
console.log("This is add result"+addResult);



