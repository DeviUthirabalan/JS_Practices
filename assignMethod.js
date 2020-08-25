var obj1= {
    name : "d",
    age :5
};

var obj2 = {
    class : "e",
    grade :2
};
var obj3 = {
    class : "r",
    grade :2
};
var obj4 = {
    class : "g",
    grade :2
};
var obj5 = {
    class : "m",
    grade :1
}; 
var c = Object.assign({name:"abc"},obj1,obj2);
console.log(c);
