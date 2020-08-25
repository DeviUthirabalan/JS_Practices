var s1 = "hello ! I am Devi";
var s2 = "                HELLO ! This is test";


console.log(s1.charAt(4));
console.log(s1.charCodeAt(0));
console.log(s1.includes("am"));
console.log(s1.concat(s2));
console.log(String.fromCharCode(104));
console.log(s1.startsWith("hello"));
console.log(s1.endsWith("Devi"));
console.log(s1.indexOf("l"));
console.log(s1.lastIndexOf("l"));
console.log(s1.match(/ello/g));            //convert to array g-uppercase
console.log(s2.match(/ello/i));            //convert to array with lower case
console.log(s1.repeat(2));
console.log(s1.replace(/ello/g , "ELLO"));
console.log(s1.split(" "));
console.log(s1.search("am"));
console.log(s1.slice(1,4));
console.log(s1.substr(1,4));
console.log(s1.substring(1,4));     //same as slice
console.log(s2.trim());           //removing the space
console.log(s1.toLocaleLowerCase());
console.log(s1.toLocaleUpperCase());