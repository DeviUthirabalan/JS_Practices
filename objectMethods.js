var a = {
    name : "abc",
    age :20
}
Object.freeze(a)   //We cant change propert values or delete or add
a.age=10;
delete a.name;
console.log(a.age);
console.log(a.name);
console.log(a.address);


var b = {
    name : "devi",
    age :20
}


Object.seal(b)   //We can change property value .But,we cant delete or add 
b.age=10;
b.address ="chn"
delete b.name;
console.log(b.age);
console.log(b.name);
console.log(b.address);

// we can assign multiple obj in one variable using assign method
var obj1= {
    name : "d",
    age :5
};

var obj2 = {
    class : "e",
    grade :2
};
// var c = Object.assign({},obj1,obj2,a,b);
var d = Object.create(obj2 ,{})
d.address ="chn"
console.log(d.grade);

// console.log(c);
