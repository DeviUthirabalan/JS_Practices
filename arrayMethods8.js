
    const id = [1,2,3,4,5]
    const employees =[
        {name:"a" , salary :10},
        {name:"b" , salary :10},
        {name:"c" , salary :30},
        {name:"d" , salary :50},
        {name:"e" , salary :10},
        {name:"f" , salary :10},
        {name:"g" , salary :10},
        {name:"h" , salary :90}
    ]

    const filteredEmp = employees.filter((employee) =>{   
        return employee.salary <=50
    })
    const filteredEmpSal = employees.map((employee) =>{
        return employee.name
    })
    const filteredEmpname = employees.filter((employee) =>{
        return employee.name 
    })
    const findEmp = employees.find((employee) =>{
        return employee.name === "d";
    })
    // employees.find((employee) =>{
    //     console.log(employee.salary)
    // })
    employees.forEach((employee) =>{
        console.log(employee.name)
    })

    const Some = employees.some((employee) => {
        return employee.salary <=50
        
    })
    const Every = employees.every((employee) =>{
        return employee.salary >=1000;
        
    })
    const Reduce = employees.reduce((CurrentTotal,employee) =>{
        return CurrentTotal + employee.salary;

    },0)
    const Includes = id.includes(7)
    // console.log(filteredEmpname)
    // console.log(filteredEmp);
    // console.log(filteredEmpSal);
    // console.log(findEmp)
    console.log( "some of salary 50+ " + Some)
    console.log("Every sal is 1000" + Every)
    console.log("total salary" + Reduce)
    console.log("includes salary" + Includes)


    var array1 =["a","b","c","d"]
    var array3 =["a","b","c","d"];
    var array2 = [ "1" ,"6" ,"3" ,"4"]
    console.log(array1.push("e"));
    console.log(array1);

    console.log(array2.pop());
    console.log(array2);

    console.log(array1.concat(array2));
    
    console.log(array1.join());     // it will join all elements and will took the elemets out of array
    console.log(array1.reverse());

    console.log(array2.shift());
    console.log(array2);

    console.log(array2.unshift(1));
    console.log(array2);

    console.log(array2.slice(0,1));

    console.log(array2.toString());

    console.log(array2.sort());
    
    console.log(array3.splice(1,2,"f"));
    console.log(array3);

