var person ={
    name :"Devi",
    age:23,
    add:function(){
        return 2+this.age;
    }

}
person = JSON.stringify(person)  // js to json
person = JSON.parse(person)  // JSON to js
console.log(person);